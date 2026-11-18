// 초급 간부용 군사용어 및 약어 사전 데이터베이스 (data.js)

const MILITARY_TERMS = [
  // ================= 개인화기·사격 (Individual Weapons & Marksmanship) =================
  {
    id: "wp-001",
    term: "영점사격 (Zeroing) & 클릭 조정",
    abbr: "영점사격",
    english: "Zeroing & Sight Adjustment",
    hanja: "零點射擊",
    category: "개인화기·사격",
    importance: "필수 암기",
    definition: "개인화기(K2/K2C1 등)의 조준선과 실제 탄도가 일치하도록 표적지(25m)에 3발씩 사격하여 탄착군을 형성한 뒤 가늠자/가늠쇠 또는 광학장비(PVS-11K 등)의 클릭을 조정하는 절차입니다.",
    practicalTip: "K2 소총 기준 25m 영점표적지 한 칸(1cm)은 2클릭! 탄착군이 표적 중앙보다 '오른쪽 위'에 맞았다면, 가늠자를 '왼쪽(L), 아래(D)'로 돌려야 합니다. 사수들에게 '탄착군을 중앙으로 끌고 온다'고 설명하면 이해가 빠릅니다.",
    example: "금일 오전 09:00부터 신병 전입자 대상 25m K2C1 영점사격 및 클릭 조정을 실시합니다.",
    related: ["PRI", "기능고장", "탄착군"]
  },
  {
    id: "wp-002",
    term: "기능고장 처치 (즉각조치 / 비정상조치)",
    abbr: "기능고장",
    english: "Malfunction Clearance (Immediate / Remedial Action)",
    hanja: "機能故障 處置",
    category: "개인화기·사격",
    importance: "필수 암기",
    definition: "사격 중 탄약 불발, 탄피 배출 불량, 이중 급탄 등으로 화기가 작동하지 않을 때 실시하는 처치입니다. 즉각조치(SPORTS/탄알집 두드리기→장전손잡이 당기기→발사) 후에도 해결되지 않으면 비정상조치를 실시합니다.",
    practicalTip: "사격장에서 불발탄이 발생했을 때 가장 위험한 행동은 총구를 뒤(통제관 쪽)로 돌리는 것입니다! 무조건 '총구는 표적 방향(전방)'을 유지한 채 사수가 손을 들어 '기능고장!'을 외치도록 사전 교육하세요.",
    example: "실거리 사격 간 3사로 사수 기능고장 발생에 따라 총구 전방 유지 상태에서 통제관 입회하에 즉각조치를 실시하였습니다.",
    related: ["영점사격", "사격통제", "지발탄"]
  },
  {
    id: "wp-003",
    term: "사격술 예비훈련 (PRI)",
    abbr: "PRI",
    english: "Preparatory Rifle Instruction",
    hanja: "射擊術 豫備訓練",
    category: "개인화기·사격",
    importance: "필수 암기",
    definition: "실탄 사격 전 조준선 정렬, 정조준, 호흡 조절, 격발(방아쇠 당기기), 사격 자세(엎드려·무릎·서서쏴) 및 바둑판 점찍기 등을 반복 숙달하는 기초 사격 훈련입니다.",
    practicalTip: "'피 나고 알 배기고 이 갈리는 훈련'이라는 별명이 있을 만큼 힘들지만, PRI를 제대로 잡으면 사격 합격률이 수직 상승합니다. 특히 방아쇠를 '갑자기 당기지(급격발) 말고 서서히 지그시 짠다'는 감각을 강조하세요.",
    example: "차주 측정식 사격 합격률 90% 달성을 위해 금주 오후 일과는 전 소대원 PRI 훈련으로 진행합니다.",
    related: ["영점사격", "정조준", "K2C1"]
  },
  {
    id: "wp-004",
    term: "표적지시기 (PEQ-15 / PVS-11K) & 야간투시경 (NVG)",
    abbr: "PEQ / NVG",
    english: "Laser Aiming Module / Night Vision Goggles",
    hanja: "標的指示機 / 夜間透視鏡",
    category: "개인화기·사격",
    importance: "실무 빈출",
    definition: "야간 전투 시 적외선(IR) 레이저를 표적에 조사하여 조준하는 표적지시기(PEQ 계열)와 미광을 증폭해 어둠 속을 식별하는 야간투시경(NVG, PVS-04K 등)입니다.",
    practicalTip: "야간 사격이나 훈련 전 광학장비의 배터리 잔량, 영점 풀림 여부, 그리고 비인가 상태에서의 가시광선 레이저 오작동 여부를 반드시 점검하세요. 고가 장비이므로 결속(낙하 방지 끈) 확인은 필수입니다.",
    example: "야간 전술사격 간 전 인원 헬멧에 PVS-04K를 결합하고 표적지시기 IR 모드로 사격을 실시합니다.",
    related: ["영점사격", "TOD", "방호"]
  },
  {
    id: "wp-005",
    term: "사격장 통제구호 및 안전수칙",
    abbr: "사격통제",
    english: "Range Control Commands & Safety Rules",
    hanja: "射擊場 統制口號",
    category: "개인화기·사격",
    importance: "필수 암기",
    definition: "사격장에서 총기 안전사고를 예방하기 위해 사격통제관(소대장/중대장)이 하달하는 표준 구호('탄알집 결합', '장전', '사격 개시', '사격 중지', '약실 검사')와 안전 절차입니다.",
    practicalTip: "사격 종료 후 '약실 검사' 시에는 반드시 노리쇠를 후퇴 고정시킨 상태에서 사수와 부사수가 육안으로 약실과 탄알집 삽입구가 비어 있는지 직접 확인하고, 사로 퇴장 전 탄피·잔여 실탄을 철저히 대조하세요.",
    example: "사격 중지! 전 사수 안전장치 '안전'에 위치, 탄알집 제거 후 약실 검사 실시!",
    related: ["기능고장", "영점사격", "PRI"]
  },

  // ================= 분대 공격·방어 (Squad Offense & Defense) =================
  {
    id: "sq-001",
    term: "분대 전투대형 (일렬·쐐기·산개 대형)",
    abbr: "분대대형",
    english: "Squad Combat Formations (Column / Wedge / Line)",
    hanja: "分隊 戰鬪隊形",
    category: "분대 공격·방어",
    importance: "필수 암기",
    definition: "지형과 적 위협 정도에 따라 분대가 기동하는 대형입니다. 일렬대형은 기동속도와 통제가 쉽고 좁은 지형에 적합하며, 쐐기대형은 전방위 관측 및 화력 집중에 유리한 기본 전투대형, 산개대형(횡대)은 적 진지 돌격 시 최대 화력을 지향할 때 사용합니다.",
    practicalTip: "분대장들에게 '왜 지금 이 대형을 서야 하는가?'를 알려주세요. 능선이나 개활지에서는 무조건 '쐐기대형', 좁은 산길이나 야간 기동 시에는 '일렬대형', 돌격 직전에는 '산개대형'으로 전환합니다.",
    example: "개활지 진입 전 분대장은 분대 전투대형을 일렬대형에서 쐐기대형으로 전환하여 적 기습에 대비하였습니다.",
    related: ["약진", "엄호사격", "소대대형"]
  },
  {
    id: "sq-002",
    term: "약진 및 상호 엄호사격 (Fire and Movement)",
    abbr: "약진·엄호",
    english: "Bounding Overwatching / Fire and Movement",
    hanja: "躍進 및 嚴護射擊",
    category: "분대 공격·방어",
    importance: "필수 암기",
    definition: "적 화력하에서 분대가 이동할 때 전 부대가 동시에 움직이지 않고, 절반(사격조/엄호조)이 적을 향해 제압사격을 가하는 동안 나머지 절반(기동조)이 은폐·엄폐물을 이용해 짧게 달려 나가는 전술 기동입니다.",
    practicalTip: "초급간부 평가 시 가장 많이 지적받는 부분이 '엄호사격 없이 돌격만 하는 것'입니다! 이동 전 반드시 '1개 조 엄호 사격 개시 → 기동조 3~5초 이내 짧은 약진(적을 조준할 틈을 주지 않음) → 엄폐 후 교대' 순서를 지키세요.",
    example: "2분대 1조가 적 기관총 진지를 향해 엄호사격을 실시하는 동안 2조가 전방 30m 암석 뒤로 약진하였습니다.",
    related: ["분대대형", "고정조·돌격조", "은폐엄폐"]
  },
  {
    id: "sq-003",
    term: "개인호 / 유개호 / 무개호 (진지 구축)",
    abbr: "개인호·유개호",
    english: "Fighting Position (Covered / Uncovered Foxhole)",
    hanja: "個人壕 / 有蓋壕",
    category: "분대 공격·방어",
    importance: "필수 암기",
    definition: "방어 시 전투원이 적의 직사·곡사화력으로부터 몸을 보호하며 사격할 수 있도록 판 방호 진지입니다. 지붕(덮개)이 없어 빠른 구축이 가능한 호가 무개호, 통나무·모래주머니 등으로 상단 방호덮개를 설치해 포탄 파편까지 막아주는 호가 유개호입니다.",
    practicalTip: "개인호를 팔 때 무작정 깊게 파기 전에 먼저 '사격 자세를 잡고 전방 사계(관측 범위)가 나오는지'부터 확인해야 합니다. 또한 호 바닥에는 수류탄이 들어왔을 때 굴러 떨어지게 만드는 '수류탄 집수구'를 파는 것이 교범의 정석입니다.",
    example: "분대는 1차로 신속히 무개호를 굴착하여 방어 태세를 갖춘 뒤, 4종 물자(통나무·사낭)를 보급받아 유개호로 보강하였습니다.",
    related: ["사계청소", "사격카드", "OCOKA"]
  },
  {
    id: "sq-004",
    term: "사계청소 및 분대 사격카드 (Range Card)",
    abbr: "사계청소·사격카드",
    english: "Clearing Fields of Fire & Sector Sketch / Range Card",
    hanja: "射界淸掃 / 射擊카드",
    category: "분대 공격·방어",
    importance: "실무 빈출",
    definition: "사계청소는 방어 진지 전방에서 아군의 관측과 사격을 방해하는 수풀·나뭇가지·장애물을 제거(단, 적에게 진지 위치가 노출되지 않도록 위장은 유지)하는 작업이며, 사격카드는 각 진지·화기별 책임 사격구역, 주요 지형지물까지의 거리, 최우선 표적을 기록한 약도입니다.",
    practicalTip: "사격카드를 그려두면 야간이나 안개로 앞이 안 보일 때도, 혹은 근무자가 교대되더라도 사전에 측정해 둔 거리와 방위각만으로 정확한 사격 통제가 가능합니다. 진지 검열 시 소대장 필수 확인 품목입니다!",
    example: "각 분대장은 개인호 구축 완료 후 진지 전방 불필요한 잡목을 제거(사계청소)하고 분대장에게 사격카드를 제출하십시오.",
    related: ["개인호·유개호", "OCOKA", "FPF"]
  },
  {
    id: "sq-005",
    term: "돌격 및 진지 소탕 (Assault & Clearing)",
    abbr: "진지소탕",
    english: "Assault & Clearing Enemy Position",
    hanja: "突擊 및 陣地 掃蕩",
    category: "분대 공격·방어",
    importance: "실무 빈출",
    definition: "아군 엄호화력으로 적을 제압한 뒤, 돌격조가 적 진지 코앞까지 접근하여 수류탄 투척 후 진지 내부로 돌입해 잔적을 완전히 제압·섬멸하는 근접전투 절차입니다.",
    practicalTip: "적 진지를 점령했다고 바로 서서 걸어 다니면 안 됩니다! 잔적의 매복이나 역습에 대비해 즉시 진지 너머로 시선을 돌리고 '전방 경계 및 재편성'으로 이어져야 합니다.",
    example: "돌격조는 적 벙커 사각지대로 접근해 세열수류탄을 투척하고 폭발 직후 신속히 진지 내부를 소탕하였습니다.",
    related: ["약진·엄호", "진지재편성", "고정조·돌격조"]
  },

  // ================= 소대 공격·방어 (Platoon Offense & Defense) =================
  {
    id: "pl-001",
    term: "고정조 / 돌격조 / 지원조 (소대 공격 편조)",
    abbr: "고정·돌격조",
    english: "Base of Fire / Assault Element / Support Element",
    hanja: "固定組 / 突擊組 / 支援組",
    category: "소대 공격·방어",
    importance: "필수 암기",
    definition: "소대 공격작전 시 임무에 따라 나누는 전술적 편조입니다. 고정조(화력지원조)는 공용화기(K3/K4/K6 등)로 적을 진지에 묶어두어 고개를 못 들게 만들고, 돌격조는 우회 기동하여 적의 측방·후방으로 접근해 진지를 탈환합니다.",
    practicalTip: "소대 공격 전술의 핵심은 '정면 박치기 금지'입니다! 1개 분대 + 공용화기로 적을 정면에서 '고정'시키고, 나머지 2개 분대가 은밀히 측방으로 우회해 '돌격'하는 그림을 그리면 전술 평가에서 만점입니다.",
    example: "제1분대와 공용화기반을 고정조로 운용하여 적의 화력을 고착시킨 사이, 2·3분대 돌격조가 좌측 능선으로 우회 기동합니다.",
    related: ["LD·OBJ·LOA", "진지재편성", "약진·엄호"]
  },
  {
    id: "pl-002",
    term: "공격개시선 (LD) / 목표 (OBJ) / 한계진출선 (LOA)",
    abbr: "LD / OBJ / LOA",
    english: "Line of Departure / Objective / Limit of Advance",
    hanja: "攻擊開始線 / 目標 / 限界進出線",
    category: "소대 공격·방어",
    importance: "필수 암기",
    definition: "공격작전 시 부대 기동을 통제하는 핵심 그래픽 기호입니다. LD는 공격부대가 H시에 통과해 공격을 개시하는 선, OBJ는 탈환·확보해야 할 최종 목표 지형, LOA는 아군 화력 오폭 방지 및 부대 통제를 위해 목표 탈환 후 더 이상 전진하지 못하도록 제한하는 한계선입니다.",
    practicalTip: "전술도판 브리핑 때 '아 소대는 집결지(AA)에서 기동하여 H시에 공격개시선(LD)을 통과, 목표(OBJ) 백호를 탈환한 후 한계진출선(LOA)에서 진지를 재편성하겠습니다'라고 발표하면 완벽합니다!",
    example: "제1소대는 공격개시선(LD) 통과 시 연막 차장을 요청하고 목표(OBJ) 좌측방을 돌파합니다.",
    related: ["고정·돌격조", "진지재편성", "D-Day·H-Hour"]
  },
  {
    id: "pl-003",
    term: "진지 재편성 및 통합 (Consolidation & Reorganization)",
    abbr: "재편성",
    english: "Consolidation and Reorganization",
    hanja: "陣地 再編成 및 統合",
    category: "소대 공격·방어",
    importance: "필수 암기",
    definition: "목표(OBJ)를 탈환한 직후 적의 역습에 대비해 신속히 방어 대형을 갖추고(통합), 소대 내 사상자 후송·탄약 재분배·포로 처리·통신망 복구 및 상급부대 보고를 수행하는(재편성) 필수 마무리 절차입니다.",
    practicalTip: "초급간부들이 목표 탈환 후 '만세!' 하고 방심하다가 적의 역습 한 방에 전멸하는 경우가 많습니다. 목표 점령 즉시 'LACE 보고(탄약·사상자·장비 상태)'를 분대장들에게 받아 중대장에게 보고하세요.",
    example: "목표 324고지 탈환 완료! 전 소대원 한계진출선(LOA)에 방어 진지 통합 및 탄약·환자 현황 보고(재편성) 실시!",
    related: ["LD·OBJ·LOA", "CASEVAC", "고정·돌격조"]
  },
  {
    id: "pl-004",
    term: "주진지 / 예비진지 / 전환진지 (방어진지 구분)",
    abbr: "주·예비·전환진지",
    english: "Primary / Alternate / Supplementary Position",
    hanja: "主陣地 / 豫備陣地 / 轉換陣地",
    category: "소대 공격·방어",
    importance: "필수 암기",
    definition: "방어작전 시 소대가 준비하는 3가지 진지입니다. 주진지는 부여된 주임무(주접근로 차단)를 수행하는 핵심 진지, 예비진지는 주진지가 적 화력에 의해 파괴되거나 유지가 곤란할 때 이동하여 동일 임무를 계속 수행하는 진지, 전환진지는 주접근로가 아닌 측·후방 등 다른 방향에서 적이 공격해 올 때 방어하기 위한 진지입니다.",
    practicalTip: "이 세 가지 진지의 차이는 소대장 보수교육과 작계검열 단골 질문입니다! [주진지=기본 / 예비진지=주진지 파괴 시 같은 방향 방어 / 전환진지=다른 방향(측방) 방어]로 딱 구분해 암기하세요.",
    example: "적 포병의 집중 사격으로 1분대 주진지가 피탄됨에 따라 사전에 구축해 둔 예비진지로 즉각 진지 변환을 실시하였습니다.",
    related: ["개인호·유개호", "FPF", "FEBA"]
  },
  {
    id: "pl-005",
    term: "최종저지사격 (FPF)",
    abbr: "FPF",
    english: "Final Protective Fire",
    hanja: "最終沮止射擊",
    category: "소대 공격·방어",
    importance: "실무 빈출",
    definition: "방어작전 중 적이 아군의 방어진지 바로 코앞(통상 200~300m 이내)까지 접근하여 돌격을 감행할 때, 적의 돌파를 막기 위해 사전에 계획된 지점에 박격포·포병 및 공용화기가 최대 발사속도로 퍼붓는 최후의 방어 화력 장벽입니다.",
    practicalTip: "소대 방어계획 수립 시 중대 화력지원장교(또는 관측장교)와 협조하여 우리 소대 정면 취약 접근로에 FPF 선을 반드시 지정해 두어야 합니다.",
    example: "적이 철조망 장애물 지대를 돌파하려 함에 따라 소대장은 암호명 '번개'로 최종저지사격(FPF)을 요청하였습니다.",
    related: ["주·예비·전환진지", "사계청소·사격카드", "FEBA"]
  },

  // ================= 작전·훈련 (Operations & Training) =================
  {
    id: "op-001",
    term: "작전통제 (OPCON)",
    abbr: "OPCON",
    english: "Operational Control",
    hanja: "作戰統制",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "지휘관이 부여된 임무나 과업을 달성하기 위해 예하 또는 배속된 부대를 지휘·운용할 수 있는 권한. 편제상의 인사·군수 행정권은 제외되며, 특정 작전 임무 수행에 필요한 부대 이동 및 전술적 운용 권한만 포함됩니다.",
    practicalTip: "배속(Attachment)과 작전통제(OPCON)를 혼동하면 안 됩니다! 타 부대 지원 소대가 우리 중대에 '작전통제'로 들어왔다면 작전 지시는 내릴 수 있지만, 휴가·징계 등 인사권이나 기본 보급 책임은 원 소속 부대에 있습니다.",
    example: "금일 08:00부로 공병중대 1소대가 아 대대에 작전통제(OPCON) 전환되어 장애물 개척 임무를 수행할 예정입니다.",
    related: ["TACON", "건제·배속·파견", "OPORD"]
  },
  {
    id: "op-002",
    term: "전술통제 (TACON)",
    abbr: "TACON",
    english: "Tactical Control",
    hanja: "戰術統制",
    category: "작전·훈련",
    importance: "실무 빈출",
    definition: "작전통제(OPCON)보다 제한된 권한으로, 부여된 과업 완수를 위해 지정된 작전지역 내에서 부대의 기동과 화력 운용만을 세부적으로 지시·통제하는 권한입니다.",
    practicalTip: "합동작전이나 인접 부대 화력지원 전력과 협조할 때 주로 등장합니다. 임무 자체를 변경할 수는 없으며 정해진 임무 내의 전술적 움직임만 통제합니다.",
    example: "해당 전차소대는 고지 탈환 작전 간 아 보병중대에 전술통제(TACON)되어 직사화력을 지원합니다.",
    related: ["OPCON", "건제·배속·파견"]
  },
  {
    id: "op-003",
    term: "전술지휘소 (TOC)",
    abbr: "TOC",
    english: "Tactical Operations Center",
    hanja: "戰術指揮所",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "대대급 이상 부대에서 현행 작전을 계획·감독·통제하기 위해 핵심 참모(작전, 정보, 화력, 통신 등)들이 위치하여 24시간 운영하는 지휘시설입니다.",
    practicalTip: "야외기동훈련(FTX) 시 '톡(TOC) 텐트 친다', 'TOC 상황병'이라고 자주 부릅니다. 초급간부는 TOC 출입 시 비인가 전자기기 반입 금지 및 음어자재 보안에 각별히 유의해야 합니다.",
    example: "소대장님, 현 시간부로 야간 방어작전 명령 하달을 위해 대대 TOC로 집합하라는 지시입니다.",
    related: ["ATCIS", "OPORD", "CCIR"]
  },
  {
    id: "op-004",
    term: "부대지휘절차 (TLP)",
    abbr: "TLP",
    english: "Troop Leading Procedures",
    hanja: "部隊指揮節次",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "중대급 이하 제대 지휘관(중대장·소대장·분대장)이 임무를 수령한 시점부터 작전명령을 하달하고 예행연습·검열을 마치기까지 수행하는 8단계 의사결정 및 준비 절차입니다.",
    practicalTip: "소대장·부소대장 보수교육과 야전 평가의 단골 1순위! [1.임무수령 → 2.경고명령 → 3.일반계획 → 4.부대기동 → 5.정찰 → 6.계획완성 → 7.작전명령 하달 → 8.감독 및 보완] 8단계를 반드시 순서대로 외우세요.",
    example: "소대장은 중대 작전명령 수령 직후 TLP 2단계에 의거, 각 분대장에게 경고명령(WARNO)을 우선 하달하였습니다.",
    related: ["MDMP", "WARNO·OPORD·FRAGO", "METT+TC"]
  },
  {
    id: "op-005",
    term: "군사작전계획수립절차 (MDMP)",
    abbr: "MDMP",
    english: "Military Decision Making Process",
    hanja: "軍事作戰計劃樹立節次",
    category: "작전·훈련",
    importance: "실무 빈출",
    definition: "참모부가 편성된 대대급 이상 부대에서 지휘관과 참모가 임무를 분석하고 방책을 개발·비교하여 최적의 작전계획이나 명령을 수립하는 체계적인 계획 수립 절차입니다.",
    practicalTip: "중대 이하가 TLP라면, 대대 이상 참모부는 MDMP를 수행합니다. 초급간부가 대대 참모부 보직을 받으면 BCTP/전술훈련 시 MDMP 산출물을 작성하게 됩니다.",
    example: "대대장님 주재 하에 금일 14:00 작전회의실에서 MDMP 임무분석 브리핑을 실시할 예정입니다.",
    related: ["TLP", "IPB", "CCIR"]
  },
  {
    id: "op-006",
    term: "METT+TC (전술적 고려요소)",
    abbr: "METT+TC",
    english: "Mission, Enemy, Terrain & Weather, Troops, Time, Civil Considerations",
    hanja: "戰術的 考慮要素",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "지휘관이 임무를 분석하고 전술적 결심을 내릴 때 반드시 검토해야 하는 6가지 핵심 요소(임무, 적, 지형 및 기상, 가용부대 및 지원, 가용시간, 민간요소)입니다.",
    practicalTip: "어떤 전술 상황 보고나 훈련 브리핑에서도 'METT+TC를 고려할 때~'라고 운을 떼면 군사적 논리성이 크게 올라갑니다.",
    example: "현 작전지역의 METT+TC를 분석한 결과, 야간 안개로 인한 시계 제한을 극복하기 위해 열상감시장비(TOD) 운용이 필수적입니다.",
    related: ["OCOKA", "TLP", "IPB"]
  },
  {
    id: "op-007",
    term: "OCOKA (군사적 지형분석 5요소)",
    abbr: "OCOKA",
    english: "Observation, Cover & Concealment, Obstacles, Key Terrain, Avenues of Approach",
    hanja: "軍事的 地形分析 5要素",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "군사적 관점에서 지형을 분석할 때 사용하는 5가지 핵심 요소(관측 및 사계, 은폐 및 엄폐, 장애물, 핵심지형, 접근로)입니다.",
    practicalTip: "진지 편성이나 방어작전 브리핑 시 지형 분석 파트는 무조건 OCOKA 순서대로 정리하면 완벽합니다.",
    example: "324고지는 적 기갑부대의 예상 접근로를 감제할 수 있는 핵심지형(Key Terrain)입니다.",
    related: ["METT+TC", "IPB", "사계청소·사격카드"]
  },
  {
    id: "op-008",
    term: "경고명령 (WARNO) / 작전명령 (OPORD) / 단편명령 (FRAGO)",
    abbr: "WARNO·OPORD·FRAGO",
    english: "Warning Order / Operation Order / Fragmentary Order",
    hanja: "警告命令 / 作戰命令 / 斷片命令",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "WARNO는 본 명령 하달 전 사전 준비를 위한 예비 명령, OPORD는 5개 항(상황·임무·실시·전투근무지원·지휘 및 통신) 표준 작전명령, FRAGO는 기존 OPORD 중 변경된 사항만 신속히 수정 하달하는 단편명령입니다.",
    practicalTip: "작전명령 5개 항 순서 [1.상황 2.임무 3.실시 4.전투근무지원 5.지휘 및 통신]은 자다가도 튀어나와야 합니다.",
    example: "기상 악화로 인해 기동로가 변경됨에 따라 대대 작전과에서 단편명령(FRAGO) 제2호를 하달하였습니다.",
    related: ["TLP", "TOC", "SOP"]
  },
  {
    id: "op-009",
    term: "전방지역 한계선 (FEBA)",
    abbr: "FEBA",
    english: "Forward Edge of the Battle Area",
    hanja: "戰鬪地域前緣",
    category: "작전·훈련",
    importance: "실무 빈출",
    definition: "방어작전 시 지상 전투부대가 배치되는 가장 전방의 한계선으로, 주요 방어 진지들의 전단을 연결한 통제선입니다.",
    practicalTip: "GOP가 평시 경계 작전의 최전방이라면, FEBA는 전시 방어작전 시 주방어지역(MBA)의 최전방선을 의미합니다.",
    example: "아 연대는 FEBA 알파(Alpha) 선상에서 적 선두 제대의 돌파를 저지할 임무를 부여받았습니다.",
    related: ["GOP·GP·MDL", "주·예비·전환진지"]
  },
  {
    id: "op-010",
    term: "일반전초 (GOP) / 소초 (GP) / 군사분계선 (MDL)",
    abbr: "GOP·GP·MDL",
    english: "General Outpost / Guard Post / Military Demarcation Line",
    hanja: "一般前哨 / 監視哨所 / 軍事分界線",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "MDL은 휴전선 중심의 군사분계선이며, DMZ 내부의 감시초소가 GP, 남방한계선 철책을 따라 24시간 경계작전을 수행하는 전초선이 GOP입니다.",
    practicalTip: "전방 사단 초급간부라면 소초장(GP장/GOP 소초장) 임무를 수행하게 됩니다. 경계작전 규정, 수하 요령, 귀순자 유도 절차 및 우발상황 행동절차를 완벽히 숙지해야 합니다.",
    example: "금일 야간 GOP 철책 정밀점검 및 과학화경계시스템 광망 작동 상태 이상 없습니다.",
    related: ["FEBA", "TOD", "QRF", "ROE"]
  },
  {
    id: "op-011",
    term: "교전규칙 (ROE)",
    abbr: "ROE",
    english: "Rules of Engagement",
    hanja: "交戰規則",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "군사작전이나 경계근무 중 적 또는 미상 인원·표적과 조우했을 때 무력 사용의 시기, 수준, 절차 및 제한사항을 규정한 지침입니다.",
    practicalTip: "투입 전 근무자 교육 시 가장 핵심적으로 확인해야 하는 항목입니다. '선조치 후보고' 원칙과 자위권 행사 요건을 명확히 구분하여 병사들에게 교육해야 합니다.",
    example: "경계근무 투입 전 전 장병을 대상으로 비무장지대 내 적 도발 유형별 교전규칙(ROE) 숙지 상태를 점검하였습니다.",
    related: ["GOP·GP·MDL", "수하", "QRF"]
  },
  {
    id: "op-012",
    term: "신속대응부대 / 초동조치부대 (QRF)",
    abbr: "QRF",
    english: "Quick Reaction Force",
    hanja: "迅速對應部隊 / 初動措置部隊",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "적의 국지도발, 침투, 거수자 출현, 테러 등 긴급한 우발상황 발생 시 즉각 출동하여 현장을 통제하고 초기 교전 및 차단을 수행하도록 지정된 대기 부대입니다.",
    practicalTip: "당직근무 시 오늘의 초동조치부대(5분 대기조 / QRF) 간부가 누구인지, 군장 및 탄약·차량 출동 준비태세가 갖추어져 있는지 반드시 확인해야 합니다.",
    example: "위병소 미상 차량 강습 상황을 가정하여 대대 초동조치부대(QRF) 긴급 출동 훈련을 실시하였습니다.",
    related: ["ROE", "당직근무", "단독·완전군장"]
  },
  {
    id: "op-013",
    term: "과학화전투훈련단 (KCTC) / 전투지휘훈련 (BCTP)",
    abbr: "KCTC / BCTP",
    english: "Korea Combat Training Center / Battle Command Training Program",
    hanja: "科學化戰鬪訓練團 / 戰鬪指揮訓練",
    category: "작전·훈련",
    importance: "실무 빈출",
    definition: "KCTC는 마일즈(MILES) 장비를 착용하고 전문 대항군과 실전 교전을 벌이는 과학화전투훈련이며, BCTP는 워게임 시뮬레이션을 활용한 컴퓨터 모의 지휘소 연습입니다.",
    practicalTip: "소대장·중대장은 KCTC에서 소부대 전술의 극한을 경험하고, 참모부 간부는 BCTP에서 워게임 및 브리핑의 정수를 경험하게 됩니다.",
    example: "차기 월 KCTC 훈련 입소를 대비하여 중대 전 장병 마일즈 장비 영점사격 및 주야간 기동훈련을 완료하였습니다.",
    related: ["FTX / CPX", "TLP"]
  },
  {
    id: "op-014",
    term: "야외기동훈련 (FTX) / 지휘소연습 (CPX)",
    abbr: "FTX / CPX",
    english: "Field Training Exercise / Command Post Exercise",
    hanja: "野外機動訓練 / 指揮所演習",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "FTX는 실제 병력과 장비가 야외 전술현장으로 기동하여 실시하는 훈련이며, CPX는 병력 기동 없이 지휘관·참모부·통신망 위주로 지휘소를 개소하여 작전절차를 숙달하는 훈련입니다.",
    practicalTip: "CPX라고 해서 편한 것이 아니라, 참모부 초급간부에게는 오히려 끊임없는 전문 처리와 상황판 최신화가 요구됩니다.",
    example: "이번 호국훈련은 전반기 CPX 결과를 바탕으로 실제 기동부대가 참가하는 양쌍방 FTX로 진행됩니다.",
    related: ["KCTC / BCTP", "TOC"]
  },
  {
    id: "op-015",
    term: "작전예규 (SOP)",
    abbr: "SOP",
    english: "Standing Operating Procedure",
    hanja: "作戰例規",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "별도의 명령이 없더라도 부대원들이 반복적인 과업이나 전술 상황을 표준화된 절차에 따라 자동적으로 수행할 수 있도록 사전에 규정해 놓은 부대 내 지침서입니다.",
    practicalTip: "자대 전입 후 첫 1주일 안에 우리 대대/중대의 '작전예규(SOP)'와 '일상근무예규'를 정독하면 선임 간부들에게 에이스로 인정받습니다.",
    example: "통신 두절 상황 발생 시 부대 작전예규(SOP) 제4장에 의거하여 예비 유선망 및 전령을 즉각 운용하십시오.",
    related: ["WARNO·OPORD·FRAGO", "ROE"]
  },
  {
    id: "op-016",
    term: "D-Day / H-Hour / C-Day / M-Day",
    abbr: "작전시간 부호",
    english: "Operation Time Designators",
    hanja: "作戰開始日 / 作戰開始時",
    category: "작전·훈련",
    importance: "필수 암기",
    definition: "특정 작전의 기준 시점을 나타내는 부호입니다. [D-Day: 작전 개시일, H-Hour: D-Day 당일 작전 개시 시각, C-Day: 부대 전개 개시일, M-Day: 동원령 선포 및 동원 개시일]",
    practicalTip: "H-2는 작전 개시 2시간 전, H+3은 작전 개시 3시간 후를 의미합니다. 탭 3의 H-Hour 계산기를 활용해 바로 확인해 보세요!",
    example: "본 공격작전의 H-Hour는 05:30이며, 아 중대는 H-1(04:30)까지 공격개시선(LD) 점령을 완료해야 합니다.",
    related: ["LD·OBJ·LOA", "WARNO·OPORD·FRAGO"]
  },

  // ================= 정보·보안 (Intelligence & Security) =================
  {
    id: "in-001",
    term: "전장정보분석 (IPB)",
    abbr: "IPB",
    english: "Intelligence Preparation of the Battlefield",
    hanja: "戰場情報分析",
    category: "정보·보안",
    importance: "필수 암기",
    definition: "적과 지형, 기상 등 작전환경이 아군 및 적군의 작전에 미치는 영향을 체계적·지속적으로 분석하여 적의 가능한 방책을 예측하는 정보 순환 과정입니다.",
    practicalTip: "IPB 4단계 [1.전장환경 정의 → 2.전장환경 영향 분석 → 3.적 위협 평가 → 4.적 방책 판단]는 MDMP 임무분석 단계의 꽃입니다.",
    example: "정보과장 주관으로 작성된 IPB 산출물을 바탕으로 적의 최가능방책(MLCOA)과 최위협방책(MDCOA)을 도출하였습니다.",
    related: ["MDMP", "OCOKA", "CCIR"]
  },
  {
    id: "in-002",
    term: "지휘관 중요정보요구 (CCIR)",
    abbr: "CCIR",
    english: "Commander's Critical Information Requirements",
    hanja: "指揮官 重要情報要求",
    category: "정보·보안",
    importance: "필수 암기",
    definition: "지휘관이 작전 결심을 내리거나 변경하기 위해 반드시 적시에 보고받아야 하는 핵심 정보 요구사항으로, 적에 관한 PIR과 아군에 관한 FFIR로 구성됩니다.",
    practicalTip: "당직사관이나 상황간부 근무 중 CCIR에 해당하는 상황이 발생하면, 심야 시간이라도 지체 없이 지휘관에게 직보(즉각 보고)해야 합니다!",
    example: "적 자주포 대대의 방열 징후 포착은 대대장님의 CCIR 제1항에 해당하므로 즉시 보고드렸습니다.",
    related: ["PIR / FFIR / EEFI", "TOC"]
  },
  {
    id: "in-003",
    term: "우선정보요구 (PIR) / 아군정보요구 (FFIR) / EEFI",
    abbr: "PIR / FFIR / EEFI",
    english: "Priority Intelligence / Friendly Force Info / Essential Elements of Friendly Info",
    hanja: "優先情報要求 / 我軍情報要求",
    category: "정보·보안",
    importance: "실무 빈출",
    definition: "PIR은 적과 환경에 대해 최우선으로 알아야 할 정보, FFIR은 아군 부대의 전투력 상태 정보, EEFI는 적의 정보수집으로부터 반드시 보호해야 할 아군의 핵심 보안 사항입니다.",
    practicalTip: "쉽게 외우는 법: CCIR = PIR(적) + FFIR(아군). 그리고 적에게 절대 들키면 안 되는 아군 핵심 비밀은 EEFI!",
    example: "아군 주공 부대의 도하 장비 집결지 위치는 EEFI로 지정하여 위장망 설치 및 전자기파 방출 통제를 실시합니다.",
    related: ["CCIR", "IPB"]
  },
  {
    id: "in-004",
    term: "열상감시장비 (TOD)",
    abbr: "TOD",
    english: "Thermal Observation Device",
    hanja: "熱像監視裝備",
    category: "정보·보안",
    importance: "실무 빈출",
    definition: "야간이나 안개·연막 등 시계가 제한되는 환경에서 물체가 방출하는 적외선 열에너지를 감지하여 영상으로 보여주는 핵심 감시장비입니다.",
    practicalTip: "해안 경계부대나 GOP 부대에서 TOD 반장/운용병들과의 협조는 야간 경계작전의 핵심입니다.",
    example: "02:15경 해안 3소초 전방 1.5km 해상에서 TOD에 의해 미상 소형 선박 1척이 최초 포착되었습니다.",
    related: ["GOP·GP·MDL", "PEQ / NVG"]
  },
  {
    id: "in-005",
    term: "암구호 / 비화기 / 음어자재 (CEOI)",
    abbr: "CEOI",
    english: "Communications-Electronics Operating Instructions",
    hanja: "暗口號 / 秘話機 / 音語資材",
    category: "정보·보안",
    importance: "필수 암기",
    definition: "암구호는 야간에 아군·적군 식별을 위한 문답식 암호(문어·답어)이며, 음어자재 및 CEOI는 무선 통신 시 도청에 대비해 평문을 암호화하거나 호출부호·주파수를 규정한 군사기밀 자재입니다.",
    practicalTip: "음어자재나 CEOI 분실은 중대 보안사고입니다! 수령·반납 서명과 철제 이중 잠금장치 보관을 철저히 확인하세요.",
    example: "금일 정오(12:00)부로 신 암구호가 적용되오니 경계근무 투입 인원 전원에게 문어·답어를 암기시킨 후 서명부를 회수하십시오.",
    related: ["군사기밀", "TMMR / 999K"]
  },
  {
    id: "in-006",
    term: "군사기밀 등급 (Ⅰ·Ⅱ·Ⅲ급 비밀 및 대외비)",
    abbr: "군사기밀",
    english: "Military Secret Classification",
    hanja: "軍事機密 等級",
    category: "정보·보안",
    importance: "필수 암기",
    definition: "누설될 경우 국가안전보장에 미치는 위험 정도에 따라 Ⅰ급 비밀(치명적), Ⅱ급 비밀(현저한 위험), Ⅲ급 비밀(상당한 위험), 그리고 공개가 제한되는 대외비로 구분합니다.",
    practicalTip: "비밀문서 열람 시 비밀관리기록부 등재와 예고문 확인이 필수이며, 개인 스마트폰이나 상용 USB 연결은 절대 금물입니다.",
    example: "작전계획 사본(Ⅱ급 비밀) 열람 후 비밀보관함 이중 잠금 상태 및 비밀대출부 서명을 재확인하였습니다.",
    related: ["CEOI", "온나라"]
  },

  // ================= 인사·행정 (Personnel & Administration) =================
  {
    id: "hr-001",
    term: "국방인사정보체계 (국방인사망)",
    abbr: "인사체계",
    english: "Defense Personnel Information System",
    hanja: "國防人事情報體系",
    category: "인사·행정",
    importance: "필수 암기",
    definition: "장병의 전입·전출, 보직 변경, 진급, 휴가·외박 승인, 당직 명령, 상벌, 근무평정 등 모든 인사행정을 처리하는 국방망 핵심 정보체계입니다.",
    practicalTip: "병사들의 휴가 명령 및 출타자 현황이 실제 인원과 100% 일치하는지 일일 결산 시 반드시 대조하세요.",
    example: "금일부 정기휴가 복귀자 4명에 대해 국방인사정보체계상 복귀 등록 및 병력 일일결산 반영을 완료하였습니다.",
    related: ["온나라", "일일결산"]
  },
  {
    id: "hr-002",
    term: "국방 전자문서체계 (온나라 시스템)",
    abbr: "온나라",
    english: "On-Nara Electronic Document System",
    hanja: "國防 電子文書體系",
    category: "인사·행정",
    importance: "필수 암기",
    definition: "군 내부의 모든 공문서 기안, 검토, 협조, 결재, 발송 및 접수를 전자적으로 처리하는 국방망 표준 문서행정 시스템입니다.",
    practicalTip: "공문 기안 시 '제목 - 관련근거 - 목적 - 세부내용 - 행정사항 - 끝.'의 군 표준 기안 양식을 지키고, 붙임 파일 누락 여부를 꼭 확인하세요!",
    example: "상급부대 지시 공문(작전과-1420호)을 온나라에서 접수하여 중대장님 선람 후 세부 시행계획을 기안하였습니다.",
    related: ["인사체계", "군사기밀"]
  },
  {
    id: "hr-003",
    term: "일일 병력결산 (총원 / 사고 / 현재원)",
    abbr: "일일결산",
    english: "Daily Personnel Strength Accountability",
    hanja: "一日 兵力決算",
    category: "인사·행정",
    importance: "필수 암기",
    definition: "부대 편제상 총원에서 출타·입원·파견 등 부대 외부에 있는 인원인 '사고'를 제외하고, 현재 영내에서 실제 임무 수행이 가능한 '현재원'을 정확히 파악하는 절차입니다.",
    practicalTip: "군대에서 '사고자'는 사건·사고자가 아니라 휴가·외박·파견·입실 등 열외 인원 전체를 뜻합니다! '총원 32명, 사고 5명, 현재원 27명'처럼 정확히 보고하세요.",
    example: "저녁점호 보고 드리겠습니다. 제1소대 총원 28명, 사고 3명, 현재원 25명. 사고 내역은 정기휴가 2명, 의무대 입실 1명입니다.",
    related: ["당직근무", "인사체계"]
  },
  {
    id: "hr-004",
    term: "당직사관 / 당직부관 / 상황장교",
    abbr: "당직근무",
    english: "Duty Officer / Assistant Duty Officer",
    hanja: "當直士官 / 當直副官",
    category: "인사·행정",
    importance: "필수 암기",
    definition: "일과 이후부터 익일 일과 개시 전까지 지휘관을 대리하여 부대의 경계, 보안, 화재 예방, 병력 통제 및 긴급 우발상황 초동조치를 책임지는 당직근무 간부입니다.",
    practicalTip: "당직 투입 전 [1.복귀 예정자 명단 2.근무자 편성표 3.초동조치부대 4.관심장병/환자 5.총기·탄약고 열쇠] 5가지를 반드시 체크하세요.",
    example: "당직사관 육군 소위 김지호! 금일 야간 순찰 및 총기함·탄약고 이상 유무 확인 결과 특이사항 없습니다.",
    related: ["일일결산", "QRF", "위병소·수하"]
  },
  {
    id: "hr-005",
    term: "건제 (Organic) / 배속 (Attached) / 파견 (Detached)",
    abbr: "건제·배속·파견",
    english: "Organic / Attached / Detached Duty",
    hanja: "建制 / 配屬 / 派遣",
    category: "인사·행정",
    importance: "실무 빈출",
    definition: "건제는 원래 부대 편제표에 속한 고유 편성, 배속은 한시적으로 타 부대에 편입되어 지휘·군수·행정을 지원받는 것, 파견은 원 소속을 유지한 채 특정 임무를 위해 타 부대에 가서 근무하는 형태입니다.",
    practicalTip: "'건제 소대 단위로 이동하라'는 말은 인원을 섞지 말고 원래 편성된 소대 그대로 움직이라는 뜻입니다.",
    example: "유격훈련 입소 간 행군은 건제 소대 단위로 편성하여 이동하며, 의무지원반 2명이 아 중대에 배속됩니다.",
    related: ["OPCON", "일일결산"]
  },

  // ================= 군수·장비 (Logistics & Maintenance) =================
  {
    id: "lg-001",
    term: "국방군수통합정보체계 (DELIIS)",
    abbr: "DELIIS",
    english: "Defense Logistics Integrated Information System",
    hanja: "國防軍需統合情報體系",
    category: "군수·장비",
    importance: "필수 암기",
    definition: "전군의 모든 군수품(1종~10종) 청구, 보급, 재고관리, 장비 정비, 탄약 및 수리부속 관리를 통합 처리하는 국방망 전산 체계입니다. (실무에서 '델리스'라고 호칭)",
    practicalTip: "소대장·중대장은 자신이 서명한 소대 피복·장구류 재고와 DELIIS 상의 전산 재고가 일치하는지 정기 재물조사 때마다 확인해야 합니다.",
    example: "주간 예방정비 간 발견된 K-511 차량 노후 수리부속 3종에 대해 DELIIS를 통해 긴급 청구를 완료하였습니다.",
    related: ["1종~10종", "PMCS", "손망실"]
  },
  {
    id: "lg-002",
    term: "군수품 1종 ~ 10종 분류 (Class I ~ X)",
    abbr: "1종~10종",
    english: "Classes of Supply (Class I to X)",
    hanja: "軍需品 種別 分類",
    category: "군수·장비",
    importance: "필수 암기",
    definition: "군에서 사용하는 모든 물자를 용도에 따라 10가지로 분류한 체계입니다. [1식(식량) 2피(피복) 3유(유류) 4축(축성) 5탄(탄약) 6일(일용품) 7장(주요장비) 8의(의무) 9수(수리부속) 10기타]",
    practicalTip: "앞글자 암기 공식 '1식 2피 3유 4축 5탄 6일 7장 8의 9수 10기타'로 외우면 평생 안 까먹습니다!",
    example: "작전 지속지원 계획에 의거, 금일 18:00 기준 1종(전투식량) 및 5종(소총탄) 보급 추진이 실시됩니다.",
    related: ["DELIIS", "BL / RSR / CSR"]
  },
  {
    id: "lg-003",
    term: "예방정비 (PMCS)",
    abbr: "PMCS",
    english: "Preventive Maintenance Checks and Services",
    hanja: "豫防整備",
    category: "군수·장비",
    importance: "필수 암기",
    definition: "전투장비(화기, 차량, 통신장비 등)의 고장을 사전에 예방하고 즉각 가동할 수 있는 전투준비태세를 유지하기 위해 운용자가 실시하는 일일/주간 점검 및 정비 활동입니다.",
    practicalTip: "장비 검열 시 간부가 자기 소대 화기·장비의 특이사항(결함 및 수리부속 청구 현황)을 직접 파악하고 있어야 합니다.",
    example: "금요일 오후 주간 예방정비(PMCS) 시간을 활용하여 소대 공용화기(K4, K6) 분해 결합 및 강선 수입을 실시하였습니다.",
    related: ["DELIIS", "1종~10종"]
  },
  {
    id: "lg-004",
    term: "손망실 처리 / 재물조사",
    abbr: "손망실",
    english: "Report of Survey / Property Loss Processing",
    hanja: "損亡失 處理",
    category: "군수·장비",
    importance: "실무 빈출",
    definition: "군수품이나 장비가 훈련·작전 또는 관리 중 파손되거나 분실되었을 때, 그 원인과 귀책사유를 규명하여 전산 해제를 처리하는 행정 절차입니다.",
    practicalTip: "훈련 중 불가피하게 파손·분실된 물자를 숨기려다 나중에 적발되면 훨씬 큰 문제가 됩니다. 발생 즉시 보고하고 정상적인 손망실 절차를 밟으세요.",
    example: "야간 기동훈련 중 파손된 방독면 정화통 케이스 1점에 대해 훈련 중 불가항력 사유로 손망실 보고서를 상신하였습니다.",
    related: ["DELIIS", "PMCS"]
  },
  {
    id: "lg-005",
    term: "기본휴대량 (BL) / 소요보급률 (RSR) / 가용보급률 (CSR)",
    abbr: "BL / RSR / CSR",
    english: "Basic Load / Required Supply Rate / Controlled Supply Rate",
    hanja: "基本携帶量 / 所要補給率 / 可用補給率",
    category: "군수·장비",
    importance: "실무 빈출",
    definition: "BL은 전투 개시 전 부대가 의무적으로 휴대해야 하는 탄약·물자 기준량, RSR은 작전 수행을 위해 필요한 일일 탄약 소요량, CSR은 상급부대가 실제 할당한 탄약 보급량입니다.",
    practicalTip: "전술훈련이나 BCTP에서 탄약 계산 문제가 나오면 무조건 BL(기본휴대량), RSR(희망 소요량), CSR(실제 할당량) 3총사가 등장합니다!",
    example: "전투준비태세 발령 시 각 소대원은 개인화기 탄약 기본휴대량(BL)을 수령하여 단독군장에 결합합니다.",
    related: ["1종~10종", "DEFCON / 진돗개"]
  },

  // ================= 통신·체계 (Communications & C4I Systems) =================
  {
    id: "cm-001",
    term: "지상전술C4I체계 (ATCIS)",
    abbr: "ATCIS",
    english: "Army Tactical Command Information System",
    hanja: "地上戰術C4I體系",
    category: "통신·체계",
    importance: "필수 암기",
    definition: "육군의 지휘·통제·통신·컴퓨터 및 정보를 하나로 묶어 전장 상황도(COP)를 실시간으로 공유하고 작전명령·첩보를 디지털로 처리하는 전술지휘자동화체계입니다.",
    practicalTip: "TOC에 앉으면 가장 먼저 켜는 체계입니다. 아군 부대 도시기호(파란색)와 적군 도시기호(빨간색)를 투명도에 그리는 연습을 해두면 큰 도움이 됩니다.",
    example: "정찰소대가 보고한 적 전차부대 출현 좌표를 ATCIS 상황도(COP)에 즉시 도시하고 여단과 공유하였습니다.",
    related: ["KJCCS", "COP", "TOC"]
  },
  {
    id: "cm-002",
    term: "합동지휘통제체계 (KJCCS)",
    abbr: "KJCCS",
    english: "Korea Joint Command and Control System",
    hanja: "合同指揮統制體系",
    category: "통신·체계",
    importance: "실무 빈출",
    definition: "합참과 육·해·공군 작전사령부 등 상급 제대 간 합동작전 지휘통제를 위해 운용하는 전략·작전급 지휘통제체계입니다.",
    practicalTip: "대대/여단급 전술 체계가 ATCIS라면, 상급부대 및 합동부대 간 상황보고와 전문 수발신에는 KJCCS가 연동됩니다.",
    example: "합참 긴급 지시 전문이 KJCCS를 통해 접수되어 당직사관이 즉시 지휘관에게 유선 보고하였습니다.",
    related: ["ATCIS", "COP"]
  },
  {
    id: "cm-003",
    term: "전술무전기 (TMMR / PRC-999K / PRC-96K)",
    abbr: "TMMR / 999K",
    english: "Tactical Multiband Multirole Radio / FM Tactical Radio",
    hanja: "戰術無線機",
    category: "통신·체계",
    importance: "필수 암기",
    definition: "소부대 지휘통제의 생명줄인 전술 무전기입니다. PRC-96K는 소대/분대 단거리용, PRC-999K는 중대/대대 주력 FM 도약 무전기, TMMR은 차세대 음성·데이터 동시 전송 디지털 무전기입니다.",
    practicalTip: "훈련 전 무전기 배터리 충전 상태, 도약 데이터 주입 여부, 송수신 감도 테스트(감명도 '다섯에 다섯')를 소대장이 직접 확인해 보세요!",
    example: "출동 전 소대 지휘망 PRC-999K 도약 동기화 및 감명도 확인 결과 '감도 다섯, 명료도 다섯(5x5)'으로 양호합니다.",
    related: ["CEOI", "ATCIS"]
  },
  {
    id: "cm-004",
    term: "공통작전상황도 (COP)",
    abbr: "COP",
    english: "Common Operational Picture",
    hanja: "共通作戰狀況圖",
    category: "통신·체계",
    importance: "실무 빈출",
    definition: "상·하급 및 인접 부대가 동일한 전장 상황을 인식할 수 있도록 아군·적군 위치, 지형, 장애물, 화력 협조선 등을 하나의 디지털 지도 위에 통합 표시한 화면입니다.",
    practicalTip: "COP 최신화가 늦어지면 지휘관의 상황 판단이 왜곡되므로 실시간 입력이 생명입니다.",
    example: "대대 작전장교 지시에 의거, 각 중대 현재 진출선을 ATCIS 내 공통작전상황도(COP)에 최신화하였습니다.",
    related: ["ATCIS", "TOC"]
  },

  // ================= 지휘·일반 (Command, General & Medical) =================
  {
    id: "gn-001",
    term: "전투준비태세 (DEFCON / WATCHCON / 진돗개)",
    abbr: "DEFCON / 진돗개",
    english: "Defense Readiness Condition / Jindo Dog Alert",
    hanja: "防禦準備態勢",
    category: "지휘·일반",
    importance: "필수 암기",
    definition: "DEFCON(4→1)은 전면전 대비 방어준비태세, WATCHCON(4→1)은 북한 동향 정보감시태세, '진돗개(셋→둘→하나)'는 무장공비 침투나 국지도발 발생 시 발령되는 국지도발 대비태세입니다.",
    practicalTip: "평시는 진돗개 '셋', 위협 징후 시 '둘', 실제 상황 발생 시 최고 등급인 '하나'가 발령됩니다! 숫자가 작아질수록 최고 비상 단계입니다.",
    example: "인접 지역 거수자 발견에 따라 현 시간부로 진돗개 '둘'이 발령되었으며, 전 간부 영내 대기 및 탄약고 경계가 강화되었습니다.",
    related: ["QRF", "ROE", "BL / RSR / CSR"]
  },
  {
    id: "gn-002",
    term: "환자후송 (CASEVAC / MEDEVAC)",
    abbr: "CASEVAC / MEDEVAC",
    english: "Casualty Evacuation / Medical Evacuation",
    hanja: "患者後送 / 義務後送",
    category: "지휘·일반",
    importance: "필수 암기",
    definition: "CASEVAC은 일반 전술차량을 이용해 사상자를 긴급 이탈·이송하는 것이며, MEDEVAC은 응급처치 인력과 장비가 갖춰진 구급차(AMB)나 의무후송헬기를 통해 전문 치료시설로 후송하는 것입니다.",
    practicalTip: "응급환자 발생 시 [1.현장 응급처치 2.의무대·지휘관 즉각 보고 3.구급차(AMB) 또는 국군의무사령부 응급환자지원센터(1688-5119) 후송] 절차를 즉시 실행하세요.",
    example: "행군 중 열사병 의심 환자 1명 발생에 따라 체온 하강 응급조치 후 대대 의무대 구급차(MEDEVAC)로 후송 조치 중입니다.",
    related: ["진지재편성", "당직근무"]
  },
  {
    id: "gn-003",
    term: "사후강평 (AAR)",
    abbr: "AAR",
    english: "After Action Review",
    hanja: "事後講評",
    category: "지휘·일반",
    importance: "필수 암기",
    definition: "훈련이나 과업 종료 직후 참가자들이 모여 '계획 vs 실제 결과 vs 잘된 점/미흡한 점 vs 향후 보완사항'을 토의하며 전투력을 발전시키는 절차입니다.",
    practicalTip: "AAR은 문책이 아니라 노하우를 축적하는 자리입니다. 훈련 직후 현장에서 10분간 소대원들과 짧은 AAR을 하면 소대 전투력이 급상승합니다.",
    example: "주간 사격훈련 종료 후 사격장 현지에서 탄착군 형성 미흡 인원 원인 분석을 위한 소대 사후강평(AAR)을 실시하였습니다.",
    related: ["FTX / CPX", "전투력복원"]
  },
  {
    id: "gn-004",
    term: "전투력 복원",
    abbr: "전투력복원",
    english: "Restoration of Combat Power",
    hanja: "戰鬪力 復元",
    category: "지휘·일반",
    importance: "실무 빈출",
    definition: "훈련·작전 종료 후 소모된 탄약·물자를 재보급하고, 화기·장비 수입 및 정비를 실시하며, 장병들의 피로 회복과 건강 상태를 점검하는 과정입니다.",
    practicalTip: "훈련 끝난 직후 [총기·탄약 확인 → 부상자 확인 → 장비 수입 → 온수 샤워 및 휴식 보장]까지 챙기는 간부가 진짜 유능한 간부입니다.",
    example: "야외 숙영훈련 복귀 후 금일 오후 일과는 화기 수입, 침낭 일광건조 및 장병 휴식을 위한 전투력 복원 시간으로 운영합니다.",
    related: ["AAR", "PMCS"]
  },
  {
    id: "gn-005",
    term: "위병소 / 초병 / 수하 (誰何)",
    abbr: "위병소·수하",
    english: "Main Gate Guard Post / Challenge & Password",
    hanja: "衛兵所 / 誰何",
    category: "지휘·일반",
    importance: "필수 암기",
    definition: "위병소는 부대 출입을 통제하는 최일선 초소이며, 수하(誰何)는 초병이 야간 근무 중 접근하는 인원의 정체를 확인하기 위해 정지 명령 후 암구호를 문답하는 절차입니다.",
    practicalTip: "수하 기본 절차: '손들어! 움직이면 쏜다! → 암구호! (문어·답어 확인) → 신원 확인'. 정석대로 수하하는 초병은 크게 칭찬해 주세요!",
    example: "야간 위병소 근무자 대상 거수자 접근 시 수하 절차 및 경고방송 행동요령을 구술 점검하였습니다.",
    related: ["CEOI", "ROE", "당직근무"]
  },
  {
    id: "gn-006",
    term: "단독군장 / 완전군장",
    abbr: "단독·완전군장",
    english: "Fighting Load / Full Marching Order",
    hanja: "單獨軍裝 / 完全軍裝",
    category: "지휘·일반",
    importance: "필수 암기",
    definition: "단독군장은 방탄헬멧, 전투조끼, 방독면, 개인화기 등 즉각 교전용 기본 장구류 착용 상태이며, 완전군장은 단독군장에 배낭(침낭, 여벌 피복, 전투식량 등 약 20~30kg)까지 결합한 상태입니다.",
    practicalTip: "군장 결속 시 무거운 물건을 위쪽·등에 밀착시켜 무게중심을 높게 잡도록 지도하면 행군 시 허리·어깨 부상을 크게 줄일 수 있습니다.",
    example: "내일 새벽 06:00 대대 연병장 집결 시 복장은 단독군장에 방독면 휴대이니 각 분대장은 결속 상태를 사전 점검 바랍니다.",
    related: ["QRF", "1종~10종"]
  }
];

