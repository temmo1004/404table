/* global React */
const { useState, useEffect, useRef } = React;

// ── 404 TABLE 標誌 ──────────────────────
const Mark = ({ size = 32, color = 'currentColor' }) => (
  <svg viewBox="0 0 160 80" width={size} height={size * 0.5} fill={color}>
    {/* Left 4: diagonal stroke + crossbar + right bar */}
    <path d="M17,0 L32,0 L15,40 L0,40 Z"/>
    <rect x="0" y="40" width="50" height="12"/>
    <rect x="32" y="0" width="18" height="80"/>
    {/* Table: top + two legs */}
    <rect x="57" y="0" width="46" height="40"/>
    <rect x="57" y="45" width="17" height="35"/>
    <rect x="86" y="45" width="17" height="35"/>
    {/* Right 4: left bar + crossbar + diagonal stroke */}
    <rect x="110" y="0" width="18" height="80"/>
    <rect x="110" y="40" width="50" height="12"/>
    <path d="M143,0 L128,0 L145,40 L160,40 Z"/>
  </svg>
);

// ── Top bar ─────────────────────────────
const TopBar = () => (
  <header className="topbar">
    <div className="brand">
      <Mark size={28}/>
      <span>404 TABLE</span>
    </div>
    <nav>
      <a href="#pricing">方案</a>
      <a href="#instructor">講師</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a href="#signup" className="cta">立即報名 →</a>
  </header>
);

// ── Hero ────────────────────────────────
const Hero = () => (
  <section className="hero">
    <div className="hero-meta">
      <span>職能實驗室 / EST. 2026</span>
      <span>500元課程陣列 — 秘書／行政 — 第 01 季</span>
      <span>2026 春季班 / 招生中</span>
    </div>

    <h1>
      <span className="strike">2 小時</span>會議記錄，<br/>
      現在 <em>10 分鐘</em>搞定。
    </h1>

    <div className="sub">
      <p className="lede">
        老闆又錄了 5 分鐘語音。<br/>
        客戶又發了 80 字沒標點的 LINE。<br/>
        合約又是 100 頁、10 分鐘後要結論。<br/>
        —— 你是<em>秘書</em>，不是讀心術師。
      </p>
      <div className="stats">
        <div className="stat"><div className="num">20</div><div className="lbl">堂課</div></div>
        <div className="stat"><div className="num">500</div><div className="lbl">元 / 堂</div></div>
        <div className="stat"><div className="num">1 hr</div><div className="lbl">不帶作業</div></div>
      </div>
    </div>

    <div className="hero-cta-row">
      <a href="#signup" className="btn-solid">挑一堂試試 — NTD 500</a>
      <a href="#pricing" className="btn-ghost">看方案 →</a>
    </div>
  </section>
);

// ── Marquee ─────────────────────────────
const Marquee = () => {
  const items = [
    '老闆錄音祕笈', '會議 10 分鐘交件', '名片秒掃歸檔術', '100 張 15 分鐘',
    '老闆 LINE 翻譯機', '雙語接待一小時套裝', '合約地雷掃描術', '5 分鐘看完 100 頁',
    '月底對帳信量產術', '80 封 10 分鐘', '老闆記憶還原術', '差勤對帳魔法',
    '報價單百變工廠', '300 人請柬不出錯', '跨時區會議終結 10 輪信',
  ];
  const row = items.map((x, i) => (
    <React.Fragment key={i}><span>{x}</span><span className="dot">●</span></React.Fragment>
  ));
  return (
    <div className="marquee">
      <div className="marquee-track">{row}{row}{row}</div>
    </div>
  );
};

