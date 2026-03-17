export type PartCategory =
  | 'Airframe'
  | 'Main Rotor'
  | 'Tail Rotor'
  | 'Powerplant'
  | 'Transmission'
  | 'Avionics'
  | 'Flight Controls'
  | 'Hydraulic'
  | 'Electrical'
  | 'Landing Gear';

export type PartStatus = 'Serviceable' | 'Due Soon' | 'Critical';

export type LocationName = 'Zurich Hangar' | 'Bern Facility' | 'Geneva Depot';

export interface Part {
  id: string;
  partNumber: string;
  serialNumber: string;
  description: string;
  category: PartCategory;
  helicopterReg: string | null; // null = in storage
  location: LocationName;
  tsn: number;  // Time Since New (hours)
  tso: number;  // Time Since Overhaul (hours)
  tbo: number;  // Time Between Overhaul (hours)
  remainingLife: number; // 0-100 %
  status: PartStatus;
  costCHF: number;
}

export interface Helicopter {
  registration: string;
  type: string;
  manufacturer: string;
  location: LocationName;
  totalHours: number;
  lastInspection: string;
  imageColor: string;
}

export type OrderStatus = 'Ordered' | 'Shipped' | 'Delivered' | 'Delayed';

export interface IncomingOrder {
  id: string;
  supplier: string;
  partNumber: string;
  description: string;
  quantity: number;
  orderDate: string;
  expectedDate: string;
  status: OrderStatus;
  costCHF: number;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  action: 'Installation' | 'Removal' | 'Replacement' | 'Inspection' | 'Overhaul';
  partNumber: string;
  description: string;
  helicopterReg: string;
  technician: string;
  notes: string;
}
