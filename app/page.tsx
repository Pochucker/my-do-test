import Image from "next/image";
import { Server, ShieldCheck, Activity, Globe, Lock, Cpu } from "lucide-react";

export default function Home() {
  // Mock data for the "Server Status" grid to show off potential scale
  const nodes = [
    { region: "US-East (N. Virginia)", status: "Active", latency: "14ms", capacity: "94%" },
    { region: "US-West (Oregon)", status: "Active", latency: "42ms", capacity: "88%" },
    { region: "EU-West (London)", status: "Provisioning", latency: "--", capacity: "0%" },
    { region: "Asia-Pacific (Tokyo)", status: "Planned", latency: "--", capacity: "0%" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-black font-sans text-zinc-100 selection:bg-teal-500/30">
      
      {/* --- HEADER / LOGO --- */}
      <header className="w-full border-b border-white/10 bg-zinc-900/50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
          {/* Using a text fallback since I don't have your actual image files, 
              but simplified consistent with your brand */}
          <div className="flex items-center gap-2">
             {/* If you have the logo file in public/, uncomment below: */}
             {/* <Image src="/GoLogoLight.svg" alt="Gambit Odds" width={120} height={40} /> */}
             <div className="h-8 w-8 rounded bg-teal-500/20 p-1">
                <Server className="h-full w-full text-teal-400" />
             </div>
             <span className="text-xl font-bold tracking-tight text-white">Gambit Odds</span>
          </div>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 py-20 sm:px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-300 mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Infrastructure Expansion V2.0
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Potential Future New Servers for <span className="text-teal-400">Gambit Odds</span>
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            We are currently provisioning high-frequency arbitrage nodes to expand our global coverage. 
            This restricted view demonstrates our upcoming server architecture.
          </p>
        </div>

        {/* --- MOCK INFRASTRUCTURE DASHBOARD --- */}
        <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl backdrop-blur-sm overflow-hidden">
          
          {/* Dashboard Header */}
          <div className="border-b border-white/10 bg-zinc-900 px-6 py-4 flex items-center justify-between">
             <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-teal-500" />
                <span className="font-mono text-sm font-medium text-zinc-300">SYSTEM_STATUS: SCALING</span>
             </div>
             <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                <span>UPTIME: 99.99%</span>
                <span>LATENCY: 14ms</span>
             </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black/20">
             <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                      <Cpu className="h-5 w-5" />
                   </div>
                   <div className="text-sm text-zinc-400 font-medium">Processing Power</div>
                </div>
                <div className="text-2xl font-bold text-white">14.2M <span className="text-sm font-normal text-zinc-500">odds/hr</span></div>
             </div>
             <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Globe className="h-5 w-5" />
                   </div>
                   <div className="text-sm text-zinc-400 font-medium">Global Coverage</div>
                </div>
                <div className="text-2xl font-bold text-white">4 <span className="text-sm font-normal text-zinc-500">Regions</span></div>
             </div>
             <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <ShieldCheck className="h-5 w-5" />
                   </div>
                   <div className="text-sm text-zinc-400 font-medium">Security Level</div>
                </div>
                <div className="text-2xl font-bold text-white">Enterprise <span className="text-sm font-normal text-zinc-500">TLS 1.3</span></div>
             </div>
          </div>

          {/* Node List */}
          <div className="border-t border-white/10">
            <div className="px-6 py-3 bg-white/5 border-b border-white/5 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
               Active & Provisioning Nodes
            </div>
            <div className="divide-y divide-white/5">
              {nodes.map((node, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`h-2.5 w-2.5 rounded-full ${node.status === 'Active' ? 'bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]' : node.status === 'Provisioning' ? 'bg-amber-500 animate-pulse' : 'bg-zinc-700'}`} />
                    <div>
                       <p className="text-sm font-medium text-white">{node.region}</p>
                       <p className="text-xs text-zinc-500">{node.status}</p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block text-right">
                     <p className="text-sm font-mono text-zinc-300">{node.latency}</p>
                     <p className="text-xs text-zinc-600">Latency</p>
                  </div>

                  <div className="hidden md:block w-32">
                     <div className="flex justify-between text-xs text-zinc-500 mb-1">
                        <span>Load</span>
                        <span>{node.capacity}</span>
                     </div>
                     <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                           className={`h-full rounded-full ${node.status === 'Active' ? 'bg-teal-500/50' : 'bg-transparent'}`} 
                           style={{ width: node.status === 'Active' ? node.capacity : '0%' }}
                        />
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- FOOTER / SECURITY NOTICE --- */}
        <div className="mt-12 flex items-center gap-3 rounded-lg border border-amber-900/30 bg-amber-900/10 px-4 py-3 text-amber-500">
           <Lock className="h-5 w-5" />
           <p className="text-sm">
             <span className="font-semibold">Internal Access Only:</span> This roadmap is confidential to High Summit Holdings LLC partners.
           </p>
        </div>

      </main>
    </div>
  );
}