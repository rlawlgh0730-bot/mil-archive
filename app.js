// app.js - MIL-DICT 초급 간부용 군사용어 및 약어 사전 메인 애플리케이션

(function () {
  const BOOKMARKS_KEY = "mildict_bookmarks";
  const MASTERED_KEY = "mildict_mastered";
  const THEME_KEY = "mildict_theme";

  let allTerms = [];
  let bookmarks = new Set(JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]"));
  let mastered = new Set(JSON.parse(localStorage.getItem(MASTERED_KEY) || "[]"));

  let currentCategory = "전체";
  let currentTemplateKey = "incident";
  let currentModalTermId = null;

  // 퀴즈 상태
  let quizQuestions = [];
  let quizIndex = 0;
  let quizScore = 0;
  let quizCategory = "전체";

  // ==================== 초기화 ====================
  document.addEventListener("DOMContentLoaded", async () => {
    initTheme();
    startLiveDtgClock();
    initNavigation();
    initModals();
    initSupabaseUI();

    await loadTermsData();
    initDictionaryFilters();
    initReportBuilder();
    initTacticalTools();
    initReferenceGuide();
    initQuizModule();
  });

  // ==================== 유틸리티 ====================
  function showToast(msg) {
    const container = document.getElementById("toastContainer");
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDtg(dateObj) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dd = String(dateObj.getDate()).padStart(2, "0");
    const hh = String(dateObj.getHours()).padStart(2, "0");
    const mm = String(dateObj.getMinutes()).padStart(2, "0");
    const mon = months[dateObj.getMonth()];
    const yy = String(dateObj.getFullYear()).slice(-2);
    return `${dd}${hh}${mm}K ${mon} ${yy}`;
  }

  function startLiveDtgClock() {
    const el = document.getElementById("liveDtgClock");
    const update = () => {
      el.textContent = formatDtg(new Date());
    };
    update();
    setInterval(update, 10000);
  }

  // ==================== 테마 토글 ====================
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY) || "light";
    document.documentElement.setAttribute("data-theme", saved);
    const btn = document.getElementById("themeToggleBtn");
    btn.textContent = saved === "dark" ? "☀️" : "🌙";

    btn.addEventListener("click", () => {
      const curr = document.documentElement.getAttribute("data-theme");
      const next = curr === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
      btn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

  // ==================== 탭 네비게이션 ====================
  function initNavigation() {
    const tabs = document.querySelectorAll(".nav-tab");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => t.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(`tab-${target}`).classList.add("active");
      });
    });
  }

  // ==================== 모달 공통 제어 ====================
  function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
  }

  function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
  }

  function initModals() {
    document.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
    });
    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) backdrop.classList.add("hidden");
      });
    });
  }

  // ==================== SUPABASE UI ====================
  function updateSupabaseBadge() {
    const btn = document.getElementById("supabaseStatusBtn");
    const text = document.getElementById("supabaseStatusText");
    if (window.milSupabase.isConnected) {
      btn.classList.remove("local");
      btn.classList.add("connected");
      text.textContent = "Supabase";
    } else {
      btn.classList.remove("connected");
      btn.classList.add("local");
      text.textContent = "Local";
    }
  }

  function initSupabaseUI() {
    updateSupabaseBadge();
    const statusBtn = document.getElementById("supabaseStatusBtn");
    const urlInput = document.getElementById("sbUrlInput");
    const keyInput = document.getElementById("sbKeyInput");
    const testResult = document.getElementById("sbTestResult");

    statusBtn.addEventListener("click", () => {
      urlInput.value = window.milSupabase.config.url || "";
      keyInput.value = window.milSupabase.config.anonKey || "";
      testResult.classList.add("hidden");
      openModal("supabaseModal");
    });

    document.getElementById("sbSaveConnectBtn").addEventListener("click", async () => {
      const url = urlInput.value.trim();
      const key = keyInput.value.trim();
      window.milSupabase.saveConfig(url, key);
      const res = await window.milSupabase.testConnection();
      testResult.classList.remove("hidden", "ok", "err");
      testResult.classList.add(res.ok ? "ok" : "err");
      testResult.textContent = res.message;
      updateSupabaseBadge();

      if (res.ok) {
        await loadTermsData();
        await renderLeaderboard();
        showToast("Supabase 연결 성공! 클라우드 데이터를 불러왔습니다.");
      }
    });

    document.getElementById("sbSeedBtn").addEventListener("click", async () => {
      const res = await window.milSupabase.seedTermsToSupabase(MILITARY_TERMS);
      testResult.classList.remove("hidden", "ok", "err");
      testResult.classList.add(res.ok ? "ok" : "err");
      testResult.textContent = res.message;
      if (res.ok) {
        await loadTermsData();
        showToast("기본 군사용어 DB 업로드 완료!");
      }
    });

    document.getElementById("sbDisconnectBtn").addEventListener("click", async () => {
      window.milSupabase.clearConfig();
      urlInput.value = "";
      keyInput.value = "";
      updateSupabaseBadge();
      testResult.classList.remove("hidden", "ok", "err");
      testResult.classList.add("ok");
      testResult.textContent = "연결이 해제되어 Local Mode로 전환되었습니다.";
      await loadTermsData();
      await renderLeaderboard();
    });
  }

  // ==================== TAB 1: 용어·약어 사전 ====================
  async function loadTermsData() {
    allTerms = await window.milSupabase.fetchAllTerms(MILITARY_TERMS);
    updateDashboardStats();
    renderTermsGrid();
  }

  function updateDashboardStats() {
    const total = allTerms.length;
    const masteredCount = allTerms.filter((t) => mastered.has(t.id)).length;
    const bookmarkedCount = allTerms.filter((t) => bookmarks.has(t.id)).length;
    const pct = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

    document.getElementById("statTotalTerms").textContent = total;
    document.getElementById("statMasteredTerms").textContent = masteredCount;
    document.getElementById("statBookmarkedTerms").textContent = bookmarkedCount;
    document.getElementById("statProgressPct").textContent = `${pct}%`;
    document.getElementById("statProgressBar").style.width = `${pct}%`;
  }

  function initDictionaryFilters() {
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearchBtn");
    const impFilter = document.getElementById("importanceFilter");
    const studyFilter = document.getElementById("studyFilter");

    searchInput.addEventListener("input", () => {
      clearBtn.classList.toggle("hidden", !searchInput.value);
      renderTermsGrid();
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.classList.add("hidden");
      renderTermsGrid();
    });

    impFilter.addEventListener("change", renderTermsGrid);
    studyFilter.addEventListener("change", renderTermsGrid);

    document.querySelectorAll("#categoryChips .story-item, #categoryChips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("#categoryChips .story-item, #categoryChips .chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        currentCategory = chip.dataset.category;
        renderTermsGrid();
      });
    });

    // 신규 용어 제보 모달
    document.getElementById("openAddTermBtn").addEventListener("click", () => {
      openModal("addTermModal");
    });

    document.getElementById("addTermForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const termObj = {
        term: document.getElementById("newTermName").value.trim(),
        abbr: document.getElementById("newTermAbbr").value.trim(),
        english: document.getElementById("newTermEnglish").value.trim(),
        category: document.getElementById("newTermCategory").value,
        importance: document.getElementById("newTermImportance").value,
        author: document.getElementById("newTermAuthor").value.trim() || "초급간부 제보",
        definition: document.getElementById("newTermDef").value.trim(),
        practicalTip: document.getElementById("newTermTip").value.trim(),
        example: document.getElementById("newTermExample").value.trim(),
        related: []
      };

      const res = await window.milSupabase.addTerm(termObj);
      if (res.ok) {
        allTerms.unshift(res.item);
        updateDashboardStats();
        renderTermsGrid();
        e.target.reset();
        closeModal("addTermModal");
        showToast(
          res.mode === "supabase"
            ? "신규 용어가 Supabase 클라우드 DB에 등록되었습니다!"
            : "신규 용어가 로컬 사전에 등록되었습니다!"
        );
      }
    });

    // 상세 모달 내 북마크 / 암기완료 / 팁 등록
    document.getElementById("modalBookmarkBtn").addEventListener("click", () => {
      if (!currentModalTermId) return;
      toggleBookmark(currentModalTermId);
      syncModalActionButtons();
    });

    document.getElementById("modalMasteredBtn").addEventListener("click", () => {
      if (!currentModalTermId) return;
      toggleMastered(currentModalTermId);
      syncModalActionButtons();
    });

    document.getElementById("addTipForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!currentModalTermId) return;
      const author = document.getElementById("tipAuthorInput").value.trim();
      const content = document.getElementById("tipContentInput").value.trim();
      if (!content) return;

      await window.milSupabase.addTermTip(currentModalTermId, author, content);
      document.getElementById("tipContentInput").value = "";
      await renderModalTips(currentModalTermId);
      showToast("실무 노하우 팁이 등록되었습니다!");
    });
  }

  function toggleBookmark(id) {
    if (bookmarks.has(id)) bookmarks.delete(id);
    else bookmarks.add(id);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...bookmarks]));
    updateDashboardStats();
    renderTermsGrid();
  }

  function toggleMastered(id) {
    if (mastered.has(id)) mastered.delete(id);
    else mastered.add(id);
    localStorage.setItem(MASTERED_KEY, JSON.stringify([...mastered]));
    updateDashboardStats();
    renderTermsGrid();
  }

  function renderTermsGrid() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const imp = document.getElementById("importanceFilter").value;
    const study = document.getElementById("studyFilter").value;

    const filtered = allTerms.filter((t) => {
      if (currentCategory !== "전체" && t.category !== currentCategory) return false;
      if (imp !== "all" && t.importance !== imp) return false;
      if (study === "bookmarked" && !bookmarks.has(t.id)) return false;
      if (study === "mastered" && !mastered.has(t.id)) return false;
      if (study === "unmastered" && mastered.has(t.id)) return false;

      if (query) {
        const hay = `${t.term} ${t.abbr} ${t.english} ${t.hanja} ${t.definition} ${t.practicalTip}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    document.getElementById("resultCountText").textContent = `총 ${filtered.length}개의 용어가 검색되었습니다.`;

    const grid = document.getElementById("termsGrid");
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="panel-card" style="grid-column:1/-1; text-align:center; padding:40px;">
        <p style="color:var(--text-secondary);">조건에 맞는 군사용어가 없습니다. 검색어나 필터를 초기화해 보세요.</p>
      </div>`;
      return;
    }

    grid.innerHTML = filtered
      .map((t) => {
        const isBm = bookmarks.has(t.id);
        const isMs = mastered.has(t.id);
        return `
          <article class="term-card ${isMs ? "mastered" : ""}" data-term-id="${escapeHtml(t.id)}">
            <div class="card-top">
              <div class="card-badges">
                <span class="badge-accent">${escapeHtml(t.category)}</span>
                <span class="${t.importance === "필수 암기" ? "badge-gold" : "badge-muted"}">${escapeHtml(t.importance)}</span>
              </div>
              <div class="card-quick-actions">
                <button class="mini-icon-btn ${isBm ? "active" : ""}" data-action="bookmark" data-id="${escapeHtml(t.id)}" title="북마크">🔖</button>
                <button class="mini-icon-btn ${isMs ? "active" : ""}" data-action="master" data-id="${escapeHtml(t.id)}" title="암기 완료">✅</button>
              </div>
            </div>
            <h3 class="term-title">${escapeHtml(t.term)}</h3>
            <p class="term-english mono">${escapeHtml(t.english || t.abbr)}</p>
            <p class="term-def">${escapeHtml(t.definition)}</p>
            ${
              t.practicalTip
                ? `<div class="term-tip-preview"><strong>실무 팁:</strong> ${escapeHtml(t.practicalTip)}</div>`
                : ""
            }
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll(".term-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const actionBtn = e.target.closest("[data-action]");
        if (actionBtn) {
          e.stopPropagation();
          const id = actionBtn.dataset.id;
          if (actionBtn.dataset.action === "bookmark") toggleBookmark(id);
          else if (actionBtn.dataset.action === "master") toggleMastered(id);
          return;
        }
        openTermDetailModal(card.dataset.termId);
      });
    });
  }

  async function openTermDetailModal(termId) {
    const term = allTerms.find((t) => t.id === termId);
    if (!term) return;
    currentModalTermId = termId;

    document.getElementById("modalCategoryBadge").textContent = term.category;
    document.getElementById("modalImportanceBadge").textContent = term.importance;
    document.getElementById("modalSourceBadge").textContent = term.source || "교범";
    document.getElementById("modalTermTitle").textContent = term.term;
    document.getElementById("modalTermSub").textContent = [term.english, term.hanja].filter(Boolean).join(" · ") || term.abbr;
    document.getElementById("modalDefinition").textContent = term.definition;
    document.getElementById("modalPracticalTip").textContent = term.practicalTip || "야전 교범 및 부대 예규(SOP)를 참조하세요.";
    document.getElementById("modalExample").textContent = term.example || "등록된 예문이 없습니다.";

    const relContainer = document.getElementById("modalRelatedTags");
    if (Array.isArray(term.related) && term.related.length > 0) {
      relContainer.innerHTML = term.related
        .map((r) => `<button class="rel-tag" type="button" data-rel="${escapeHtml(r)}"># ${escapeHtml(r)}</button>`)
        .join("");
      relContainer.querySelectorAll(".rel-tag").forEach((btn) => {
        btn.addEventListener("click", () => {
          closeModal("termDetailModal");
          document.getElementById("searchInput").value = btn.dataset.rel;
          document.getElementById("clearSearchBtn").classList.remove("hidden");
          renderTermsGrid();
        });
      });
    } else {
      relContainer.innerHTML = `<span style="color:var(--text-muted); font-size:0.84rem;">연관 용어 없음</span>`;
    }

    syncModalActionButtons();
    openModal("termDetailModal");
    await renderModalTips(termId);
  }

  function syncModalActionButtons() {
    if (!currentModalTermId) return;
    const bmBtn = document.getElementById("modalBookmarkBtn");
    const msBtn = document.getElementById("modalMasteredBtn");
    bmBtn.textContent = bookmarks.has(currentModalTermId) ? "🔖 북마크됨" : "🔖 북마크";
    msBtn.textContent = mastered.has(currentModalTermId) ? "✅ 암기완료됨" : "✅ 암기완료";
  }

  async function renderModalTips(termId) {
    const listEl = document.getElementById("termTipsList");
    listEl.innerHTML = `<p style="color:var(--text-muted); font-size:0.82rem;">팁 불러오는 중...</p>`;
    const tips = await window.milSupabase.fetchTermTips(termId);

    if (!tips.length) {
      listEl.innerHTML = `<p style="color:var(--text-muted); font-size:0.82rem;">아직 등록된 선배/동료 간부 팁이 없습니다. 첫 번째 노하우를 남겨보세요!</p>`;
      return;
    }

    listEl.innerHTML = tips
      .map(
        (tip) => `
      <div class="tip-item">
        <div class="tip-item-head">
          <strong>🎖️ ${escapeHtml(tip.author)}</strong>
          <span>${tip.remote ? "Supabase 공유" : "로컬 저장"}</span>
        </div>
        <div>${escapeHtml(tip.content)}</div>
      </div>`
      )
      .join("");
  }

  // ==================== TAB 2: 실전 보고체 & 보고문 생성기 ====================
  function initReportBuilder() {
    // 우측 변환 예시 렌더링
    const convList = document.getElementById("speechConversionsList");
    convList.innerHTML = SPEECH_CONVERSIONS.map(
      (c) => `
      <div class="conv-item">
        <div class="conv-sit">📌 ${escapeHtml(c.situation)}</div>
        <div class="conv-bad"><strong>❌ 사회 말투:</strong> "${escapeHtml(c.bad)}"</div>
        <div class="conv-good"><strong>✅ 군 표준 보고:</strong> "${escapeHtml(c.good)}"</div>
        <div class="conv-point">💡 <strong>핵심 포인트:</strong> ${escapeHtml(c.point)}</div>
      </div>`
    ).join("");

    // 템플릿 탭 전환
    document.querySelectorAll("#reportTemplateTabs .tpl-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#reportTemplateTabs .tpl-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentTemplateKey = btn.dataset.tpl;
        renderReportForm();
      });
    });

    document.getElementById("copyReportBtn").addEventListener("click", async () => {
      const text = document.getElementById("reportOutput").value;
      try {
        await navigator.clipboard.writeText(text);
        showToast("보고 전문이 클립보드에 복사되었습니다!");
      } catch {
        showToast("복사에 실패했습니다. 직접 드래그하여 복사해 주세요.");
      }
    });

    renderReportForm();
  }

  function renderReportForm() {
    const tpl = REPORT_TEMPLATES[currentTemplateKey];
    document.getElementById("tplDescription").textContent = tpl.desc;
    const form = document.getElementById("reportForm");

    form.innerHTML = tpl.fields
      .map(
        (f) => `
      <div>
        <label class="field-label" for="rf-${f.id}">${escapeHtml(f.label)}</label>
        <input
          type="text"
          id="rf-${f.id}"
          class="text-input full-w"
          data-field-id="${f.id}"
          value="${escapeHtml(f.default)}"
          placeholder="${escapeHtml(f.placeholder)}"
        />
      </div>`
      )
      .join("");

    const updateOutput = () => {
      const values = {};
      tpl.fields.forEach((f) => {
        values[f.id] = document.getElementById(`rf-${f.id}`).value.trim() || f.placeholder;
      });
      document.getElementById("reportOutput").value = tpl.generate(values);
    };

    form.querySelectorAll("input").forEach((inp) => inp.addEventListener("input", updateOutput));
    updateOutput();
  }

  // ==================== TAB 3: NATO 포네틱 & 군사시간 도구 ====================
  function initTacticalTools() {
    const natoInput = document.getElementById("natoInput");
    const natoOutput = document.getElementById("natoOutput");

    const renderNato = () => {
      const val = natoInput.value.toUpperCase();
      if (!val.trim()) {
        natoOutput.innerHTML = `<span style="color:var(--text-muted); font-size:0.86rem;">변환할 영문 또는 숫자를 입력하세요.</span>`;
        return;
      }
      natoOutput.innerHTML = [...val]
        .map((ch) => {
          if (ch === " ") return `<div style="width:12px;"></div>`;
          const entry = NATO_PHONETIC[ch];
          if (!entry) {
            return `<div class="nato-token"><span class="char">${escapeHtml(ch)}</span><span class="word">기호</span></div>`;
          }
          return `<div class="nato-token"><span class="char">${escapeHtml(ch)}</span><span class="word">${entry.code}<br/>(${entry.kor})</span></div>`;
        })
        .join("");
    };

    natoInput.addEventListener("input", renderNato);
    renderNato();

    // 전체 일람표
    document.getElementById("natoFullTable").innerHTML = Object.entries(NATO_PHONETIC)
      .map(
        ([k, v]) => `<div class="nato-mini-cell"><strong class="mono text-accent">${k}</strong> : ${v.code} (${v.kor})</div>`
      )
      .join("");

    // 음성 듣기 (Web Speech API)
    document.getElementById("speakNatoBtn").addEventListener("click", () => {
      if (!("speechSynthesis" in window)) {
        showToast("이 브라우저는 음성 합성을 지원하지 않습니다.");
        return;
      }
      const words = [...natoInput.value.toUpperCase()]
        .map((ch) => (NATO_PHONETIC[ch] ? NATO_PHONETIC[ch].code : ""))
        .filter(Boolean)
        .join(" ");
      if (!words) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(words);
      utter.lang = "en-US";
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    });

    // DTG 변환기
    const dtgInput = document.getElementById("dtgDateTimeInput");
    const setNowDtg = () => {
      const now = new Date();
      const localIso = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
      dtgInput.value = localIso;
      updateDtgResult();
    };

    const updateDtgResult = () => {
      if (!dtgInput.value) return;
      const d = new Date(dtgInput.value);
      document.getElementById("dtgResultKilo").textContent = formatDtg(d);
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      document.getElementById("dtgResultShort").textContent = `${d.getDate()}일 ${hh}:${mm}부`;
    };

    dtgInput.addEventListener("input", updateDtgResult);
    document.getElementById("setNowDtgBtn").addEventListener("click", setNowDtg);
    setNowDtg();

    // H-Hour 계산기
    const hInput = document.getElementById("hHourInput");
    const oInput = document.getElementById("hOffsetInput");
    const updateHHour = () => {
      const [hh, mm] = (hInput.value || "05:30").split(":").map(Number);
      const offsetHours = parseFloat(oInput.value || "0");
      const totalMinutes = (hh * 60 + mm + Math.round(offsetHours * 60) + 1440 * 7) % 1440;
      const resH = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
      const resM = String(totalMinutes % 60).padStart(2, "0");

      const sign = offsetHours > 0 ? `+${offsetHours}` : offsetHours === 0 ? "" : `${offsetHours}`;
      document.getElementById("hHourLabel").textContent = `H${sign}`;
      document.getElementById("hHourComputed").textContent = `${resH}:${resM}`;
    };

    hInput.addEventListener("input", updateHHour);
    oInput.addEventListener("input", updateHHour);
    updateHHour();
  }

  // ==================== TAB 4: 참모·부대·군수 도감 ====================
  function initReferenceGuide() {
    document.getElementById("staffGuideGrid").innerHTML = STAFF_GUIDE.map(
      (s) => `
      <div class="ref-card">
        <div class="ref-code">${escapeHtml(s.code)}</div>
        <h4>${escapeHtml(s.name)}</h4>
        <p>${escapeHtml(s.role)}</p>
        <div class="ref-tip"><strong>초급간부 협조 팁:</strong> ${escapeHtml(s.juniorTip)}</div>
      </div>`
    ).join("");

    document.getElementById("echelonTableBody").innerHTML = ECHELON_GUIDE.map(
      (e) => `
      <tr>
        <td><strong>${escapeHtml(e.unit)}</strong></td>
        <td class="mono text-accent">${escapeHtml(e.abbr)}</td>
        <td class="mono" style="font-weight:700; color:var(--gold);">${escapeHtml(e.symbol)}</td>
        <td>${escapeHtml(e.commander)}</td>
        <td>${escapeHtml(e.size)}</td>
      </tr>`
    ).join("");

    document.getElementById("supplyClassesGrid").innerHTML = SUPPLY_CLASSES.map(
      (c) => `
      <div class="supply-card">
        <div class="supply-head">
          <span class="badge-accent">${escapeHtml(c.cls)}</span>
          <span style="font-size:1.25rem;">${c.icon}</span>
        </div>
        <h4 style="margin-bottom:4px;">${escapeHtml(c.name)}</h4>
        <p style="font-size:0.82rem; color:var(--text-secondary);">${escapeHtml(c.desc)}</p>
        <div class="supply-mnemonic">💡 암기: ${escapeHtml(c.mnemonic)}</div>
      </div>`
    ).join("");
  }

  // ==================== TAB 5: 역량 퀴즈 & 리더보드 ====================
  function initQuizModule() {
    document.getElementById("startQuizBtn").addEventListener("click", startQuiz);
    document.getElementById("nextQuestionBtn").addEventListener("click", nextQuestion);
    document.getElementById("retryQuizBtn").addEventListener("click", () => {
      document.getElementById("quizResultView").classList.add("hidden");
      document.getElementById("quizSetupView").classList.remove("hidden");
    });

    document.getElementById("submitScoreBtn").addEventListener("click", async () => {
      const playerName = document.getElementById("playerNameInput").value.trim() || "익명 초급간부";
      const unitBranch = document.getElementById("playerUnitInput").value.trim() || "야전부대";
      const btn = document.getElementById("submitScoreBtn");
      btn.disabled = true;

      const res = await window.milSupabase.submitQuizScore({
        playerName,
        unitBranch,
        score: quizScore,
        totalQuestions: quizQuestions.length,
        category: quizCategory
      });

      btn.disabled = false;
      await renderLeaderboard();
      showToast(
        res.mode === "supabase"
          ? "점수가 Supabase 실시간 리더보드에 등록되었습니다!"
          : "점수가 로컬 리더보드에 등록되었습니다!"
      );
    });

    document.getElementById("refreshLeaderboardBtn").addEventListener("click", renderLeaderboard);
    renderLeaderboard();
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startQuiz() {
    quizCategory = document.getElementById("quizCategorySelect").value;
    const reqCount = parseInt(document.getElementById("quizCountSelect").value, 10);

    const pool =
      quizCategory === "전체" ? allTerms : allTerms.filter((t) => t.category === quizCategory);

    if (pool.length < 4) {
      showToast("선택한 분야의 용어가 4개 미만입니다. '전체 분야'로 시도해 주세요.");
      return;
    }

    const picked = shuffle(pool).slice(0, Math.min(reqCount, pool.length));
    quizQuestions = picked.map((target, idx) => {
      const distractors = shuffle(allTerms.filter((t) => t.id !== target.id)).slice(0, 3);
      const askMeaning = idx % 2 === 0;
      const options = shuffle([target, ...distractors]).map((item) => ({
        id: item.id,
        label: askMeaning ? item.definition : item.term
      }));

      return {
        target,
        askMeaning,
        prompt: askMeaning
          ? `다음 군사용어·약어의 정확한 설명은? → [ ${target.term} ]`
          : `다음 설명에 해당하는 군사용어·약어는?\n"${target.definition}"`,
        options
      };
    });

    quizIndex = 0;
    quizScore = 0;

    document.getElementById("quizSetupView").classList.add("hidden");
    document.getElementById("quizResultView").classList.add("hidden");
    document.getElementById("quizPlayView").classList.remove("hidden");
    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    const q = quizQuestions[quizIndex];
    document.getElementById("quizProgressText").textContent = `문제 ${quizIndex + 1} / ${quizQuestions.length}`;
    document.getElementById("quizLiveScore").textContent = `현재 점수: ${quizScore}`;
    document.getElementById("quizQBadge").textContent = q.askMeaning ? "용어 → 의미" : "의미 → 용어";
    document.getElementById("quizQuestionText").textContent = q.prompt;

    const feedbackEl = document.getElementById("quizFeedback");
    feedbackEl.classList.add("hidden");
    document.getElementById("nextQuestionBtn").classList.add("hidden");

    const choicesEl = document.getElementById("quizChoices");
    choicesEl.innerHTML = q.options
      .map(
        (opt, i) => `
      <button class="choice-btn" type="button" data-opt-id="${escapeHtml(opt.id)}">
        ${i + 1}. ${escapeHtml(opt.label)}
      </button>`
      )
      .join("");

    choicesEl.querySelectorAll(".choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => handleAnswer(btn, q));
    });
  }

  function handleAnswer(selectedBtn, q) {
    const buttons = document.querySelectorAll("#quizChoices .choice-btn");
    buttons.forEach((b) => (b.disabled = true));

    const isCorrect = selectedBtn.dataset.optId === q.target.id;
    if (isCorrect) {
      quizScore += 1;
      selectedBtn.classList.add("correct");
    } else {
      selectedBtn.classList.add("wrong");
      buttons.forEach((b) => {
        if (b.dataset.optId === q.target.id) b.classList.add("correct");
      });
    }

    document.getElementById("quizLiveScore").textContent = `현재 점수: ${quizScore}`;

    const feedbackEl = document.getElementById("quizFeedback");
    feedbackEl.classList.remove("hidden");
    feedbackEl.innerHTML = `
      <strong>${isCorrect ? "✅ 정답입니다!" : "❌ 오답입니다."}</strong><br/>
      <span><strong>${escapeHtml(q.target.term)}</strong>: ${escapeHtml(q.target.practicalTip || q.target.definition)}</span>
    `;

    const nextBtn = document.getElementById("nextQuestionBtn");
    nextBtn.textContent = quizIndex + 1 < quizQuestions.length ? "다음 문제 →" : "최종 결과 확인 →";
    nextBtn.classList.remove("hidden");
  }

  function nextQuestion() {
    quizIndex += 1;
    if (quizIndex < quizQuestions.length) {
      renderCurrentQuestion();
    } else {
      showQuizResult();
    }
  }

  function showQuizResult() {
    document.getElementById("quizPlayView").classList.add("hidden");
    document.getElementById("quizResultView").classList.remove("hidden");

    const total = quizQuestions.length;
    const pct = Math.round((quizScore / total) * 100);
    let grade = "보수교육 권장";
    let comment = "핵심 필수 암기 용어부터 북마크하여 다시 복습해 보세요!";

    if (pct >= 90) {
      grade = "특급 지휘관급";
      comment = "완벽합니다! 야전 작전회의와 보고 현장에서 즉시 에이스로 인정받을 수준입니다.";
    } else if (pct >= 70) {
      grade = "우수 초급간부";
      comment = "기본기가 탄탄합니다. 틀린 용어 몇 가지만 실무 팁과 함께 복습하면 완벽합니다.";
    }

    document.getElementById("resultGradeBadge").textContent = grade;
    document.getElementById("resultScoreTitle").textContent = `${quizScore} / ${total} (${pct}%)`;
    document.getElementById("resultComment").textContent = comment;
  }

  async function renderLeaderboard() {
    const listEl = document.getElementById("leaderboardList");
    const labelEl = document.getElementById("leaderboardSourceLabel");
    const res = await window.milSupabase.fetchLeaderboard();

    labelEl.textContent =
      res.mode === "supabase" ? "🟢 Supabase 실시간 클라우드 랭킹" : "🟡 로컬 브라우저 랭킹 (Supabase 연결 시 공유됨)";

    if (!res.rows.length) {
      listEl.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem;">아직 등록된 기록이 없습니다.</p>`;
      return;
    }

    listEl.innerHTML = res.rows
      .map((row, idx) => {
        const rankCls = idx === 0 ? "top1" : idx === 1 ? "top2" : idx === 2 ? "top3" : "";
        return `
        <div class="lb-item">
          <div class="lb-left">
            <span class="lb-rank ${rankCls}">${idx + 1}</span>
            <div>
              <div class="lb-name">${escapeHtml(row.player_name)}</div>
              <div class="lb-unit">${escapeHtml(row.unit_branch)} · ${escapeHtml(row.category)}</div>
            </div>
          </div>
          <div class="lb-score">${row.score}/${row.total_questions} (${row.accuracy}%)</div>
        </div>`;
      })
      .join("");
  }
})();