// ── Pain stories ────────────────────────
const PainStories = () => {
  const stories = [
    { tag: 'SCENE 01 / 14:32', t: '「會議紀錄今天下班前要。」', q: '老闆一邊講一邊走出會議室。你還在打第二點，他已經到第七點了。', ts: 'TUE 14:32:08' },
    { tag: 'SCENE 02 / 09:15', t: '「那個女客戶的電話呢？」', q: '科技業、姓陳、去年 Q3 — 然後就沒了。你抽屜翻遍，名片找不到。', ts: 'WED 09:15:44' },
    { tag: 'SCENE 03 / 23:48', t: '「明天要看合約有沒有雷。」', q: '110 頁 PDF 在你信箱躺著，老闆 10 點開會。你已經到家。', ts: 'SUN 23:48:21' },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <div className="section-num"><span className="pill">02</span>那一天的那一幕</div>
        <h2 className="section-title">不是<em>能力</em>不夠，<br/>是<span className="strike">時間</span>不夠。</h2>
      </div>
      <div className="pain-grid">
        {stories.map((s, i) => (
          <div className="pain-card" key={i}>
            <div>
              <div className="scene-tag">{s.tag}</div>
              <h3>{s.t}</h3>
              <div className="quote">{s.q}</div>
            </div>
            <div className="timestamp">▍ {s.ts}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ── Courses ─────────────────────────────
const Courses = () => {
  const [open, setOpen] = useState(0); // first open by default
  return (
    <section className="section" id="courses">
      <div className="section-head">
        <div className="section-num"><span className="pill">03</span>20 堂課陣列</div>
        <h2 className="section-title">每一堂解一個<em>那一幕</em>。<br/>離開教室 — 成果<span className="strike">沒</span>帶回家。</h2>
      </div>
      <div className="course-list">
        {window.COURSES.map((c, i) => (
          <React.Fragment key={c.n}>
            <div
              className={'course-row' + (open === i ? ' open' : '')}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="num">／{c.n}</div>
              <div className="title">{c.title}</div>
              <div className="pain-line">{c.pain}</div>
              <div className="timer-pill">{c.timer}搞定</div>
              <div className="toggle">+</div>
            </div>
            <div className={'course-detail' + (open === i ? ' open' : '')}>
              <div className="course-detail-grid">
                <div className="label">／{c.n}</div>
                <div>
                  <div className="label">痛點</div>
                  <div className="body">{c.pain}</div>
                </div>
                <div>
                  <div className="label">解法</div>
                  <div className="body warn">{c.solve}</div>
                </div>
                <div>
                  <div className="label">帶走</div>
                  <div className="body">{c.take}</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

// ── Pricing ─────────────────────────────
const Pricing = () => (
  <section className="section" id="pricing">
    <div className="price-banner">
      <div className="price-banner-left">
        <div className="tier">單堂體驗</div>
        <div className="price-big">500<span className="unit">NTD / 堂</span></div>
        <a href="#signup" className="btn-solid" style={{marginTop: 24}}>挑一堂報名 →</a>
      </div>
      <div className="price-banner-right">
        <div className="pitch">挑一個你最痛的「那一幕」，1 小時當場做完，離開教室就能用。</div>
        <ul className="price-list">
          <li>任選 1 堂，1 小時實作</li>
          <li>不帶作業回家</li>
          <li>附 3 套提示詞模板</li>
          <li>同系列累積購買享折抵</li>
        </ul>
      </div>
    </div>
  </section>
);

// ── Industries ──────────────────────────
const IndustriesSection = () => (
  <section className="section" id="industries">
    <div className="section-head">
      <div className="section-num"><span className="pill">05</span>30 個產業 / 30 種老闆</div>
      <h2 className="section-title">你的<em>產業</em>，<br/>有你產業的<span className="strike">地獄</span>。</h2>
    </div>
    <p className="fine" style={{ marginBottom: 24 }}>30 產業 × 3 價位 = 90 個專屬入口。</p>
    <div className="industry-grid">
      {window.INDUSTRIES.map((ind, i) => (
        <a key={ind.id} href="#signup" className="industry-cell">
          <div className="idx">／{String(i + 1).padStart(2, '0')}</div>
          <div className="name">{ind.zh}</div>
          <div className="arrow">→ 進入</div>
        </a>
      ))}
    </div>
  </section>
);

// ── Metrics ─────────────────────────────
const Metrics = () => (
  <section className="metrics">
    <div className="metric">
      <div className="num">120<span className="small">×</span></div>
      <div className="lbl">效率提升</div>
      <div className="desc">2 小時的會議紀錄，10 分鐘交件 — 學員實測中位數。</div>
    </div>
    <div className="metric">
      <div className="num">96<span className="small">%</span></div>
      <div className="lbl">回購率</div>
      <div className="desc">第一堂上完的學員中，96% 一個月內報第二堂。</div>
    </div>
    <div className="metric">
      <div className="num">3<span className="small">套</span></div>
      <div className="lbl">提示詞模板</div>
      <div className="desc">每堂課帶走 3 套個人化提示詞，下班就能用。</div>
    </div>
    <div className="metric">
      <div className="num">0<span className="small">頁</span></div>
      <div className="lbl">作業</div>
      <div className="desc">離開教室時成果已經做出來，絕不帶作業回家。</div>
    </div>
  </section>
);

// ── Proof ───────────────────────────────
const Proof = () => (
  <section className="section">
    <div className="section-head">
      <div className="section-num"><span className="pill">06</span>學員回響</div>
      <h2 className="section-title">他們<em>不再</em>加班。</h2>
    </div>
    <div className="proof-grid">
      <div className="proof-quote">
        <div className="mark">"</div>
        <div className="text">
          上完《老闆錄音祕笈》那天回辦公室，老闆 5 點半丟給我 90 分鐘的會議錄音。<br/>
          —— 我 6 點 12 分把三版交件甩在他桌上，準時下班。
        </div>
        <div className="who">▍ 林小姐 / 製造業總經理特助 / 年資 8 年</div>
      </div>
      <div className="proof-side">
        <h4>「下班前交件」<br/>從口號變日常。</h4>
        <p>我們的設計原則只有一條：離開教室時，今天的工作已經交了。不是 demo，是你今天回去就能用、能交、能準時下班的工作流。</p>
      </div>
    </div>
  </section>
);

// ── Instructor ──────────────────────────
const Instructor = () => (
  <section className="section" id="instructor">
    <div className="section-head">
      <div className="section-num"><span className="pill">07</span>講師</div>
      <h2 className="section-title">設計者本身，<br/>就<em>當過</em>那個秘書。</h2>
    </div>
    <div className="instructor">
      <div className="photo">
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="500" fill="#0A0A0A"/>
          <circle cx="200" cy="180" r="80" fill="#1A1A1A" stroke="#F5F2EC" strokeWidth="1.5"/>
          <path d="M 100 500 L 100 380 Q 200 320 300 380 L 300 500 Z" fill="#1A1A1A" stroke="#F5F2EC" strokeWidth="1.5"/>
          <text x="200" y="470" textAnchor="middle" fill="#F5F2EC" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="2">FOUNDER</text>
        </svg>
      </div>
      <div className="bio">
        <h3>陳<em style={{ fontStyle: 'italic', color: 'var(--warn)' }}>知行</em></h3>
        <div className="role">創辦人 / 前 上市公司董事長特助</div>
        <p className="desc">12 年董事長特助資歷。看過 5 個老闆、3 種產業、無數次「現在馬上要」的崩潰瞬間。設計這 20 堂課，是把自己 12 年踩過的坑，變成 2 小時就能走完的捷徑。</p>
        <div className="credentials">
          <div className="cred"><div className="num">12<span style={{ fontSize: 18, fontFamily: 'var(--sans)', opacity: 0.6 }}>yr</span></div><div className="lbl">特助實戰</div></div>
          <div className="cred"><div className="num">5<span style={{ fontSize: 18, fontFamily: 'var(--sans)', opacity: 0.6 }}>位</span></div><div className="lbl">老闆服侍</div></div>
          <div className="cred"><div className="num">2,400<span style={{ fontSize: 18, fontFamily: 'var(--sans)', opacity: 0.6 }}>+</span></div><div className="lbl">學員結業</div></div>
        </div>
      </div>
    </div>
  </section>
);

// ── FAQ ─────────────────────────────────
const FAQ = () => {
  const faqs = [
    { q: '我完全不會寫程式、不會用 AI，跟得上嗎？', a: '課程全部以「滑手機等級」為設計基準。沒有程式、沒有指令列、沒有 API。你會的，就是手機錄音、複製貼上、按一個按鈕。我們對自己的要求是：教室裡最不熟科技的那一位，也要在課程結束時當場交出成果。' },
    { q: '課程是線上還是實體？', a: '主推實體面授（台北 / 台中 / 高雄），人數上限 12 人，講師現場逐一檢查每位學員的成果。線上同步直播班另開，但作業檢核機制不同 — 報名前我們會跟你確認。' },
    { q: '為什麼 500 元這麼便宜？是不是有後續推銷？', a: '500 元是「試水溫」階。我們的邏輯是：你上得爽就會自己回來，所以第一堂便宜得跟一杯精品咖啡一樣。不會在課堂上推銷，但你會收到下一堂的訊息 —— 因為那時候你已經想再上了。' },
    { q: '我用的不是 ChatGPT，是 Claude / Gemini / 其他，可以嗎？', a: '可以。所有提示詞模板我們提供「跨平台版本」，並現場示範同一份提示詞在三大平台上的差異。你帶哪個來，我們調哪個。' },
    { q: '20 堂課我是不是要全部上？', a: '完全不必。20 堂是 20 種痛點的對應方案，挑你最痛的 1–3 堂就有感了。重度學員的中位數是 5–6 堂。' },
    { q: '我們公司可以包班嗎？', a: '可以。最低 8 人成班，會依照貴公司流程客製教材，並提供 90 天落地陪跑。請透過報名表單或來信洽詢。' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="section-head">
        <div className="section-num"><span className="pill">08</span>常見問題</div>
        <h2 className="section-title">你<em>已經</em>在猶豫了。</h2>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className={'faq-item' + (open === i ? ' open' : '')} onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="faq-q">
              <div className="q-text">Q.{String(i + 1).padStart(2, '0')} — {f.q}</div>
              <div className="q-toggle">+</div>
            </div>
            <div className="faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzvmN838Uji5413-Of7oT8RNhTdFmLtdBlL_0uMuZmotzoT0YeYAwUmItpdqGASQDlE_A/exec';

// ── Signup ──────────────────────────────
const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({ name: '', email: '', company: '', title: '', industry: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }));

  return (
    <section className="signup" id="signup">
      <div className="signup-inner">
        <div>
          <h2>停止<em>原地</em>加班。<br/>從一堂 <em>500</em> 開始。</h2>
          <p className="lede">填一份 30 秒表單，我們會在 24 小時內把對應你產業的課表寄給你。沒有電話騷擾，只有對應你「那一幕」的解法。</p>
        </div>
        {submitted ? (
          <div style={{ padding: '32px 0' }}>
            <div className="display" style={{ fontSize: 64, color: 'var(--warn)' }}>✓ 已收到</div>
            <p style={{ marginTop: 16, fontFamily: 'var(--serif)', fontSize: 18, opacity: 0.8 }}>24 小時內，你的信箱會出現一封不囉唆的信。</p>
          </div>
        ) : (
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input required placeholder="姓名 / Name" value={fields.name} onChange={set('name')}/>
              <input required type="email" placeholder="Email" value={fields.email} onChange={set('email')}/>
            </div>
            <div className="form-row">
              <input placeholder="公司 / Company" value={fields.company} onChange={set('company')}/>
              <input placeholder="職稱 / Title" value={fields.title} onChange={set('title')}/>
            </div>
            <select required value={fields.industry} onChange={set('industry')}>
              <option value="" disabled>選擇你的產業 — 30 個全有 ▾</option>
              {window.INDUSTRIES.map(ind => <option key={ind.id} value={ind.id}>{ind.zh}</option>)}
              <option value="other">其他</option>
            </select>
            <button type="submit" disabled={loading}>{loading ? '送出中…' : '送出 — 我要開始準時下班 →'}</button>
            <p className="consent">送出即同意我們以 Email 寄送課表與後續通知。我們不會把你的資料賣給任何人，也不會打電話。</p>
          </form>
        )}
      </div>
    </section>
  );
};

// ── Footer ──────────────────────────────
const Foot = () => (
  <footer className="foot">
    <div className="foot-grid">
      <div className="brand-blk">
        <Mark size={56} color="#F5F2EC"/>
        <p>404 TABLE — 為被「現在馬上要」逼瘋的職場人，做的 AI 賦能課程。</p>
      </div>
      <div>
        <h5>COURSES</h5>
        <ul><li><a href="#courses">秘書 / 行政（已開）</a></li><li><a>行銷企劃（即將）</a></li><li><a>法務（即將）</a></li><li><a>會計（即將）</a></li><li><a>業務（即將）</a></li><li><a>人資（即將）</a></li></ul>
      </div>
      <div>
        <h5>ABOUT</h5>
        <ul><li><a href="#instructor">講師</a></li><li><a>關於我們</a></li><li><a>媒體露出</a></li><li><a>合作邀約</a></li></ul>
      </div>
    </div>
    <div className="foot-bottom">
      <span>© 2026 404 TABLE CO., LTD. — 屋瓦資產管理有限公司</span>
      <span>職能實驗室</span>
    </div>
  </footer>
);

// ── App ─────────────────────────────────
const App = () => (
  <>
    <TopBar/>
    <Hero/>
    <Marquee/>
    <PainStories/>
    <Metrics/>
    <Pricing/>
    <Proof/>
    <Instructor/>
    <FAQ/>
    <Signup/>
    <Foot/>
  </>
);

Object.assign(window, {
  App, Mark, TopBar, Hero, Marquee, PainStories, Courses,
  Pricing, IndustriesSection, Metrics, Proof, Instructor, FAQ, Signup, Foot,
});
