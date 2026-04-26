// Tier-specific copy framework (industry × tier)
// Each tier has a different positioning, language register, and CTA.

const TIERS = {
  '01': {
    code: '01',
    label: '撒網 / 試水溫',
    name: '單堂體驗',
    price: '500',
    unit: 'NTD / 堂',
    duration: '2–3 小時 / 堂',
    cta: '挑一堂 — 立即報名',
    cta_sub: '次月開課 / 名額限 12 人',
    pitch: '挑你最痛的「那一幕」，2–3 小時當場做完。離開教室就能用，下班就能交。',
    bullets: [
      '任選 1 堂，2–3 小時實作',
      '不帶作業回家',
      '附 3 套提示詞模板',
      '同系列累積購買享折抵',
      '人數上限 12 人',
    ],
    tone: 'anxiety', // 焦慮販售
  },
  '02': {
    code: '02',
    label: '進階 / 工作流',
    name: '進階套組',
    price: '3,000',
    unit: 'NTD / 套',
    duration: '4 堂 / 套，共 8–12 小時',
    cta: '報名進階套組 →',
    cta_sub: '套票折抵 500 元任選課',
    pitch: '從單點解法升級成系統化工作流。深度進階、模組化組合、加值諮詢。',
    bullets: [
      '深度進階 4 堂 / 套（指定主題）',
      '可組合式 SOP 模板',
      '1 對 1 微調諮詢 30 分鐘',
      '套票折抵 500 元任選課',
      '結業頒授實戰證書',
    ],
    tone: 'growth', // 進階成長
  },
  '03': {
    code: '03',
    label: '企業 / 顧問',
    name: '企業內訓 + 顧問',
    price: '30,000+',
    unit: 'NTD 起',
    duration: '8 小時 / 日 + 90 天落地陪跑',
    cta: '聯繫企業顧問',
    cta_sub: '24 小時內專人回覆',
    pitch: '為單一公司客製化 — 從祕書流程到老闆決策層，全公司「AI 化」一次到位。',
    bullets: [
      '企業內訓 1 日 8 小時（最低 8 人成班）',
      '客製化教材 + 公司專屬提示詞庫',
      '90 天落地陪跑',
      '高階主管 1 對 1 諮詢',
      '保密協議下進行',
    ],
    tone: 'executive', // 高階決策
  },
};

// Per-industry × tier copy. Each combo gets a unique hero headline + scenario + recommended courses.
// Auto-generated patterns; can be hand-tuned per page.

