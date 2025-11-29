import React from 'react';
import { 
  Projector, 
  Settings, 
  Cpu, 
  Zap, 
  TrendingUp, 
  Wrench, 
  CheckCircle, 
  AlertTriangle,
  Layers,
  Factory,
  ArrowRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  LineChart,
  Line
} from 'recharts';
import { 
  PROJECT_TITLE, 
  PROJECT_SUBTITLE, 
  SPECS, 
  TOOLS, 
  PROCESS_STEPS,
  CHART_DATA
} from './constants';
import { MainAssemblyViewer, GearComparisonViewer, RingGearViewer } from './components/ThreeViewers';

function App() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- Navigation --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-indigo-200 shadow-md">
                <Settings className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">OmniDrive<span className="text-indigo-600">Sys</span></span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-indigo-600 transition-colors">Overview</a>
            <a href="#specs" className="hover:text-indigo-600 transition-colors">Specifications</a>
            <a href="#engineering" className="hover:text-indigo-600 transition-colors">Engineering</a>
            <a href="#results" className="hover:text-indigo-600 transition-colors">Results</a>
          </nav>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                Engineering Documentation
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                  Omnidirectional <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">Wheel Drive System</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  {PROJECT_SUBTITLE}. A novel approach to robotic mobility combining differential steering with high-torque propulsion.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#specs" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-900/20 flex items-center">
                   View Technical Specs <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="#engineering" className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                  Fabrication Process
                </a>
              </div>
            </div>

            <div className="lg:pl-8">
               <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent">
                  <MainAssemblyViewer />
               </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-32 mb-24">

        {/* --- Specifications Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {SPECS.map((spec, idx) => (
             <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2 group-hover:text-indigo-500 transition-colors">{spec.label}</span>
                <span className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
                    {spec.value}<span className="text-sm text-slate-400 ml-0.5 font-sans font-normal">{spec.unit}</span>
                </span>
             </div>
           ))}
        </div>

        {/* --- Overview Section --- */}
        <section id="overview" className="grid md:grid-cols-12 gap-12 items-start">
           <div className="md:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Context</h2>
                <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
                    <p>
                        This project required developing a novel drive mechanism capable of simultaneously powering a wheel while enabling unrestricted 360° rotation. 
                        Unlike traditional swerve drives which use two independent systems, this differential approach couples the motors to double the torque output.
                    </p>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-3 gap-4">
                  {[
                      { title: "CNC Machining", subtitle: "6061 Aluminum", img: "https://picsum.photos/400/400?random=10" },
                      { title: "Tormach 440", subtitle: "3-Axis Mill", img: "https://picsum.photos/400/400?random=11" },
                      { title: "Additive Mfg", subtitle: "Carbon Fiber Nylon", img: "https://picsum.photos/400/400?random=12" }
                  ].map((item, i) => (
                    <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden cursor-zoom-in bg-slate-100">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                            <p className="text-xs font-bold">{item.title}</p>
                            <p className="text-[10px] text-white/70">{item.subtitle}</p>
                        </div>
                    </div>
                  ))}
              </div>
           </div>

           <div className="md:col-span-5 bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
               <div className="flex items-center space-x-3 mb-6">
                   <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                        <AlertTriangle className="w-5 h-5" />
                   </div>
                   <h3 className="font-bold text-lg text-slate-900">Key Design Challenges</h3>
               </div>
               <ul className="space-y-6">
                   {[
                       { title: "Dual-Function Power", desc: "Coupling two high-RPM brushless motors to independently control steering and drive without interference." },
                       { title: "Structural Integrity", desc: "Supporting 150lbs distributed load while maintaining precise 0.1mm gear mesh tolerances." },
                       { title: "Mfg Constraints", desc: "Limited to 3-axis machining and FDM printing, requiring creative part geometry decomposition." }
                   ].map((challenge, i) => (
                       <li key={i} className="flex gap-4">
                           <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-mono text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                           <div>
                               <h4 className="font-semibold text-slate-900 text-sm">{challenge.title}</h4>
                               <p className="text-sm text-slate-500 mt-1 leading-relaxed">{challenge.desc}</p>
                           </div>
                       </li>
                   ))}
               </ul>
           </div>
        </section>

        {/* --- Calculations Dashboard --- */}
        <section id="specs" className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">System Performance</h2>
                    <p className="text-slate-600 max-w-2xl">
                        Validation of the 3:1 gear reduction ratio, optimizing for high-torque output while maintaining responsive velocity.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Left Col: Math Breakdown */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Gear Ratio Card */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <h4 className="text-slate-900 font-bold mb-6 flex items-center text-sm uppercase tracking-wider">
                            <Settings className="w-4 h-4 mr-2 text-indigo-500" /> Gear Train Logic
                        </h4>
                        
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-4 rounded-xl flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase mb-1">Stage 1</p>
                                    <p className="text-sm font-semibold text-slate-700">Motor → Inter.</p>
                                </div>
                                <div className="text-right">
                                    <span className="block font-mono font-bold text-slate-900">2:1</span>
                                    <span className="text-xs text-slate-400">40T / 20T</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase mb-1">Stage 2</p>
                                    <p className="text-sm font-semibold text-slate-700">Inter. → Wheel</p>
                                </div>
                                <div className="text-right">
                                    <span className="block font-mono font-bold text-slate-900">1.5:1</span>
                                    <span className="text-xs text-slate-400">30T / 20T</span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="p-4 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-indigo-100 text-xs font-bold uppercase">Total Reduction</span>
                                        <span className="font-mono text-2xl font-bold">3:1</span>
                                    </div>
                                    <p className="text-indigo-200 text-xs">Torque Multiplier Factor: 3.0x</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Torque Estimates */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <h4 className="text-slate-900 font-bold mb-4 flex items-center text-sm uppercase tracking-wider">
                            <Zap className="w-4 h-4 mr-2 text-yellow-500" /> Torque Output
                        </h4>
                        <div className="space-y-3">
                             <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                <span className="text-slate-500">Theoretical Max</span>
                                <span className="font-mono font-medium">252 Nm</span>
                             </div>
                             <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                                <span className="text-slate-500">Efficiency Adjusted (82%)</span>
                                <span className="font-mono font-medium">~206 Nm</span>
                             </div>
                             <div className="flex justify-between items-center pt-2">
                                 <span className="text-slate-700 font-bold">Total Per Wheel</span>
                                 <span className="text-lg font-bold text-indigo-600">~412 Nm</span>
                             </div>
                             <p className="text-[10px] text-slate-400 mt-2">
                                *Calculated with dual-motor contribution logic.
                             </p>
                        </div>
                    </div>
                </div>

                {/* Right Col: Visualization */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                     {/* Speed Calc Visual */}
                     <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px]">
                        <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-white text-lg font-bold mb-1">Velocity Profile</h3>
                                <p className="text-slate-400 text-sm">Linear speed at rated RPM</p>
                            </div>
                            
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="flex-1 md:flex-none text-center">
                                    <div className="text-xs text-slate-500 uppercase font-bold mb-1">Motor</div>
                                    <div className="text-white font-mono text-lg">7k <span className="text-xs text-slate-500">RPM</span></div>
                                </div>
                                <div className="h-px w-8 bg-slate-700"></div>
                                <div className="flex-1 md:flex-none text-center">
                                    <div className="text-xs text-slate-500 uppercase font-bold mb-1">Wheel</div>
                                    <div className="text-white font-mono text-lg">2.3k <span className="text-xs text-slate-500">RPM</span></div>
                                </div>
                                <div className="h-px w-8 bg-slate-700"></div>
                                <div className="flex-1 md:flex-none bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10 text-center min-w-[120px]">
                                    <div className="text-indigo-300 text-xs font-bold uppercase mb-1">Top Speed</div>
                                    <div className="text-white font-bold text-2xl">33.7 <span className="text-sm font-normal text-slate-300">km/h</span></div>
                                </div>
                            </div>
                        </div>
                     </div>

                    {/* Chart */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex-grow min-h-[350px]">
                         <div className="flex justify-between items-center mb-6">
                            <h4 className="text-slate-900 font-bold flex items-center text-sm uppercase tracking-wider">
                                <TrendingUp className="w-4 h-4 mr-2 text-emerald-500" /> Torque vs Efficiency Curve
                            </h4>
                            <div className="flex gap-4 text-xs font-medium">
                                <div className="flex items-center text-slate-500"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>Torque</div>
                                <div className="flex items-center text-slate-500"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>Efficiency</div>
                            </div>
                         </div>
                        
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={CHART_DATA} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                                    <YAxis yAxisId="left" fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#94a3b8'}} />
                                    <YAxis yAxisId="right" orientation="right" fontSize={12} tickLine={false} axisLine={false} tick={{fill: '#94a3b8'}} />
                                    <Tooltip 
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                                        cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }}
                                    />
                                    <Line yAxisId="left" type="monotone" dataKey="torque" stroke="#6366f1" strokeWidth={3} dot={false} activeDot={{r: 6}} />
                                    <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={3} dot={false} activeDot={{r: 6}} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Engineering Section --- */}
        <section id="engineering" className="space-y-16">
            <div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Engineering & Fabrication</h2>
                 <p className="text-slate-600 max-w-3xl text-lg">
                    Transforming the concept into reality required solving specific manufacturing challenges related to the differential gear train and compact packaging.
                 </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                     <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Gear Geometry</h3>
                            <div className="flex items-center text-xs font-semibold bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-100">
                                <AlertTriangle size={12} className="mr-1.5" />
                                Key Trade-off
                            </div>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            A critical decision point was choosing between helical and straight-cut gears. While helical gears offer smoother load transfer, straight-cut gears were selected to simplify the CAM setup for 3-axis machining.
                        </p>
                        
                        {/* Interactive Gear Comparison */}
                        <GearComparisonViewer />
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                         <h3 className="text-xl font-bold text-slate-900 mb-6">Ring Gear Fabrication</h3>
                         <p className="text-slate-600 mb-6">
                            The large internal gear required a material with high impact resistance and self-lubricating properties. PA12 Nylon with chopped carbon fiber was used.
                         </p>
                         <RingGearViewer />
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-xl font-bold text-slate-900">Process Timeline</h3>
                    <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 py-2">
                        {PROCESS_STEPS.map((step, idx) => (
                            <div key={idx} className="relative pl-12 group">
                                {/* Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                                
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                                        <span className="text-xs font-bold text-slate-300 px-2 py-0.5 border border-slate-200 rounded">Step 0{idx + 1}</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* Tools Grid */}
                     <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mt-8">
                        <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                            <Wrench className="w-5 h-5 mr-2 text-slate-400" /> Fabrication Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {TOOLS.map((tool, idx) => (
                                <span 
                                    key={idx} 
                                    className="px-4 py-2 bg-white text-slate-600 text-sm font-medium rounded-xl border border-slate-200 shadow-sm"
                                >
                                    {tool.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- Results --- */}
        <section id="results" className="bg-indigo-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/30 blur-[100px] rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/20 blur-[80px] rounded-full"></div>

             <div className="relative z-10 grid md:grid-cols-2 gap-12">
                 <div>
                     <h2 className="text-3xl font-bold mb-6">Project Outcomes</h2>
                     <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                         The prototype successfully demonstrated independent control of drive and steering functions using the novel differential linkage. The physical implementation proved that complex robotics components can be manufactured with accessible lab equipment.
                     </p>
                     
                     <div className="flex gap-4">
                         <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex-1">
                             <div className="text-3xl font-bold mb-1">100%</div>
                             <div className="text-xs text-indigo-200 uppercase tracking-wider">Parts In-House</div>
                         </div>
                         <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex-1">
                             <div className="text-3xl font-bold mb-1">33<span className="text-lg">km/h</span></div>
                             <div className="text-xs text-indigo-200 uppercase tracking-wider">Top Speed</div>
                         </div>
                     </div>
                 </div>

                 <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                     <h3 className="font-bold text-lg mb-6 flex items-center">
                         <CheckCircle className="w-5 h-5 mr-3 text-emerald-400" />
                         Success Metrics
                     </h3>
                     <ul className="space-y-4">
                         {[
                             "Validated differential torque summing concept",
                             "Successfully integrated carbon-fiber nylon gears",
                             "Achieved target weight distribution of 150lbs",
                             "Simplified CAM workflow for rapid iteration"
                         ].map((item, i) => (
                             <li key={i} className="flex items-start text-sm text-indigo-100">
                                 <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                 {item}
                             </li>
                         ))}
                     </ul>
                 </div>
             </div>
        </section>

      </main>

      <footer className="bg-white border-t border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="flex justify-center items-center space-x-2 mb-4 text-slate-900 font-bold text-lg">
                    <Settings className="w-5 h-5 text-indigo-600" />
                    <span>OmniDriveSys</span>
              </div>
              <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Omnidirectional Drive System Project. </p>
          </div>
      </footer>
    </div>
  );
}

export default App;