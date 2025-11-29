export interface SpecItem {
  value: string;
  label: string;
  unit?: string;
}

export interface CalculationStep {
  label: string;
  formula: string;
  result: string;
  note?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
}

export interface ToolItem {
  name: string;
  category: 'software' | 'hardware' | 'material';
}

export enum GearType {
  STRAIGHT = 'Straight Cut',
  HELICAL = 'Helical',
}