function buildIndustryTierCopy(ind, tierCode, courses) {
  const T = TIERS[tierCode];
  const recMap = {
    'tech-semi': [0, 4, 17, 13], 'software': [0, 6, 13, 17], 'telecom': [9, 5, 19, 17],
    'media': [10, 16, 13, 17], 'marketing': [16, 13, 10, 11], 'finance': [4, 5, 9, 17],
    'realestate': [4, 14, 11, 1], 'mfg-machine': [3, 1, 2, 14], 'mfg-electric': [14, 1, 5, 17],
    'mfg-auto': [3, 19, 1, 17], 'mfg-chem': [4, 5, 17, 13], 'mfg-paper': [12, 0, 13, 1],
    'mfg-food': [11, 5, 18, 1], 'mfg-other': [14, 1, 18, 11], 'retail': [3, 5, 14, 11],
    'logistics': [9, 5, 17, 13], 'hospitality': [8, 11, 18, 1], 'medical': [7, 4, 15, 0],
    'education': [15, 17, 0, 13], 'hr-consult': [9, 7, 17, 14], 'design': [13, 16, 14, 0],
    'energy': [4, 17, 15, 5], 'agri': [7, 6, 0, 1], 'auto-svc': [14, 5, 13, 1],
    'security': [9, 17, 18, 13], 'biotech': [4, 6, 17, 0], 'gov-npo': [10, 15, 4, 17],
    'funeral': [11, 4, 15, 0], 'museum': [10, 16, 0, 18], 'defense': [4, 15, 9, 17],
  };
  const idxs = recMap[ind.id] || [0, 4, 13, 17];
  const recCourses = idxs.slice(0, tierCode === '02' ? 4 : 3).map(i => courses[i]);

  // Tier-specific headline framing
  const headlines = {
    '01': {
      h1_a: `在 ${ind.zh.split('／')[0]} 業，`,
      h1_b: '當秘書是',
      strike: '浪漫',
      em: '的事？',
      sub: ind.pain,
      cta_line: `挑一堂試試 — 你產業的「那一幕」，500 元就能踩煞車。`,
    },
    '02': {
      h1_a: `${ind.zh.split('／')[0]} 業的`,
      h1_b: '系統化',
      strike: '單點救火',
      em: ' 升級',
      sub: `不再是一堂課解一個問題 — 而是把 ${ind.zh.split('／')[0]} 產業的整套秘書工作流，從錄音到決策摘要，一次升級到位。`,
      cta_line: `4 堂進階套組 — 為 ${ind.zh.split('／')[0]} 業者打造的工作流模組。`,
    },
    '03': {
      h1_a: `為${ind.zh.split('／')[0]} 業`,
      h1_b: '量身',
      strike: '自學',
      em: '打造',
      sub: `從董事長特助到 C-suite 助理，全公司一次落地。我們進駐你的辦公室，學員結訓那刻起，老闆當天就有感。`,
      cta_line: `企業客製內訓 — 90 天落地陪跑，我們不交差，我們交結果。`,
    },
  };

  // Tier-specific scenario timeline
  const scenarios = {
    '01': {
      head: '你產業的「那一幕」',
      scene: `老闆拍下會議室一角的影像、扔在群組裡，丟一句「你看一下」 — 然後就閉麥了。\n你打開檔案，3 個議題、5 個人說話、1 個小時長度。\n8 點要交。`,
      timeline: [
        { t: '17:48', e: '老闆甩來會議錄音 / PDF', warn: false },
        { t: '17:52', e: '你開始播放、邊聽邊打字', warn: false },
        { t: '18:30', e: '打到第二議題，已經卡住', warn: false },
        { t: '19:10', e: '訊息：「快好了嗎？」', warn: true },
        { t: '20:00', e: '✗ 還在打第三議題', warn: true },
        { t: '21:30', e: '✗ 草草交件、不確定漏掉什麼', warn: true },
      ],
    },
    '02': {
      head: '上完進階套組之後的同一天',
      scene: `不再是「一個工具救一次火」，而是把這個產業的整套節奏 — 從晨會、客訴、合約、報價、決策摘要 — 全都交給 SOP。`,
      timeline: [
        { t: '17:48', e: '老闆甩來會議錄音 / PDF', warn: false },
        { t: '17:50', e: 'SOP-A：錄音 → 三版交件啟動', warn: false },
        { t: '17:54', e: 'SOP-B：自動偵測決策事項、提示老闆需確認的 3 點', warn: false },
        { t: '17:58', e: '✓ 三版文件同時送達老闆 + 部門', warn: false },
        { t: '18:00', e: '✓ 你下班 / 老闆已開始看', warn: false },
      ],
    },
    '03': {
      head: '企業內訓結束的下個月',
      scene: `不只是秘書會用 — 是整個 ${ind.zh.split('／')[0]} 公司的「白手套」流程都升了一階。\n董事長知道、業務知道、財務也知道：所有「現在馬上要」的東西，都已經 SOP 化、可被代理。`,
      timeline: [
        { t: 'Day 01', e: '進駐 / 全員診斷', warn: false },
        { t: 'Day 03', e: '8 小時集訓 + 客製化提示詞庫部署', warn: false },
        { t: 'Day 14', e: '第一輪復盤 / 問題排除', warn: false },
        { t: 'Day 30', e: '✓ 老闆主動引用某句 prompt', warn: false },
        { t: 'Day 60', e: '✓ 部門間自發互換工作流', warn: false },
        { t: 'Day 90', e: '✓ 結案 / KPI 報告交付董事會', warn: false },
      ],
    },
  };

  return {
    tier: T,
    headline: headlines[tierCode],
    scenario: scenarios[tierCode],
    recCourses,
  };
}

window.TIERS = TIERS;
window.buildIndustryTierCopy = buildIndustryTierCopy;
