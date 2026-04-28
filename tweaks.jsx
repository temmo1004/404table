/* global React */
const { useState, useEffect } = React;

// Apply tweaks to document
function applyTweaks(t) {
  const r = document.documentElement.style;
  r.setProperty('--warn', t.accent);
  window.dispatchEvent(new CustomEvent('tweaks-change', { detail: t }));
  if (t.darkMode) {
    r.setProperty('--paper', '#0A0A0A');
    r.setProperty('--paper-2', '#1A1A1A');
    r.setProperty('--ink', '#F5F2EC');
    r.setProperty('--ink-2', '#ECE7DD');
    r.setProperty('--line', 'rgba(245,242,236,0.18)');
  } else {
    r.setProperty('--paper', t.paper);
    r.setProperty('--paper-2', '#ECE7DD');
    r.setProperty('--ink', t.ink);
    r.setProperty('--ink-2', '#1A1A1A');
    r.setProperty('--line', 'rgba(10,10,10,0.18)');
  }
}

const TweaksApp = () => {
  const [t, setT] = useTweaks(window.TWEAKS);
  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="主色">
        <TweakColor label="強調色" value={t.accent} onChange={v => setT('accent', v)}/>
      </TweakSection>
      <TweakSection label="底色 / 字色">
        <TweakColor label="紙色" value={t.paper} onChange={v => setT('paper', v)}/>
        <TweakColor label="墨色" value={t.ink} onChange={v => setT('ink', v)}/>
        <TweakToggle label="暗色模式" value={t.darkMode} onChange={v => setT('darkMode', v)}/>
      </TweakSection>
      <TweakSection label="Hero 文案">
        <TweakRadio
          label="主標版本"
          value={t.heroVariant}
          options={[
            { value: 'default', label: '會議 10 分鐘' },
            { value: 'line', label: 'LINE 翻譯' },
            { value: 'overtime', label: '不再加班' },
          ]}
          onChange={v => setT('heroVariant', v)}/>
      </TweakSection>
    </TweaksPanel>
  );
};

window.TweaksApp = TweaksApp;