// 상황별 실전 보고 변환 가이드 (사회 말투 vs 군 표준 보고체)
const SPEECH_CONVERSIONS = [
  {
    situation: "지시사항을 아직 다 못 했고 확인 중일 때",
    bad: "아직 다 못 해봤는데 일단 확인해보고 나중에 다시 말씀드리겠습니다.",
    good: "지시하신 사안은 현재 1소대 분대장들을 통해 사실관계 파악 중이며, 금일 15:00까지 중간보고 드리겠습니다.",
    point: "막연한 '나중에' 대신 [현재 진행 단계 + 정확한 보고 예정 시각(시한)]을 명시해야 지휘관이 안심합니다."
  },
  {
    situation: "훈련이나 작업 중 경미한 부상자/환자가 발생했을 때",
    bad: "김 일병이 작업하다가 발목을 좀 삐끗한 것 같아서 의무대 보냈습니다.",
    good: "14:20경 진지 보수작업 중 김일병이 우측 발목 염좌 증상을 호소하여, 작업 열외 및 냉찜질 응급조치 후 부소대장 인솔하에 대대 의무대로 이동 조치하였습니다. 군의관 진료 결과 나오는 대로 추가 보고드리겠습니다.",
    point: "환자 보고는 [발생 일시 + 장소/원인 + 부상 부위 및 상태 + 현장 조치 및 인솔 간부 + 향후 조치] 5요소가 한 번에 들어가야 합니다."
  },
  {
    situation: "잘 모르는 질문을 지휘관에게 받았을 때",
    bad: "아마 맞을 겁니다. / 잘 모르겠습니다.",
    good: "해당 수치는 제가 임의로 추측하여 보고드리기보다, 작전과 전산 자료를 즉시 재확인하여 10분 내로 정확히 보고드리겠습니다.",
    point: "군에서 가장 위험한 보고는 '추측성 허위/부정확 보고'입니다. 모르는 것은 솔직하고 당당하게 즉시 확인 후 보고하겠다고 말씀드리세요."
  },
  {
    situation: "장비나 물자에 결함·파손이 발견되었을 때",
    bad: "무전기 한 대가 안 켜져서 창고에 빼놨습니다.",
    good: "금일 09:00 주간 예방정비 간 제2분대용 PRC-96K 무전기 1대에서 전원 불량 결함이 식별되었습니다. 예비 무전기로 즉시 대체 편성하여 작전 공백은 없으며, 결함 장비는 통신반에 정비 의뢰 완료하였습니다.",
    point: "문제점만 보고하지 말고 [결함 내용 + 작전/임무 지장 여부(대체 대책) + 정비/후속 조치]를 세트로 묶어 보고하는 것이 핵심입니다."
  },
  {
    situation: "상급부대나 타 부서에서 급한 협조 요청이 왔을 때",
    bad: "대대 작전과에서 내일까지 사격장 인원 명단 내라고 했습니다.",
    good: "대대 작전과 교육담당 상사로부터 내일(19일) 11:00까지 차기 주간 사격훈련 참가자 명단 제출 지시를 수령하였습니다. 금일 저녁 점호 전까지 열외자 파악하여 초안 작성 후 중대장님께 결재 올리겠습니다.",
    point: "[발신처/담당자 + 제출 기한 + 본인의 처리 계획]을 함께 보고하면 상급자가 두 번 물어볼 필요가 없습니다."
  }
];

