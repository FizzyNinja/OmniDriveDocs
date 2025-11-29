import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stage, Html } from '@react-three/drei';
import * as THREE from 'three';
import { MousePointer2, Move3d, Plus, Minus, Play, Pause, RefreshCw } from 'lucide-react';
import { GearType } from '../types';

// --- Procedural Components ---

const ProceduralGear = ({ 
  teeth = 20, 
  radius = 1, 
  width = 0.5, 
  type = GearType.STRAIGHT, 
  color = "#a0aec0",
  speed = 0.5
}: { 
  teeth?: number; 
  radius?: number; 
  width?: number; 
  type?: GearType; 
  color?: string;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed;
    }
  });

  const teethArray = Array.from({ length: teeth });

  return (
    <group ref={meshRef}>
      {/* Main Cylinder Body */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[radius * 0.9, radius * 0.9, width, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Center Hole */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
         <cylinderGeometry args={[radius * 0.2, radius * 0.2, width + 0.01, 16]} />
         <meshStandardMaterial color="#333" />
      </mesh>

      {/* Teeth */}
      {teethArray.map((_, i) => {
        const angle = (i / teeth) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh 
            key={i} 
            position={[x, 0, z]} 
            rotation={[0, -angle, type === GearType.HELICAL ? Math.PI / 4 : 0]}
          >
            <boxGeometry args={[0.25, width, 0.3]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </mesh>
        );
      })}
    </group>
  );
};

const RingGear = () => {
  const meshRef = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z -= delta * 0.2;
    }
  });

  const teeth = 40;
  const radius = 2.5;

  return (
    <group ref={meshRef} rotation={[Math.PI/2, 0, 0]}>
        {/* Ring Body */}
        <mesh>
            <torusGeometry args={[radius, 0.3, 16, 100]} />
            <meshStandardMaterial color="#333" metalness={0.5} roughness={0.8} />
        </mesh>
        {/* Teeth */}
        {Array.from({ length: teeth }).map((_, i) => {
            const angle = (i / teeth) * Math.PI * 2;
            return (
                <mesh 
                    key={i} 
                    position={[Math.cos(angle) * (radius - 0.2), Math.sin(angle) * (radius - 0.2), 0]}
                    rotation={[0, 0, angle]}
                >
                    <boxGeometry args={[0.2, 0.4, 0.5]} />
                    <meshStandardMaterial color="#666" />
                </mesh>
            )
        })}
    </group>
  )
}

const OmniWheel = () => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if(groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    const rollers = 12;
    const wheelRadius = 2;

    return (
        <group ref={groupRef}>
            {/* Main Hub */}
            <mesh rotation={[0, 0, Math.PI/2]}>
                <cylinderGeometry args={[1.5, 1.5, 1, 32]} />
                <meshStandardMaterial color="#4f46e5" metalness={0.6} />
            </mesh>

            {/* Rollers */}
            {Array.from({length: rollers}).map((_, i) => {
                const angle = (i / rollers) * Math.PI * 2;
                return (
                    <group 
                        key={i} 
                        position={[Math.cos(angle) * wheelRadius, 0, Math.sin(angle) * wheelRadius]}
                        rotation={[0, -angle, 0]}
                    >
                        {/* The roller itself acts perpendicular to the main wheel rotation */}
                        <mesh rotation={[Math.PI/2, 0, 0]}>
                             <capsuleGeometry args={[0.3, 1, 4, 8]} />
                             <meshStandardMaterial color="#1f2937" roughness={0.9} />
                        </mesh>
                    </group>
                )
            })}
        </group>
    )
}

// --- Reusable UI & Controls ---

const InteractionOverlay = ({ title, type = "model" }: { title: string, type?: string }) => (
  <>
    <div className="absolute top-4 left-4 z-10 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/50 text-slate-800 shadow-sm">
        <p className="font-bold text-sm flex items-center gap-2">
           <Move3d size={14} className="text-indigo-500" />
           {title}
        </p>
        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5 ml-5">
          {type} Visualization
        </p>
      </div>
    </div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-1000">
        <div className="bg-black/70 backdrop-blur-md text-white/90 text-[11px] px-4 py-1.5 rounded-full flex items-center gap-3 shadow-xl">
            <span className="flex items-center gap-1"><MousePointer2 size={10} /> Interactive</span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span>Keyboard Supported</span>
        </div>
    </div>
  </>
);

