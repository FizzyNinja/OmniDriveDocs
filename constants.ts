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

export const PROJECT_CONTEXT_PARAGRAPHS = [
  "Traditional holonomic drive systems, such as Mecanum or Omni-wheels, often suffer from reduced traction and lower torque efficiency because force vectors partially cancel out during diagonal movement. This project implements a fully steerable 'swerve' drive architecture to solve this, ensuring 100% of traction is applied in the desired direction of travel.",
  "However, unlike standard swerve modules that utilize one motor strictly for steering (azimuth) and one for driving, this differential design couples both motors to the output. By using a differential gear arrangement, both motors can contribute to propulsion simultaneously during straight-line motion. This results in a system with effectively double the drive torque of a comparable standard swerve module without increasing the motor count or weight."
];

export const DESIGN_CHALLENGES = [
  {
    title: "Dual-Function Power Coupling",
    desc: "The core innovation lies in the differential calculation. If Motor A and Motor B spin in the same direction, the wheel drives. If they spin in opposite directions, the wheel steers. Achieving this mechanically required a nested ring gear assembly where the steering action revolves around the drive axis without mechanical binding."
  },
  {
    title: "Structural Load Management",
    desc: "Supporting a 150lb robot on four modules means each module takes ~37.5lbs of static load, but dynamic shock loads can exceed 100lbs. The module utilizes a custom large-diameter thin-section bearing arrangement integrated directly into the aluminum housing to handle these axial and radial loads within a compact 4-inch footprint."
  },
  {
    title: "Precision Manufacturing",
    desc: "The backlash in a differential system is additive. If there is slop in the steering gear, it affects the drive accuracy, and vice versa. We had to hold tight tolerances (±0.002 inches) on the CNC-milled aluminum gear centers to ensure the mesh was tight enough to prevent backlash but loose enough to run efficiently without binding."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "CNC Programming & Machining",
    description: "Self-taught CNC programming and operation of the Tormach 440 PCNC mill using Fusion CAM. Critical input gears and pinions were machined from 6061 aluminum to handle peak torque loads at the motor shaft interface. The process involved complex soft-jaw fixturing to flip parts for secondary operations, maintaining concentricity to within 0.001 inches."
  },
  {
    title: "3D Printed Ring Gears",
    description: "The large internal ring gears were printed on the Markforged MarkTwo using PA12 nylon with continuous carbon fiber reinforcement. This approach circumvented the need for expensive 4-axis milling while providing an excellent strength-to-weight ratio. The nylon material offers inherent self-lubricating properties, which reduces maintenance needs in the enclosed assembly."
  },
  {
    title: "Waterjet Structural Components",
    description: "Two main aluminum mounting plates were fabricated using the Wazer Pro waterjet. These plates serve as the structural backbone, rigidly mounting the motors and supporting the internal gear train. Bearing pockets were post-processed with a reamer to ensure precise interference fits for the main support bearings."
  }
];

export const MATERIAL_DETAILS = {
  aluminum: "6061-T6 Aluminum was selected for the main structural plates and high-stress input pinions. Its high thermal conductivity allows the entire chassis to act as a heatsink for the motors, which is critical in a compact enclosed assembly.",
  nylon: "The large internal ring gears were printed in Onyx (Nylon + Chopped Carbon Fiber). This material offers a unique combination of slight compliance (to absorb shock loads) and low surface friction, which allows the gears to run without liquid lubrication—preventing grit attraction in dusty environments."
};

export const FUTURE_ROADMAP = [
  "Integration of absolute magnetic encoders for instant zeroing on startup.",
  "Transition from 3D printed ring gears to injection molded POM (Acetal) for mass production durability.",
  "Development of a custom PCB for on-module motor control to reduce wiring complexity.",
  "Implementation of active cooling channels within the aluminum baseplate."
];

export const CHART_DATA = [
  { name: '0 RPM', torque: 412, efficiency: 0 },
  { name: '1k RPM', torque: 380, efficiency: 72 },
  { name: '2k RPM', torque: 310, efficiency: 85 },
  { name: '2.3k RPM', torque: 205, efficiency: 78 },
  { name: '3k RPM', torque: 85, efficiency: 45 },
];