// 인터랙티브 실전 보고문 생성기 템플릿
const REPORT_TEMPLATES = {
  incident: {
    title: "🚨 긴급 상황 / 우발상황 초동 보고",
    desc: "부대 내외 특이사항, 사건·사고, 미상 인원 식별 등 긴급 상황 발생 시 육하원칙(5W1H)에 따른 초동 보고 양식입니다.",
    fields: [
      { id: "rankName", label: "보고자 직책/계급/성명", placeholder: "제1소대장 소위 김지호", default: "제1소대장 소위 김지호" },
      { id: "when", label: "발생 일시 (When)", placeholder: "금일 14:30경", default: "금일 14:30경" },
      { id: "where", label: "발생 장소 (Where)", placeholder: "부대 후문 영외 탄약고 인근 도로", default: "주둔지 제2위병소 전방 50m 지점" },
      { id: "who", label: "관련 대상 (Who)", placeholder: "제1분대 상병 이대한 외 1명 / 미상 민간인 1명", default: "초병 일병 박충성 (식별 대상: 미상 민간 차량 1대)" },
      { id: "what", label: "발생 내용 (What & How)", placeholder: "어떤 상황이 발생했는지 간결히 입력", default: "내비게이션 오작동으로 영문 앞 진입 후 사진 촬영을 시도한 상황" },
      { id: "action", label: "초동 조치 사항", placeholder: "현장에서 즉시 조치한 내용", default: "즉시 정지 제지 후 신원 확인 및 촬영 사진 현장 삭제 조치, 위병조장 현장 통제 중" },
      { id: "plan", label: "향후 조치 및 건의", placeholder: "추가 조치 예정 사항", default: "정보과 보안담당 간부 입회하에 인적사항 인계 후 회차 조치 예정입니다" }
    ],
    generate: (v) => `[초동 상황보고]
충성! ${v.rankName} 상황 보고드리겠습니다.

1. 일 시 : ${v.when}
2. 장 소 : ${v.where}
3. 대 상 : ${v.who}
4. 내 용 : ${v.what}이(가) 발생하였습니다.
5. 초동조치 : 현 시간부로 ${v.action} 완료하였습니다.
6. 향후계획 : ${v.plan}. 추가 변동사항 발생 시 즉시 후속 보고드리겠습니다. 끝.`
  },
  medical: {
    title: "🚑 환자 발생 및 후송(외진) 보고",
    desc: "훈련·작업 중 부상자 또는 발열/응급환자 발생 시 지휘관 및 의무 계통에 보고하는 표준 양식입니다.",
    fields: [
      { id: "rankName", label: "보고자 직책/계급/성명", placeholder: "제2소대 부소대장 하사 김강철", default: "제1소대장 소위 김지호" },
      { id: "patient", label: "환자 소속/계급/성명", placeholder: "1소대 2분대 일병 홍길동", default: "1소대 2분대 일병 정호국" },
      { id: "whenWhere", label: "발생 일시 및 장소", placeholder: "금일 10:15경 / 전술훈련장 각개전투 교장", default: "금일 10:15경 / 전술훈련장 급속행군 코스" },
      { id: "symptom", label: "주요 증상 및 원인", placeholder: "우측 발목 염좌 및 통증 호소 (기동 중 접질림)", default: "고열(38.6도) 및 어지럼증 호소 (행군 간 탈수 의심)" },
      { id: "firstAid", label: "현장 응급조치 및 의식상태", placeholder: "의식 명료하며, 그늘 이동 후 부목 고정 완료", default: "의식 명료하며, 즉시 군장 해제 후 그늘 이동 및 수분·아이스팩 응급처치 실시" },
      { id: "evac", label: "후송 수단 및 인솔 간부", placeholder: "대대 구급차(AMB) 이용, 부소대장 하사 김강철 동승 후송", default: "대대 구급차(AMB) 지원 요청 완료, 부소대장 중사 이군인 동승하에 의무대 후송 중" }
    ],
    generate: (v) => `[환자 발생 및 조치 보고]
충성! ${v.rankName} 환자 발생 보고드리겠습니다.

1. 인적사항 : ${v.patient}
2. 일시/장소 : ${v.whenWhere}
3. 증상/원인 : ${v.symptom}
4. 응급조치 : ${v.firstAid}
5. 후송현황 : ${v.evac}입니다.
6. 향후계획 : 군의관 진료 소견 및 외부 병원 후송 여부 결정 즉시 재보고드리겠습니다. 끝.`
  },
  duty: {
    title: "🌙 당직근무 인계인수 / 순찰 이상유무 보고",
    desc: "당직사관·당직부관 근무 투입/종료 시 또는 지휘관 순찰 시 실시하는 정석 병력·보안 결산 보고 양식입니다.",
    fields: [
      { id: "dutyRole", label: "당직 직책 및 계급/성명", placeholder: "당직사관 육군 소위 김지호", default: "당직사관 육군 소위 김지호" },
      { id: "total", label: "편제 총원 (명)", placeholder: "120", default: "115" },
      { id: "absent", label: "사고(열외) 인원 및 내역", placeholder: "12명 (휴가 9, 파견 2, 입실 1)", default: "10명 (정기휴가 7, 교육파견 2, 의무대 입실 1)" },
      { id: "present", label: "현재원 (명)", placeholder: "108", default: "105" },
      { id: "security", label: "총기·탄약 및 경계작전 상태", placeholder: "총기 총원 대조 이상 무, 위병소 및 불침번 근무 정상", default: "총기함·탄약고 이중 잠금 및 열쇠 보관 이상 없으며, 위병소 및 초동조치부대 대기태세 양호" },
      { id: "special", label: "금일 야간 중점 관리사항", placeholder: "심야 시간대 복귀자 2명 신원확인 및 온열질환 예방 순찰", default: "21:30 휴가 복귀 예정자 3명 복귀 결산 및 심야 시간대 생활관 냉난방기 안전 순찰 실시 예정" }
    ],
    generate: (v) => `[당직근무 상황 보고]
충성! ${v.dutyRole} 당직근무 현황 보고드리겠습니다.

1. 병력결산 : 총원 ${v.total}명, 사고 ${v.absent}, 현재원 ${v.present}명입니다.
2. 경계/보안 : ${v.security}합니다.
3. 중점사항 : ${v.special}입니다.
현 시간부 당직근무 이상 없습니다! 끝.`
  },
  equipment: {
    title: "🔧 장비·물자 결함 식별 및 조치 보고",
    desc: "사격, 기동훈련, 주간정비 중 총기·차량·통신장비 등의 결함이나 손망실을 발견했을 때 보고하는 양식입니다.",
    fields: [
      { id: "rankName", label: "보고자 직책/계급/성명", placeholder: "제3소대장 소위 김지호", default: "제1소대장 소위 김지호" },
      { id: "equipName", label: "대상 장비명 및 관리번호", placeholder: "K-511A1 전술차량 (12호차) / PRC-999K 무전기 1대", default: "소대 지휘용 PRC-999K 무전기 1대 (관리번호 #04)" },
      { id: "defect", label: "결함 식별 경위 및 증상", placeholder: "주간 예방정비 중 송수화기 단선 및 출력 저하 식별", default: "오전 출동 준비 점검 간 송수신 감도 불량 및 채널 다이얼 접촉 불량 식별" },
      { id: "workaround", label: "임무 공백 방지 대체 조치", placeholder: "중대 예비 무전기 1대 수령하여 정상 운용 중", default: "중대 통신반 보유 예비 무전기 1대를 즉시 수령·편성하여 작전 통신망 유지에 지장 없음" },
      { id: "repairPlan", label: "정비 의뢰 및 수리부속 청구", placeholder: "대대 통신소대 입고 완료 및 DELIIS 수리부속 청구", default: "금일 13:00부 대대 통신정비반 입고 및 DELIIS 수리부속 청구 조치 완료" }
    ],
    generate: (v) => `[장비 결함 식별 및 조치 보고]
충성! ${v.rankName} 장비 정비 관련 보고드리겠습니다.

1. 대상장비 : ${v.equipName}
2. 결함내용 : ${v.defect}되었습니다.
3. 대체조치 : ${v.workaround}을 확인하였습니다.
4. 정비현황 : ${v.repairPlan}하였습니다. 정비 완료 및 수령 시 재보고드리겠습니다. 끝.`
  }
};

