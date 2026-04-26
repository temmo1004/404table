/* global React */
const { useState, useEffect } = React;

const TierPage = () => {
  const params = new URLSearchParams(location.search);
  const indId = params.get('ind') || 'tech-semi';
  const tierCode = params.get('tier') || '01';
  const ind = window.INDUSTRIES.find(x => x.id === indId) || window.INDUSTRIES[0];
  const indIdx = window.INDUSTRIES.findIndex(x => x.id === ind.id);
  const data = window.buildIndustryTierCopy(ind, tierCode, window.COURSES);
  const T = data.tier;

  useEffect(() => { document.body.setAttribute('data-tier', tierCode); }, [tierCode]);

  return (
    <>
      <window.TopBar/>

      <div className="tier-meta">
        <span>JOBSLAB / TIER {T.code} / {T.label}</span>
        <div className="right">
          <span>{ind.en.toUpperCase()}</span>
          <span>產業 {String(indIdx+1).padStart(2,'0')} / 30</span>
          <span>第 01 季招生</span>
        </div>
      </div>

      <section className="pg-hero">
        <div className="crumb">
          <a href="index.html">← 回首頁</a>{' / '}
          <a href={`hub.html#${ind.id}`}>{ind.zh}</a>{' / '}
          <span style={{ opacity: 0.5 }}>TIER {T.code} — {T.name}</span>
        </div>
        <div className="tier-tag">
          <span>TIER</span><b>{T.code}</b><span>—</span><span>{T.label}</span>
        </div>
        <h1>
          {data.headline.h1_a}<br/>
          {data.headline.h1_b}<span className="strike">{data.headline.strike}</span><em>{data.headline.em}</em>
        </h1>
        <p className="lede">{data.headline.sub}</p>

        <div className="price-row">
          <div>
            <div className="mono" style={{ fontSize: 11, opacity: 0.6, letterSpacing: '0.1em', marginBottom: 8 }}>NTD</div>
            <div className="price">{T.price}<span className="unit">{T.unit}</span></div>
            <div className="mono" style={{ fontSize: 11, opacity: 0.6, marginTop: 12, letterSpacing: '0.1em' }}>{T.duration}</div>
          </div>
          <div className="desc">{data.headline.cta_line}</div>
          <div className="cta-block">
            <a href="#signup" className="btn">{T.cta} →</a>
            <span className="small">{T.cta_sub}</span>
          </div>
        </div>
      </section>

      <window.Marquee/>

      <section className="scenario-block">
        <div className="section-head">
          <div className="section-num"><span className="pill">01</span>{data.scenario.head}</div>
          <h2 className="section-title">{tierCode === '01' ? '今天又是這樣的一天。' : tierCode === '02' ? '同一個老闆，新的節奏。' : '90 天後，老闆<em>不再</em>催你。'}</h2>
        </div>
        <div className="scenario-grid">
          <div>
            <div className="head">▍ {ind.zh} / 場景再現</div>
            <div className="scene">{data.scenario.scene.split('\n').map((line, i) => <div key={i} style={{ marginBottom: 12 }}>{tierCode === '03' && i === 0 ? <em>{line}</em> : line}</div>)}</div>
          </div>
          <div className="clock">
            <div className="ts">▍ TIMELINE / SAME-DAY</div>
            <div className="timeline">
              {data.scenario.timeline.map((row, i) => (
                <div key={i} className={'row ' + (row.warn ? 'warn' : '')}>
                  <div className="t">{row.t}</div>
                  <div className="e">{row.e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="deliverables">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="section-num"><span className="pill">02</span>{tierCode === '01' ? '為這個產業挑的 3 堂' : tierCode === '02' ? '套組內含 4 堂進階' : '客製化的核心模組'}</div>
          <h2 className="section-title">
            {tierCode === '01' ? <>你產業的<em>地獄</em>，<br/>這 3 堂先<span className="strike">通關</span>。</> :
             tierCode === '02' ? <>4 堂連著上，<br/>整套<em>節奏</em>就到位。</> :
             <>不是一堂課，<br/>是一個<em>結果</em>。</>}
          </h2>
        </div>
        <div className="deliv-grid">
          {data.recCourses.map((c, i) => (
            <a key={c.n} href={`tier.html?ind=${ind.id}&tier=${tierCode}#course-${c.n}`} className="deliv-card">
              <div className="icon">／{c.n}</div>
              <div className="title">{c.title}</div>
              <div className="desc">{c.pain}</div>
              <div className="meta">▍ {c.timer}搞定 — {c.subtitle}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="tier-switch">
        <div className="section-head">
          <div className="section-num"><span className="pill">03</span>同產業 / 換階段</div>
          <h2 className="section-title">不只想<span className="strike">試</span>？<br/>升<em>進階</em>，或直上<em>企業</em>。</h2>
        </div>
        <div className="tier-switch-grid">
          {['01', '02', '03'].map(code => {
            const tt = window.TIERS[code];
            const isActive = code === tierCode;
            return (
              <a key={code} href={isActive ? '#' : `tier.html?ind=${ind.id}&tier=${code}`} className={'ts-card' + (isActive ? ' active' : '')} onClick={isActive ? (e)=>e.preventDefault() : undefined}>
                <div className="lvl">TIER {code} {isActive && '— 你在這'}</div>
                <div className="nm">{tt.name}</div>
                <div className="pr">{tt.price}<span style={{ fontSize: 12, opacity: 0.6, marginLeft: 6 }}>{tt.unit}</span></div>
                <div className="desc">{tt.pitch}</div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="nav-other">
        <div className="section-head" style={{ marginBottom: 8 }}>
          <div className="section-num"><span className="pill">+</span>同階 / 換產業</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>同樣是 TIER {T.code}，<br/>看看其他產業的版本。</h2>
        </div>
        <div className="nav-other-list">
          {window.INDUSTRIES.filter(x => x.id !== ind.id).map(other => (
            <a key={other.id} href={`tier.html?ind=${other.id}&tier=${tierCode}`} className="nav-other-item">
              {other.zh}
            </a>
          ))}
        </div>
      </section>

      <window.Signup/>
      <window.Foot/>
    </>
  );
};

window.TierPage = TierPage;
