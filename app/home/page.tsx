export default function Home() {
  return (
    <div className="bg-[#fcfcfe] min-h-screen" style={{fontFamily:"Plus Jakarta Sans, system-ui, sans-serif"}}>
      {/* Navbar - copied */}
      <nav className="sticky top-0 z-10 flex items-center justify-between px-6 h-14 bg-[#fcfcfe] border-b" style={{borderColor:"rgba(3,8,10,0.08)"}}>
        <div className="font-bold text-sm flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-[#7624f4] grid place-items-center text-white text-[10px]">◈</span> openrouter</div>
        <div className="hidden md:flex gap-4 text-[13px] text-zinc-600"><span>Home</span><span>Models</span><span>Chat</span><span>Docs</span></div>
      </nav>

      {/* Hero - copied from openrouter.ai h1 56px gordita */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-8 px-6">
        <h1 className="text-[56px] font-bold leading-[1.1] tracking-tight" style={{fontFamily:"gordita, sans-serif", color:"#03080a"}}>
          The Unified Interface<br/>For Every Model
        </h1>
        <p className="mt-4 text-sm text-[rgba(3,8,10,0.69)]">
          Better <a className="underline">prices</a>, better <a className="underline">uptime</a>, no subscriptions.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/models" className="bg-[#7624f4] text-[#fcfcfe] rounded-[6px] h-11 px-8 inline-flex items-center text-sm font-medium" style={{fontFamily:"jakarta"}}>Get API Key</a>
          <a href="/" className="bg-white text-[#03080a] border rounded-[6px] h-11 px-8 inline-flex items-center text-sm font-medium" style={{borderColor:"rgba(3,8,10,0.08)", fontFamily:"jakarta"}}>Discover Models</a>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-xs text-[rgba(3,8,10,0.69)]">
          <span><b className="text-[#03080a]">300T+</b> Monthly Tokens</span>
          <span><b className="text-[#03080a]">10M+</b> Global Users</span>
          <span><b className="text-[#03080a]">80+</b> Providers</span>
          <span><b className="text-[#03080a]">500+</b> Models</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 px-6 pb-12">
        {[
          {t:"Higher Availability", d:"Fall back to other providers when one goes down."},
          {t:"Price and Performance", d:"Runs at the edge for minimal latency."},
          {t:"Custom Data Policies", d:"Ensure prompts only go to models you trust."},
        ].map(c=>(
          <div key={c.t} className="bg-white border rounded-xl p-5" style={{borderColor:"rgba(3,8,10,0.08)"}}>
            <div className="w-8 h-8 rounded bg-[#fcfcfe] border mb-3" style={{borderColor:"rgba(3,8,10,0.08)"}}></div>
            <div className="font-semibold text-sm">{c.t}</div>
            <div className="text-xs mt-1" style={{color:"rgba(3,8,10,0.69)"}}>{c.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