// 참모부서 편제 및 군수품 1~10종 가이드 데이터
const STAFF_GUIDE = [
  {
    code: "S-1 / G-1 / J-1",
    name: "인사처 / 인사과 (Personnel)",
    role: "병력 일일결산, 보직·진급·전출입, 포상·징계, 휴가·외박 통제, 전사망자 처리, 부대 복지 및 사기 관리",
    juniorTip: "소대원 휴가 상신, 당직 명령 변경, 신병 전입 및 관심장병 면담 관련 업무 시 가장 자주 협조하는 부서입니다."
  },
  {
    code: "S-2 / G-2 / J-2",
    name: "정보처 / 정보과 (Intelligence)",
    role: "적 전술 및 위협 분석(IPB), 군사보안·암구호·비문 관리, 감시장비(TOD/레이더) 운용 계획, 지형자료·군사지도 보급",
    juniorTip: "훈련용 군사지도 수령, 야간투시경/감시장비 운용, 매일 정오 암구호 수령, 휴대폰·보안 위규 예방 점검을 주관합니다."
  },
  {
    code: "S-3 / G-3 / J-3",
    name: "작전처 / 작전과 (Operations & Training)",
    role: "작전계획(OPLAN)·작전명령(OPORD) 수립, TOC 운영, 교육훈련 계획·통제(사격/유격/혹한기/FTX), 전투준비태세 관리",
    juniorTip: "부대의 심장부입니다. 주간/월간 교육훈련 계획표, 사격장 배정, 초동조치부대 출동 훈련 등 모든 작전·훈련의 컨트롤타워입니다."
  },
  {
    code: "S-4 / G-4 / J-4",
    name: "군수처 / 군수과 (Logistics)",
    role: "1종~10종 보급품 청구·분배(DELIIS), 장비 예방정비(PMCS) 감독, 탄약·유류 할당, 병영시설 관리 및 재물조사",
    juniorTip: "행정보급관님과 함께 소대 피복·장구류, 훈련용 교보재, 탄약 수령 및 반납, 시설물 보수 요청 시 긴밀히 협조합니다."
  },
  {
    code: "G-5 / S-5",
    name: "계획·동원·민군작전처 (Plans / Mobilization / CMO)",
    role: "중장기 작전계획 발전, 전시 동원(M-Day) 및 예비군 훈련 관리, 민군작전(대민지원 및 지자체 협조)",
    juniorTip: "동원사단이나 지역방위사단에서는 예비군 동원훈련 및 작계시행훈련 시 핵심적인 역할을 수행합니다."
  },
  {
    code: "G-6 / S-6 (통신과)",
    name: "정보통신처 / 통신과 (Signal / C4I)",
    role: "유·무선 전술통신망 개통, 무전기(PRC-999K/TMMR) 및 음어자재(CEOI) 관리, ATCIS/국방망 서버 및 단말기 보안 관리",
    juniorTip: "야외훈련 시 통신망 개통, 무전기 고장 수리, 국방망 PC IP 할당 및 체계 접속 오류 시 도움을 받는 필수 부서입니다."
  }
];

