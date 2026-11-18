// supabase-client.js
// Supabase 실시간 클라우드 연동 및 오프라인/로컬 폴백 매니저

const SUPABASE_STORAGE_KEY = "mildict_supabase_config";
const LOCAL_CUSTOM_TERMS_KEY = "mildict_custom_terms";
const LOCAL_TIPS_KEY = "mildict_term_tips";
const LOCAL_SCORES_KEY = "mildict_quiz_scores";

// GitHub Pages 배포 시 하드코딩해서 바로 연결하고 싶다면 아래 값을 채워주세요.
// 보안을 위해 반드시 public anon key만 사용하세요 (service_role key 절대 금지).
const DEFAULT_SUPABASE_CONFIG = {
  url: "",
  anonKey: ""
};

class MilitarySupabaseClient {
  constructor() {
    this.client = null;
    this.isConnected = false;
    this.config = this.loadConfig();
    this.initClient();
  }

  loadConfig() {
    try {
      const saved = localStorage.getItem(SUPABASE_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.url && parsed.anonKey) return parsed;
      }
    } catch (e) {
      console.warn("Supabase config load error:", e);
    }
    return { ...DEFAULT_SUPABASE_CONFIG };
  }

  saveConfig(url, anonKey) {
    const cleanUrl = (url || "").trim().replace(/\/$/, "");
    const cleanKey = (anonKey || "").trim();
    this.config = { url: cleanUrl, anonKey: cleanKey };
    localStorage.setItem(SUPABASE_STORAGE_KEY, JSON.stringify(this.config));
    return this.initClient();
  }

  clearConfig() {
    this.config = { url: "", anonKey: "" };
    localStorage.removeItem(SUPABASE_STORAGE_KEY);
    this.client = null;
    this.isConnected = false;
  }

  initClient() {
    this.client = null;
    this.isConnected = false;
    if (
      this.config.url &&
      this.config.anonKey &&
      typeof window.supabase !== "undefined" &&
      typeof window.supabase.createClient === "function"
    ) {
      try {
        this.client = window.supabase.createClient(this.config.url, this.config.anonKey);
        this.isConnected = true;
      } catch (err) {
        console.error("Supabase init failed:", err);
        this.isConnected = false;
      }
    }
    return this.isConnected;
  }

  async testConnection() {
    if (!this.client) {
      return { ok: false, message: "Project URL과 Anon Key가 설정되지 않았습니다." };
    }
    try {
      const { error } = await this.client.from("military_terms").select("id").limit(1);
      if (error) {
        return {
          ok: false,
          message: `연결은 되었으나 테이블 조회 실패: ${error.message} (supabase_schema.sql 실행 여부를 확인하세요)`
        };
      }
      this.isConnected = true;
      return { ok: true, message: "Supabase 데이터베이스 연결 및 테이블 확인 완료!" };
    } catch (err) {
      return { ok: false, message: `네트워크 오류: ${err.message}` };
    }
  }

  // 1. 용어 목록 불러오기 (기본 교범 + Supabase 또는 LocalStorage)
  async fetchAllTerms(baseTerms) {
    const map = new Map();
    baseTerms.forEach((t) => map.set(t.id, { ...t, source: "교범" }));

    // 로컬 사용자 추가 용어 병합
    try {
      const localCustom = JSON.parse(localStorage.getItem(LOCAL_CUSTOM_TERMS_KEY) || "[]");
      localCustom.forEach((t) => map.set(t.id, { ...t, source: "로컬등록" }));
    } catch (e) {}

    if (this.isConnected && this.client) {
      try {
        const { data, error } = await this.client
          .from("military_terms")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && Array.isArray(data)) {
          data.forEach((row) => {
            map.set(row.id, {
              id: row.id,
              term: row.term,
              abbr: row.abbr,
              english: row.english || "",
              hanja: row.hanja || "",
              category: row.category,
              importance: row.importance || "실무 빈출",
              definition: row.definition,
              practicalTip: row.practical_tip || "",
              example: row.example || "",
              related: Array.isArray(row.related) ? row.related : [],
              author: row.author || "커뮤니티",
              likes: row.likes || 0,
              source: "Supabase"
            });
          });
        }
      } catch (err) {
        console.warn("Supabase fetchAllTerms fallback to local:", err);
      }
    }

    return Array.from(map.values());
  }

  // 2. 신규 용어 등록
  async addTerm(termObj) {
    const newId = termObj.id || `custom-${Date.now()}`;
    const record = {
      id: newId,
      term: termObj.term,
      abbr: termObj.abbr,
      english: termObj.english || "",
      hanja: termObj.hanja || "",
      category: termObj.category,
      importance: termObj.importance || "실무 빈출",
      definition: termObj.definition,
      practicalTip: termObj.practicalTip || "",
      example: termObj.example || "",
      related: termObj.related || [],
      author: termObj.author || "초급간부 제보",
      likes: 0
    };

    // 로컬 백업 저장
    const localCustom = JSON.parse(localStorage.getItem(LOCAL_CUSTOM_TERMS_KEY) || "[]");
    localCustom.unshift(record);
    localStorage.setItem(LOCAL_CUSTOM_TERMS_KEY, JSON.stringify(localCustom));

    if (this.isConnected && this.client) {
      try {
        const { error } = await this.client.from("military_terms").insert({
          id: record.id,
          term: record.term,
          abbr: record.abbr,
          english: record.english,
          hanja: record.hanja,
          category: record.category,
          importance: record.importance,
          definition: record.definition,
          practical_tip: record.practicalTip,
          example: record.example,
          related: record.related,
          author: record.author,
          likes: 0
        });
        if (error) throw error;
        return { ok: true, mode: "supabase", item: { ...record, source: "Supabase" } };
      } catch (err) {
        return {
          ok: true,
          mode: "local",
          warning: `Supabase 저장 실패로 로컬에 저장됨: ${err.message}`,
          item: { ...record, source: "로컬등록" }
        };
      }
    }

    return { ok: true, mode: "local", item: { ...record, source: "로컬등록" } };
  }

  // 3. 기본 용어 전체를 Supabase DB에 일괄 업로드(시드)
  async seedTermsToSupabase(terms) {
    if (!this.isConnected || !this.client) {
      return { ok: false, message: "먼저 Supabase 연결을 설정해 주세요." };
    }
    try {
      const rows = terms.map((t) => ({
        id: t.id,
        term: t.term,
        abbr: t.abbr,
        english: t.english || "",
        hanja: t.hanja || "",
        category: t.category,
        importance: t.importance || "실무 빈출",
        definition: t.definition,
        practical_tip: t.practicalTip || "",
        example: t.example || "",
        related: Array.isArray(t.related) ? t.related : [],
        author: t.author || "기본 교범"
      }));

      const { error } = await this.client
        .from("military_terms")
        .upsert(rows, { onConflict: "id" });

      if (error) throw error;
      return { ok: true, message: `총 ${rows.length}개 용어를 Supabase DB에 성공적으로 동기화했습니다!` };
    } catch (err) {
      return { ok: false, message: `동기화 실패: ${err.message}` };
    }
  }

  // 4. 용어별 선배 간부 실무 팁 조회
  async fetchTermTips(termId) {
    const localAll = JSON.parse(localStorage.getItem(LOCAL_TIPS_KEY) || "{}");
    const localTips = localAll[termId] || [];

    if (this.isConnected && this.client) {
      try {
        const { data, error } = await this.client
          .from("term_tips")
          .select("*")
          .eq("term_id", termId)
          .order("created_at", { ascending: false });

        if (!error && Array.isArray(data)) {
          return data.map((d) => ({
            id: d.id,
            author: d.author_name,
            content: d.tip_content,
            createdAt: d.created_at,
            remote: true
          }));
        }
      } catch (err) {
        console.warn("fetchTermTips fallback:", err);
      }
    }

    return localTips;
  }

  // 5. 용어별 선배 간부 실무 팁 등록
  async addTermTip(termId, authorName, tipContent) {
    const tipObj = {
      id: Date.now(),
      author: authorName || "익명 간부",
      content: tipContent,
      createdAt: new Date().toISOString(),
      remote: false
    };

    const localAll = JSON.parse(localStorage.getItem(LOCAL_TIPS_KEY) || "{}");
    if (!localAll[termId]) localAll[termId] = [];
    localAll[termId].unshift(tipObj);
    localStorage.setItem(LOCAL_TIPS_KEY, JSON.stringify(localAll));

    if (this.isConnected && this.client) {
      try {
        const { error } = await this.client.from("term_tips").insert({
          term_id: termId,
          author_name: tipObj.author,
          tip_content: tipObj.content
        });
        if (!error) tipObj.remote = true;
      } catch (err) {
        console.warn("addTermTip remote failed:", err);
      }
    }

    return tipObj;
  }

  // 6. 퀴즈 리더보드 조회
  async fetchLeaderboard() {
    const defaultLocal = [
      { player_name: "소위 김지호", unit_branch: "1보병사단 소대장", score: 10, total_questions: 10, accuracy: 100, category: "전체" },
      { player_name: "중위 박선임", unit_branch: "수기사 전차소대", score: 9, total_questions: 10, accuracy: 90, category: "작전·훈련" },
      { player_name: "하사 이대한", unit_branch: "특전사 부소대장", score: 8, total_questions: 10, accuracy: 80, category: "전체" }
    ];

    if (this.isConnected && this.client) {
      try {
        const { data, error } = await this.client
          .from("quiz_scores")
          .select("*")
          .order("accuracy", { ascending: false })
          .order("score", { ascending: false })
          .order("created_at", { ascending: false })
          .limit(15);

        if (!error && Array.isArray(data) && data.length > 0) {
          return { mode: "supabase", rows: data };
        }
      } catch (err) {
        console.warn("fetchLeaderboard fallback:", err);
      }
    }

    const saved = JSON.parse(localStorage.getItem(LOCAL_SCORES_KEY) || "null");
    const rows = Array.isArray(saved) ? saved : defaultLocal;
    rows.sort((a, b) => b.accuracy - a.accuracy || b.score - a.score);
    return { mode: "local", rows: rows.slice(0, 15) };
  }

  // 7. 퀴즈 점수 등록
  async submitQuizScore({ playerName, unitBranch, score, totalQuestions, category }) {
    const accuracy = Math.round((score / totalQuestions) * 100);
    const entry = {
      player_name: playerName || "익명 간부",
      unit_branch: unitBranch || "야전부대",
      score,
      total_questions: totalQuestions,
      accuracy,
      category: category || "전체",
      created_at: new Date().toISOString()
    };

    const saved = JSON.parse(localStorage.getItem(LOCAL_SCORES_KEY) || "[]");
    saved.push(entry);
    localStorage.setItem(LOCAL_SCORES_KEY, JSON.stringify(saved));

    if (this.isConnected && this.client) {
      try {
        const { error } = await this.client.from("quiz_scores").insert({
          player_name: entry.player_name,
          unit_branch: entry.unit_branch,
          score: entry.score,
          total_questions: entry.total_questions,
          accuracy: entry.accuracy,
          category: entry.category
        });
        if (!error) return { ok: true, mode: "supabase" };
      } catch (err) {
        console.warn("submitQuizScore remote failed:", err);
      }
    }

    return { ok: true, mode: "local" };
  }
}

window.milSupabase = new MilitarySupabaseClient();
