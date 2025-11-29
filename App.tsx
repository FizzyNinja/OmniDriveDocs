import React from 'react';
import { 
  Settings, 
  Zap, 
  TrendingUp, 
  Wrench, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Microscope,
  Milestone
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart,
  Line,
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import { 
  PROJECT_SUBTITLE, 
  SPECS, 
  TOOLS, 
  PROCESS_STEPS,
  CHART_DATA,
  PROJECT_CONTEXT_PARAGRAPHS,
  DESIGN_CHALLENGES,
  MATERIAL_DETAILS,
  FUTURE_ROADMAP
} from './constants';
import { MainAssemblyViewer, GearComparisonViewer, RingGearViewer } from './components/ThreeViewers';

function App() {
  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-indigo-300 selection:text-indigo-900">
      
      {/* --- Navigation --- */}
      <header className="sticky top-4 z-50 mx-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg shadow-indigo-500/10 transition-all duration-300">
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600/90 backdrop-blur rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <Settings className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">OmniDrive<span className="text-indigo-600">Sys</span></span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#overview" className="hover:text-indigo-700 transition-colors">Overview</a>
            <a href="#specs" className="hover:text-indigo-700 transition-colors">Specifications</a>
            <a href="#engineering" className="hover:text-indigo-700 transition-colors">Engineering</a>
            <a href="#results" className="hover:text-indigo-700 transition-colors">Results</a>
          </nav>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/40 border border-white/50 backdrop-blur-md text-indigo-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                Engineering Documentation
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] drop-shadow-sm">
                  Omnidirectional <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Wheel Drive System</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                  {PROJECT_SUBTITLE}. A novel approach to robotic mobility combining differential steering with high-torque propulsion.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#specs" className="px-8 py-4 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 flex items-center backdrop-blur-sm border border-transparent">
                   View Technical Specs <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="#engineering" className="px-8 py-4 bg-white/40 hover:bg-white/60 text-indigo-900 border border-white/50 rounded-2xl font-bold transition-all backdrop-blur-md shadow-lg">
                  Fabrication Process
                </a>
              </div>
            </div>

            <div className="lg:pl-8">
               <div className="relative rounded-3xl p-2 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl hover:shadow-indigo-500/20 transition-shadow duration-500">
                  <MainAssemblyViewer />
               </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-32 mb-24">

        {/* --- Specifications Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {SPECS.map((spec, idx) => (
             <div key={idx} className="bg-white/40 backdrop-blur-xl p-5 rounded-3xl shadow-lg border border-white/50 flex flex-col items-center text-center justify-center hover:bg-white/50 hover:scale-[1.02] transition-all duration-300 group">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2 group-hover:text-indigo-600 transition-colors">{spec.label}</span>
                <span className="text-2xl font-black text-slate-800 font-mono tracking-tight">
                    {spec.value}<span className="text-sm text-slate-500 ml-0.5 font-sans font-bold">{spec.unit}</span>
                </span>
             </div>
           ))}
        </div>

        {/* --- Overview Section --- */}
        <section id="overview" className="grid md:grid-cols-12 gap-12 items-start">
           <div className="md:col-span-7 space-y-8">
              <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Context</h2>
                <div className="prose prose-slate prose-lg text-slate-700 leading-relaxed font-medium">
                    {PROJECT_CONTEXT_PARAGRAPHS.map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-3 gap-4">
                  {[
                      { title: "CNC Machining", subtitle: "6061 Aluminum", img: "https://picsum.photos/400/400?random=10" },
                      { title: "Tormach 440", subtitle: "3-Axis Mill", img: "https://picsum.photos/400/400?random=11" },
                      { title: "Additive Mfg", subtitle: "Carbon Fiber Nylon", img: "https://picsum.photos/400/400?random=12" }
                  ].map((item, i) => (
                    <div key={i} className="group relative aspect-square rounded-3xl overflow-hidden cursor-zoom-in bg-white/20 border border-white/30 shadow-lg">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-bold shadow-black drop-shadow-md">{item.title}</p>
                            <p className="text-[10px] text-white/90 font-medium">{item.subtitle}</p>
                        </div>
                    </div>
                  ))}
              </div>
           </div>

           <div className="md:col-span-5 bg-white/40 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-xl border border-white/50 sticky top-24">
               <div className="flex items-center space-x-3 mb-8">
                   <div className="p-2.5 bg-indigo-500/10 rounded-2xl text-indigo-700 backdrop-blur-sm border border-indigo-500/10">
                        <AlertTriangle className="w-6 h-6" />
                   </div>
                   <h3 className="font-bold text-xl text-slate-900">Key Design Challenges</h3>
               </div>
               <ul className="space-y-6">
                   {DESIGN_CHALLENGES.map((challenge, i) => (
                       <li key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/40 transition-colors border border-transparent hover:border-white/30">
                           <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white font-mono text-sm font-bold flex items-center justify-center mt-0.5 shadow-lg shadow-indigo-500/30">{i + 1}</span>
                           <div>
                               <h4 className="font-bold text-slate-900 text-base">{challenge.title}</h4>
                               <p className="text-sm text-slate-600 mt-1 leading-relaxed font-medium">{challenge.desc}</p>
                           </div>
                       </li>
                   ))}
               </ul>
           </div>
        </section>

        {/* --- Calculations Dashboard --- */}
        <section id="specs" className="space-y-10">
            <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/30">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">System Performance</h2>
                        <p className="text-slate-700 max-w-2xl font-medium">
                            Validation of the 3:1 gear reduction ratio, optimizing for high-torque output while maintaining responsive velocity.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 mt-8">
                    {/* Left Col: Math Breakdown */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Gear Ratio Card */}
                        <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/50">
                            <h4 className="text-slate-900 font-bold mb-6 flex items-center text-sm uppercase tracking-wider">
                                <Settings className="w-4 h-4 mr-2 text-indigo-600" /> Gear Train Logic
                            </h4>
                            
                            <div className="space-y-4">
                                <div className="bg-white/40 p-4 rounded-2xl flex justify-between items-center border border-white/50">
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase mb-1">Stage 1</p>
                                        <p className="text-sm font-bold text-slate-800">Motor → Inter.</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-mono font-black text-slate-900">2:1</span>
                                        <span className="text-xs text-slate-500 font-medium">40T / 20T</span>
                                    </div>
                                </div>
                                <div className="bg-white/40 p-4 rounded-2xl flex justify-between items-center border border-white/50">
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase mb-1">Stage 2</p>
                                        <p className="text-sm font-bold text-slate-800">Inter. → Wheel</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-mono font-black text-slate-900">1.5:1</span>
                                        <span className="text-xs text-slate-500 font-medium">30T / 20T</span>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-600/20 backdrop-blur-md">
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-indigo-100 text-xs font-bold uppercase">Total Reduction</span>
                                            <span className="font-mono text-2xl font-black">3:1</span>
                                        </div>
                                        <p className="text-indigo-200 text-xs font-medium">Torque Multiplier Factor: 3.0x</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Torque Estimates */}
                        <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/50">
                            <h4 className="text-slate-900 font-bold mb-4 flex items-center text-sm uppercase tracking-wider">
                                <Zap className="w-4 h-4 mr-2 text-amber-500" /> Torque Output
                            </h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm py-2 border-b border-slate-400/20">
                                    <span className="text-slate-600 font-medium">Theoretical Max</span>
                                    <span className="font-mono font-bold text-slate-800">252 Nm</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-slate-400/20">
                                    <span className="text-slate-600 font-medium">Efficiency Adjusted (82%)</span>
                                    <span className="font-mono font-bold text-slate-800">~206 Nm</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-slate-800 font-bold">Total Per Wheel</span>
                                    <span className="text-lg font-black text-indigo-700 drop-shadow-sm">~412 Nm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Speed Calc Visual */}
                        <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px] border border-white/10 shadow-2xl">
                            <div className="absolute top-0 right-0 p-32 bg-indigo-500/30 blur-[80px] rounded-full pointer-events-none"></div>
                            
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="text-center md:text-left">
                                    <h3 className="text-white text-xl font-bold mb-1">Velocity Profile</h3>
                                    <p className="text-slate-400 text-sm font-medium">Linear speed at rated RPM</p>
                                </div>
                                
                                <div className="flex items-center gap-6 w-full md:w-auto bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <div className="flex-1 md:flex-none text-center">
                                        <div className="text-xs text-slate-400 uppercase font-bold mb-1">Motor</div>
                                        <div className="text-white font-mono text-xl font-bold">7k <span className="text-xs text-slate-500">RPM</span></div>
                                    </div>
                                    <div className="h-8 w-px bg-white/10"></div>
                                    <div className="flex-1 md:flex-none text-center">
                                        <div className="text-xs text-slate-400 uppercase font-bold mb-1">Wheel</div>
                                        <div className="text-white font-mono text-xl font-bold">2.3k <span className="text-xs text-slate-500">RPM</span></div>
                                    </div>
                                    <div className="h-8 w-px bg-white/10"></div>
                                    <div className="flex-1 md:flex-none bg-indigo-500/20 p-3 rounded-xl backdrop-blur-md border border-indigo-500/30 text-center min-w-[120px]">
                                        <div className="text-indigo-300 text-xs font-bold uppercase mb-1">Top Speed</div>
                                        <div className="text-white font-bold text-2xl">33.7 <span className="text-sm font-normal text-slate-300">km/h</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="bg-white/40 backdrop-blur-xl p-6 rounded-[2rem] shadow-sm border border-white/50 flex-grow min-h-[350px]">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-slate-900 font-bold flex items-center text-sm uppercase tracking-wider">
                                    <TrendingUp className="w-4 h-4 mr-2 text-emerald-600" /> Torque vs Efficiency Curve
                                </h4>
                                <div className="flex gap-4 text-xs font-bold bg-white/40 px-3 py-1.5 rounded-full border border-white/50">
                                    <div className="flex items-center text-slate-600"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>Torque</div>
                                    <div className="flex items-center text-slate-600"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>Efficiency</div>
                                </div>
                            </div>
                            
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={CHART_DATA} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.2)" />
                                        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#475569', fontWeight: 600}} dy={10} />
                                        <YAxis yAxisId="left" fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#475569', fontWeight: 600}} />
                                        <YAxis yAxisId="right" orientation="right" fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#475569', fontWeight: 600}} />
                                        <Tooltip 
                                            contentStyle={{ 
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                                                backdropFilter: 'blur(12px)',
                                                borderRadius: '16px', 
                                                border: '1px solid rgba(255, 255, 255, 0.5)', 
                                                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', 
                                                padding: '12px' 
                                            }}
                                            cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
                                        />
                                        <Line yAxisId="left" type="monotone" dataKey="torque" stroke="#6366f1" strokeWidth={4} dot={false} activeDot={{r: 8, strokeWidth: 0, fill: '#6366f1'}} />
                                        <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={4} dot={false} activeDot={{r: 8, strokeWidth: 0, fill: '#10b981'}} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Engineering Section --- */}
        <section id="engineering" className="space-y-16">
            <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl">
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Engineering & Fabrication</h2>
                 <p className="text-slate-700 max-w-3xl text-lg font-medium">
                    Transforming the concept into reality required solving specific manufacturing challenges related to the differential gear train and compact packaging.
                 </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                     <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl border border-white/50">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Gear Geometry</h3>
                            <div className="flex items-center text-xs font-bold bg-amber-100/50 text-amber-800 px-3 py-1.5 rounded-full border border-amber-200/50">
                                <AlertTriangle size={12} className="mr-1.5" />
                                Key Trade-off
                            </div>
                        </div>
                        <p className="text-slate-700 mb-8 leading-relaxed font-medium">
                            A critical decision point was choosing between helical and straight-cut gears. While helical gears offer smoother load transfer, straight-cut gears were selected to simplify the CAM setup for 3-axis machining.
                        </p>
                        
                        {/* Interactive Gear Comparison */}
                        <GearComparisonViewer />
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl border border-white/50">
                         <h3 className="text-xl font-bold text-slate-900 mb-6">Material Science</h3>
                         
                         <div className="space-y-6 mb-8">
                             <div className="p-4 bg-white/40 rounded-2xl border border-white/50">
                                <h4 className="font-bold text-slate-800 flex items-center mb-2">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                                    6061-T6 Aluminum
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{MATERIAL_DETAILS.aluminum}</p>
                             </div>

                             <div className="p-4 bg-white/40 rounded-2xl border border-white/50">
                                <h4 className="font-bold text-slate-800 flex items-center mb-2">
                                    <div className="w-2 h-2 bg-slate-800 rounded-full mr-2"></div>
                                    PA12 Carbon Fiber (Onyx)
                                </h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{MATERIAL_DETAILS.nylon}</p>
                             </div>
                         </div>
                         <RingGearViewer />
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl h-full">
                        <h3 className="text-xl font-bold text-slate-900 mb-8">Process Timeline</h3>
                        <div className="relative border-l-2 border-indigo-200/50 ml-4 space-y-12 py-2">
                            {PROCESS_STEPS.map((step, idx) => (
                                <div key={idx} className="relative pl-12 group">
                                    {/* Dot */}
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 shadow-lg shadow-indigo-500/30 group-hover:scale-125 transition-transform duration-300"></div>
                                    
                                    <div className="space-y-2 p-4 rounded-2xl group-hover:bg-white/40 transition-colors border border-transparent group-hover:border-white/40">
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                                            <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-wider">Step 0{idx + 1}</span>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm font-medium">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tools Grid */}
                        <div className="bg-white/40 rounded-3xl p-8 border border-white/50 mt-12 shadow-inner">
                            <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                                <Wrench className="w-5 h-5 mr-2 text-indigo-500" /> Fabrication Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {TOOLS.map((tool, idx) => (
                                    <span 
                                        key={idx} 
                                        className="px-4 py-2 bg-white/60 backdrop-blur-md text-slate-700 text-sm font-bold rounded-xl border border-white/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                                    >
                                        {tool.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Results --- */}
        <section id="results" className="bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10 mb-20">
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

             <div className="relative z-10 grid md:grid-cols-2 gap-16">
                 <div>
                     <h2 className="text-4xl font-bold mb-6 tracking-tight">Project Outcomes</h2>
                     <p className="text-indigo-100 text-lg mb-10 leading-relaxed font-medium">
                         The prototype successfully demonstrated independent control of drive and steering functions using the novel differential linkage. The physical implementation proved that complex robotics components can be manufactured with accessible lab equipment.
                     </p>
                     
                     <div className="flex gap-4 mb-10">
                         <div className="p-6 bg-white/5 rounded-3xl backdrop-blur-lg border border-white/10 flex-1 hover:bg-white/10 transition-colors">
                             <div className="text-4xl font-black mb-1">100%</div>
                             <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Parts In-House</div>
                         </div>
                         <div className="p-6 bg-white/5 rounded-3xl backdrop-blur-lg border border-white/10 flex-1 hover:bg-white/10 transition-colors">
                             <div className="text-4xl font-black mb-1">33<span className="text-xl">km/h</span></div>
                             <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Top Speed</div>
                         </div>
                     </div>

                     <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
                        <h3 className="font-bold text-lg mb-4 flex items-center text-indigo-200">
                          <Milestone className="w-5 h-5 mr-2" />
                          Future Roadmap
                        </h3>
                        <ul className="space-y-3">
                           {FUTURE_ROADMAP.map((item, i) => (
                             <li key={i} className="flex items-start text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                 </div>

                 <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/20 shadow-2xl h-fit">
                     <h3 className="font-bold text-xl mb-8 flex items-center">
                         <CheckCircle className="w-6 h-6 mr-3 text-emerald-400" />
                         Success Metrics
                     </h3>
                     <ul className="space-y-5">
                         {[
                             "Validated differential torque summing concept",
                             "Successfully integrated carbon-fiber nylon gears",
                             "Achieved target weight distribution of 150lbs",
                             "Simplified CAM workflow for rapid iteration"
                         ].map((item, i) => (
                             <li key={i} className="flex items-start text-base text-indigo-50 font-medium">
                                 <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
                                 {item}
                             </li>
                         ))}
                     </ul>
                 </div>
             </div>
        </section>

      </main>

      <footer className="bg-white/30 backdrop-blur-xl border-t border-white/40 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="flex justify-center items-center space-x-2 mb-4 text-slate-900 font-bold text-lg">
                    <Settings className="w-5 h-5 text-indigo-600" />
                    <span>OmniDriveSys</span>
              </div>
              <p className="text-slate-600 text-sm font-medium">&copy; {new Date().getFullYear()} Omnidirectional Drive System Project. </p>
          </div>
      </footer>
    </div>
  );
}

export default App;