const ECHELON_GUIDE = [
  { unit: "분대 (Squad / Section)", abbr: "SQD / SEC", symbol: "●", commander: "분대장 (하사~중사 / 병 분대장)", size: "8 ~ 10명" },
  { unit: "소대 (Platoon)", abbr: "PLT", symbol: "●●●", commander: "소대장 (소위 ~ 중위) / 부소대장 (중사 ~ 상사)", size: "25 ~ 40명" },
  { unit: "중대 / 포대 (Company / Battery)", abbr: "CO / BTRY", symbol: "I", commander: "중대장 (대위) / 행정보급관 (상사 ~ 원사)", size: "80 ~ 150명" },
  { unit: "대대 (Battalion)", abbr: "BN", symbol: "II", commander: "대대장 (중령) / 주임원사 (원사)", size: "300 ~ 600명" },
  { unit: "여단 / 연대 (Brigade / Regiment)", abbr: "BDE / REGT", symbol: "X / III", commander: "여단장 (준장 ~ 대령) / 연대장 (대령)", size: "1,500 ~ 3,500명" },
  { unit: "사단 (Division)", abbr: "DIV", symbol: "XX", commander: "사단장 (소장)", size: "8,000 ~ 12,000명" },
  { unit: "군단 (Corps)", abbr: "CORPS", symbol: "XXX", commander: "군단장 (중장)", size: "2 ~ 4개 사단 및 직할여단" }
];