const ViewerControls = ({ 
  autoRotate = false, 
  enableZoom = true 
}: { 
  autoRotate?: boolean,
  enableZoom?: boolean 
}) => {
  const controlsRef = useRef<any>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);

  const handleZoom = (factor: number) => {
    if (controlsRef.current) {
        if (factor > 0) controlsRef.current.dollyIn(1.2);
        else controlsRef.current.dollyOut(1.2);
        controlsRef.current.update();
    }
  };

  const handleReset = () => {
     if (controlsRef.current) {
         controlsRef.current.reset();
     }
  };

  return (
    <>
      <OrbitControls 
        ref={controlsRef}
        makeDefault 
        autoRotate={isAutoRotating}
        autoRotateSpeed={1.5}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.6}
        zoomSpeed={0.7}
        panSpeed={0.5}
        minDistance={2}
        maxDistance={20}
        enableZoom={enableZoom}
      />
      
      {/* On-Screen HUD Controls */}
      <Html fullscreen style={{ pointerEvents: 'none' }} zIndexRange={[100, 0]}>
         <div className="absolute bottom-4 right-4 flex flex-col gap-2 pointer-events-auto">
            
            {/* Zoom Controls */}
            <div className="bg-white/90 backdrop-blur rounded-lg shadow-sm border border-slate-200 p-1 flex flex-col gap-1">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleZoom(1); }}
                  className="p-1.5 hover:bg-slate-100 rounded text-slate-700 transition active:bg-slate-200" 
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <Plus size={16} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleZoom(-1); }}
                  className="p-1.5 hover:bg-slate-100 rounded text-slate-700 transition active:bg-slate-200" 
                  title="Zoom Out"
                   aria-label="Zoom Out"
                >
                  <Minus size={16} />
                </button>
            </div>

            {/* Playback/Reset Controls */}
             <div className="bg-white/90 backdrop-blur rounded-lg shadow-sm border border-slate-200 p-1 flex flex-col gap-1">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsAutoRotating(!isAutoRotating); }}
                  className={`p-1.5 hover:bg-slate-100 rounded transition active:bg-slate-200 ${isAutoRotating ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'}`}
                  title={isAutoRotating ? "Pause Rotation" : "Start Rotation"}
                   aria-label="Toggle Rotation"
                >
                  {isAutoRotating ? <Pause size={16} /> : <Play size={16} />}
                </button>
                 <button 
                  onClick={(e) => { e.stopPropagation(); handleReset(); }}
                  className="p-1.5 hover:bg-slate-100 rounded text-slate-700 transition active:bg-slate-200" 
                  title="Reset View"
                   aria-label="Reset View"
                >
                  <RefreshCw size={16} />
                </button>
             </div>
         </div>
      </Html>
    </>
  );
};

// --- Viewers ---

export const MainAssemblyViewer = () => {
  return (
    <div 
      className="group w-full h-[500px] rounded-2xl overflow-hidden shadow-xl relative outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all touch-none bg-gradient-to-b from-slate-800 to-slate-900"
      tabIndex={0}
      role="application"
      aria-label="3D Model Viewer"
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-lg">
            <p className="font-bold text-sm flex items-center gap-2">
            <Move3d size={14} className="text-indigo-400" />
            Omni-Wheel Assembly
            </p>
        </div>
      </div>

      <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
        <Stage environment="city" intensity={0.6} adjustCamera={false}>
          <OmniWheel />
        </Stage>
        <ViewerControls autoRotate={true} />
      </Canvas>
    </div>
  );
};

export const GearComparisonViewer = () => {
  const [gearType, setGearType] = useState<GearType>(GearType.STRAIGHT);

  return (
    <div 
      className="group w-full h-[400px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 relative flex flex-col outline-none focus:ring-4 focus:ring-indigo-500/20 touch-none"
      tabIndex={0}
      role="application"
      aria-label="Gear Comparison Viewer"
    >
       <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="font-bold text-sm flex items-center gap-2 text-slate-700">
            <Move3d size={14} className="text-indigo-500" />
            Gear Geometry
            </p>
        </div>
      </div>

       <div className="absolute top-4 right-4 z-10 bg-white p-1 rounded-lg shadow-sm border border-slate-200 flex gap-1">
            <button 
                onClick={() => setGearType(GearType.STRAIGHT)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${gearType === GearType.STRAIGHT ? 'bg-indigo-600 text-white shadow-sm' : 'bg-transparent text-slate-500 hover:bg-slate-100'}`}
            >
                Straight Cut
            </button>
            <button 
                onClick={() => setGearType(GearType.HELICAL)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${gearType === GearType.HELICAL ? 'bg-indigo-600 text-white shadow-sm' : 'bg-transparent text-slate-500 hover:bg-slate-100'}`}
            >
                Helical
            </button>
      </div>
      
      <Canvas shadows camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Stage environment="studio" intensity={0.5} adjustCamera={false}>
            <ProceduralGear type={gearType} color={gearType === GearType.STRAIGHT ? "#94a3b8" : "#cbd5e1"} />
        </Stage>
        <ViewerControls autoRotate={false} />
      </Canvas>
    </div>
  );
};

export const RingGearViewer = () => {
    return (
      <div 
        className="group w-full h-[300px] bg-slate-900 rounded-2xl overflow-hidden shadow-lg relative outline-none focus:ring-4 focus:ring-indigo-500/20 touch-none"
        tabIndex={0}
        role="application"
        aria-label="Ring Gear Viewer"
      >
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-white shadow-lg">
                <p className="font-bold text-sm flex items-center gap-2">
                <Move3d size={14} className="text-indigo-400" />
                PA12 Carbon Fiber Ring
                </p>
            </div>
        </div>
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stage environment="night" intensity={1} adjustCamera={false}>
             <RingGear />
          </Stage>
          <ViewerControls autoRotate={true} />
        </Canvas>
      </div>
    );
  };