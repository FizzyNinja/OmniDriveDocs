import { SpecItem, ToolItem, ProcessStep, BOMItem, SoftwareFeature } from './types';

export const PROJECT_TITLE = "Omnidirectional Wheel Drive System";
export const PROJECT_SUBTITLE = "Differential-Powered Drive & Steering Mechanism with Custom CNC-Machined Components";

export const SPECS: SpecItem[] = [
  { value: "150", label: "Load Capacity", unit: "lbs" },
  { value: "84", label: "Stall Torque", unit: "Nm" },
  { value: "7000", label: "Motor RPM", unit: "" },
  { value: "3:1", label: "Gear Reduction", unit: "" },
  { value: "33.7", label: "Top Speed", unit: "km/h" },
  { value: "4", label: "Wheel Diameter", unit: "inches" },
];

export const TOOLS: ToolItem[] = [
  { name: "Fusion 360", category: "software" },
  { name: "Fusion CAM", category: "software" },
  { name: "Tormach 440 PCNC", category: "hardware" },
  { name: "Wazer Pro Waterjet", category: "hardware" },
  { name: "Markforged MarkTwo", category: "hardware" },
  { name: "6061 Aluminum", category: "material" },
  { name: "PA12 Carbon Fiber Nylon", category: "material" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "CNC Programming & Machining",
    description: "Self-taught CNC programming and operation of the Tormach 440 PCNC mill using Fusion CAM. Machined critical input gears and pinions from 6061 aluminum to handle peak torque loads at the motor shaft interface and gear tooth contact points. Transitioned from helical to straight-cut gears to simplify toolpathing."
  },
  {
    title: "3D Printed Ring Gears",
    description: "Ring gears were printed on the Markforged MarkTwo using PA12 nylon with continuous carbon fiber reinforcement. This approach circumvented the need for 4-axis milling while providing excellent strength-to-weight ratio. The nylon material offered self-lubricating properties."
  },
  {
    title: "Waterjet Structural Components",
    description: "Designed and fabricated two aluminum mounting plates using the Wazer Pro waterjet. These plates serve as the structural backbone, mounting the motors and supporting the internal gear train. Bearing pockets were precisely positioned to achieve proper preload."
  }
];

export const CHART_DATA = [
  { name: '0 RPM', torque: 412, efficiency: 0 },
  { name: '1k RPM', torque: 380, efficiency: 72 },
  { name: '2k RPM', torque: 310, efficiency: 85 },
  { name: '2.3k RPM', torque: 205, efficiency: 78 },
  { name: '3k RPM', torque: 85, efficiency: 45 },
];

export const BOM: BOMItem[] = [
  { part: "Brushless Motor (7k RPM)", quantity: 2, material: "N/A", source: "Off-the-shelf" },
  { part: "Input Pinion (20T)", quantity: 2, material: "6061 Aluminum", source: "CNC Machined" },
  { part: "Intermediate Gear (40T)", quantity: 2, material: "6061 Aluminum", source: "CNC Machined" },
  { part: "Internal Ring Gear (120T)", quantity: 1, material: "PA12 CF Nylon", source: "Markforged 3D" },
  { part: "Structural Base Plate", quantity: 2, material: "6061 Aluminum", source: "Waterjet Cut" },
  { part: "Omni-Wheel Roller", quantity: 12, material: "TPU / Rubber", source: "Off-the-shelf" },
];

export const SOFTWARE_FEATURES: SoftwareFeature[] = [
  { 
    title: "Differential Kinematics", 
    description: "Custom control algorithm that translates desired (X, Y, θ) velocities into independent motor RPMs for simultaneous drive and steering.",
    icon: "Cpu"
  },
  { 
    title: "PID Loop Tuning", 
    description: "High-frequency feedback loop (1kHz) for precise position control and torque compensation under varying loads.",
    icon: "Activity"
  },
  { 
    title: "CAN Bus Communication", 
    description: "Robust 1Mbps communication protocol between the central controller and motor drivers for low-latency command execution.",
    icon: "Network"
  }
];