const SUPPLY_CLASSES = [
  { cls: "1종 (Class I)", icon: "🍱", name: "식량 및 부식", desc: "일반 급식, 전투식량(Ⅰ·Ⅱ·Ⅲ형), 비상식량, 식수 등 일일 정량으로 소비되는 품목", mnemonic: "1식 (하루 세 끼 식량)" },
  { cls: "2종 (Class II)", icon: "🪖", name: "피복·개인장구·일반물자", desc: "전투복, 방탄헬멧, 방독면, 침낭, 천막, 사무용품, 공구세트 등 편제 인가 품목", mnemonic: "2피 (피복과 개인장구)" },
  { cls: "3종 (Class III)", icon: "⛽", name: "유류 및 화학제품", desc: "경유, 휘발유, 항공유, 윤활유(구리스), 부동액, 난방유 등 연료 일체", mnemonic: "3유 (기름 유!)" },
  { cls: "4종 (Class IV)", icon: "🧱", name: "축성 및 건설자재", desc: "철조망(윤형철조망), 모래주머니(사낭), 목재, 시멘트, 진지 보수 자재", mnemonic: "4축 (진지 축성자재)" },
  { cls: "5종 (Class V)", icon: "💣", name: "탄약 및 폭발물", desc: "소총탄(5.56mm), 기관총탄, 포탄, 수류탄, 크레모아, 지뢰, 신관, 폭약", mnemonic: "5탄 (오탄 / 폭탄·탄약)" },
  { cls: "6종 (Class VI)", icon: "🧴", name: "개인 일용품 (PX 물품)", desc: "세면도구, 휴지, 기호품, 과자·음료 등 복지단(충성마트) 판매 품목 및 전시 일용품", mnemonic: "6일 (일용품)" },
  { cls: "7종 (Class VII)", icon: "🚜", name: "주요 전투장비 완제품", desc: "개인화기·공용화기, 전차, 자주포, 장갑차, 전술차량, 무전기 등 핵심 완성 장비", mnemonic: "7장 (주요 전투장비)" },
  { cls: "8종 (Class VIII)", icon: "🩹", name: "의무물자 및 의약품", desc: "구급낭, 지혈대(CAT), 붕대, 의약품, 혈액, 의무장비 및 위생재료", mnemonic: "8의 (의무·약품)" },
  { cls: "9종 (Class IX)", icon: "🔩", name: "수리부속", desc: "차량·화기·통신장비 등의 고장 수리 및 정비를 위한 모든 부품과 구성품", mnemonic: "9수 (구수한 수리부속)" },
  { cls: "10종 (Class X)", icon: "🤝", name: "비군사·대민지원 물자", desc: "민군작전, 농촌 일손 돕기, 재난 복구 등 대민지원을 위한 물자", mnemonic: "10기타 (대민지원 물자)" }
];

