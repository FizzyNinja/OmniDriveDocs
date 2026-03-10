export interface SpecItem {
  value: string;
  label: string;
  unit?: string;
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

export interface BOMItem {
  part: string;
  quantity: number;
  material: string;
  source: string;
}

export interface SoftwareFeature {
  title: string;
  description: string;
  icon: string;
}
