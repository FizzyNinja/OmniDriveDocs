import { SpecItem, ToolItem, ProcessStep } from './types';

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