const NATO_PHONETIC = {
  A: { code: "Alpha", kor: "알파" },
  B: { code: "Bravo", kor: "브라보" },
  C: { code: "Charlie", kor: "찰리" },
  D: { code: "Delta", kor: "델타" },
  E: { code: "Echo", kor: "에코" },
  F: { code: "Foxtrot", kor: "폭스트롯" },
  G: { code: "Golf", kor: "골프" },
  H: { code: "Hotel", kor: "호텔" },
  I: { code: "India", kor: "인디아" },
  J: { code: "Juliet", kor: "줄리엣" },
  K: { code: "Kilo", kor: "킬로" },
  L: { code: "Lima", kor: "리마" },
  M: { code: "Mike", kor: "마이크" },
  N: { code: "November", kor: "노벰버" },
  O: { code: "Oscar", kor: "오스카" },
  P: { code: "Papa", kor: "파파" },
  Q: { code: "Quebec", kor: "퀘벡" },
  R: { code: "Romeo", kor: "로미오" },
  S: { code: "Sierra", kor: "시에라" },
  T: { code: "Tango", kor: "탱고" },
  U: { code: "Uniform", kor: "유니폼" },
  V: { code: "Victor", kor: "빅터" },
  W: { code: "Whiskey", kor: "위스키" },
  X: { code: "X-ray", kor: "엑스레이" },
  Y: { code: "Yankee", kor: "양키" },
  Z: { code: "Zulu", kor: "줄루" },
  "0": { code: "Zero", kor: "공 (Zero)" },
  "1": { code: "One", kor: "하나 (One)" },
  "2": { code: "Two", kor: "둘 (Two)" },
  "3": { code: "Three", kor: "삼 (Three)" },
  "4": { code: "Four", kor: "넷 (Four)" },
  "5": { code: "Five", kor: "오 (Five)" },
  "6": { code: "Six", kor: "여섯 (Six)" },
  "7": { code: "Seven", kor: "칠 (Seven)" },
  "8": { code: "Eight", kor: "팔 (Eight)" },
  "9": { code: "Nine", kor: "아홉 (Nine)" }
};
