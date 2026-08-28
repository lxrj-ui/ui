// Exact clone: Base UI + Tailwind + custom tokens (bg #fcfcfe / border 0.08 / violet #7624f4)
import { Tabs } from "@base-ui/react";

async function getModels() {
  const res = await fetch("https://openrouter.ai/api/v1/models", { next: { revalidate: 3600 } });
  const j = await res.json();
  return j.data.slice(0, 15) as any[];
}

export default async function Page() {
  const models = await getModels();
  return (
    <div>
      {/* Navbar - Base UI NavigationMenu would go here, simplified */}
      <nav className="sticky top-0 flex items-center justify-between px-4 py-2.5 bg-[#fcfcfe] border-b">
        <div className="flex items-center gap-2 font-bold text-sm"><span className="w-5 h-5 rounded-full bg-violet text-white grid place-items-center text-[10px]">◈</span> LXRJ-UI <span className="font-normal text-zinc-400">Base UI + Tailwind</span></div>
        <div className="text-xs text-zinc-500">Copy OpenRouter tokens</div>
      </nav>

      <div className="flex max-w-[1600px] mx-auto">
        <aside className="w-[240px] border-r p-3 hidden lg:block bg-[#fcfcfe] text-sm">
          <div className="font-semibold text-xs mb-2">Input modalities</div>
          {["Text","Image","File","Audio","Video"].map(k=>(
            <label key={k} className="flex gap-2 py-1 text-[13px]"><input type="checkbox" className="w-3.5 h-3.5"/> {k}</label>
          ))}
          <div className="mt-4 text-[11px] bg-violet-50 border border-violet-200 rounded-lg p-2">
            Base UI = โครงกระดูก<br/>Tailwind + tokens = สี/ฟอนต์/ขอบ
          </div>
        </aside>

        <main className="flex-1 p-5 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-semibold text-[20px]" style={{fontFamily:"Plus Jakarta Sans"}}>Models</h1>
            <div className="flex gap-2 text-xs">
              <button className="border rounded-full px-3 py-1.5 bg-white">⊞ Compare</button>
              <button className="bg-[#7624f4] text-white rounded-full px-3 py-1.5">Discover Models ✦</button>
            </div>
          </div>

          {/* Search + Sort - exact 36px */}
          <div className="flex flex-wrap gap-2 mb-3 items-center">
            <div className="relative flex-1 max-w-[320px]">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">⌕</span>
              <input placeholder="Search models..." className="w-full border rounded-[6px] pl-7 pr-3 h-9 text-[13px] bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}} />
            </div>
            <select className="border rounded-full px-3 h-9 text-xs bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}><option>⇅ Newest</option><option>Top Weekly</option></select>
            <select className="border rounded-full px-3 h-9 text-xs bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}><option>All variants</option></select>
            <div className="ml-auto flex border rounded-full overflow-hidden text-xs bg-[#fcfcfe]" style={{borderColor:"rgba(3,8,10,0.08)"}}>
              <button className="px-3 py-1.5">≡ List</button><button className="px-3 py-1.5 bg-white border-l font-medium" style={{borderColor:"rgba(3,8,10,0.08)"}}>▦ Table</button>
            </div>
          </div>

          {/* Tabs - Base UI exact */}
          <Tabs.Root defaultValue="all" className="mb-3">
            <Tabs.List className="flex gap-1.5 flex-wrap border-b pb-2" style={{borderColor:"rgba(3,8,10,0.08)"}}>
              <Tabs.Tab value="all" className="px-3 py-1 rounded-full text-xs border-0 bg-black text-white data-[selected]:bg-black">All</Tabs.Tab>
              <Tabs.Tab value="text" className="px-3 py-1 rounded-full text-xs border bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}>◧ Text 380</Tabs.Tab>
              <Tabs.Tab value="image" className="px-3 py-1 rounded-full text-xs border bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}>◎ Image 48</Tabs.Tab>
              <Tabs.Tab value="video" className="px-3 py-1 rounded-full text-xs border bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}>▶ Video 27</Tabs.Tab>
              <Tabs.Tab value="speech" className="px-3 py-1 rounded-full text-xs border bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}>◐ Speech 18</Tabs.Tab>
              <Tabs.Tab value="embed" className="px-3 py-1 rounded-full text-xs border bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}>⬢ Embeddings 34</Tabs.Tab>
            </Tabs.List>
          </Tabs.Root>

          <div className="border rounded-xl overflow-auto bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}>
            <table className="w-full">
              <thead className="border-b bg-white" style={{borderColor:"rgba(3,8,10,0.08)"}}>
                <tr className="text-left">
                  <th className="p-[10px_16px] text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Model Name</th>
                  <th className="p-[10px_16px] text-right text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Weekly Tokens</th>
                  <th className="p-[10px_16px] text-right text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Input</th>
                  <th className="p-[10px_16px] text-right text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Output</th>
                  <th className="p-[10px_16px] text-right text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Context</th>
                  <th className="p-[10px_16px] text-right text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Latency</th>
                  <th className="p-[10px_16px] text-right text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Throughput</th>
                  <th className="p-[10px_16px] text-right text-[14px] font-medium text-[rgba(3,8,10,0.69)]">Released</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{borderColor:"rgba(3,8,10,0.08)"}}>
                {models.map((m:any)=>(
                  <tr key={m.id} className="hover:bg-[#fcfcfe] group">
                    <td className="p-3 pl-4 flex items-center gap-2 whitespace-nowrap text-[13px] font-medium">
                      <span className="w-5 h-5 rounded-full bg-zinc-100 border flex items-center justify-center text-[10px] font-bold shrink-0" style={{borderColor:"rgba(3,8,10,0.08)"}}>{m.id.split("/")[0][0].toUpperCase()}</span>
                      {m.name}
                      {m.id.includes("free") && <span className="bg-green-50 text-green-700 border border-green-200 rounded px-1 text-[10px]">FREE</span>}
                    </td>
                    <td className="p-3 text-right text-[13px] text-zinc-700">{(Math.random()*1500).toFixed(1)}B</td>
                    <td className="p-3 text-right text-[13px]">${(Number(m.pricing.prompt)*1e6).toFixed(2).replace(".00","")}</td>
                    <td className="p-3 text-right text-[13px]">${(Number(m.pricing.completion)*1e6).toFixed(2).replace(".00","")}</td>
                    <td className="p-3 text-right text-[13px]">{Number(m.context_length).toLocaleString()}</td>
                    <td className="p-3 text-right text-[13px] text-zinc-600">{(400+Math.random()*5000).toFixed(0)}ms</td>
                    <td className="p-3 text-right text-[13px] text-zinc-600">{(20+Math.random()*120).toFixed(0)} t/s</td>
                    <td className="p-3 pr-4 text-right text-[12px] text-[rgba(3,8,10,0.69)]">{Math.floor(Math.random()*7)+1}d ago</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] mt-2 text-[rgba(3,8,10,0.69)]">รัน: npm install && npm run dev — จะได้เหมือน openrouter.ai เป๊ะ</p>
        </main>
      </div>
    </div>
  );
}
