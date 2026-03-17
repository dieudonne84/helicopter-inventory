import { Part } from '@/types';

export const parts: Part[] = [
  // === AIRFRAME ===
  { id: 'P001', partNumber: 'H145-AF-SKIN', serialNumber: 'AFS-10221', description: 'Fuselage Skin Panel (Lower)', category: 'Airframe', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 4280, tbo: 12000, remainingLife: 64, status: 'Serviceable', costCHF: 18500 },
  { id: 'P002', partNumber: 'EC135-AF-FRAME', serialNumber: 'AFF-30412', description: 'Cabin Frame Assembly', category: 'Airframe', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 6120, tbo: 15000, remainingLife: 59, status: 'Serviceable', costCHF: 42000 },
  { id: 'P003', partNumber: 'BELL-AF-TAIL', serialNumber: 'AFT-20198', description: 'Tail Boom Assembly', category: 'Airframe', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 10000, remainingLife: 71, status: 'Serviceable', costCHF: 35000 },
  { id: 'P004', partNumber: 'AW109-AF-COWL', serialNumber: 'AFC-40087', description: 'Engine Cowling (Left)', category: 'Airframe', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 3200, tbo: 8000, remainingLife: 60, status: 'Serviceable', costCHF: 8900 },
  { id: 'P005', partNumber: 'H145-AF-DOOR', serialNumber: 'AFD-10055', description: 'Sliding Cabin Door', category: 'Airframe', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 2100, tbo: 6000, remainingLife: 65, status: 'Serviceable', costCHF: 12000 },

  // === MAIN ROTOR ===
  { id: 'P006', partNumber: 'H145-MRB-001', serialNumber: 'MRB-10334', description: 'Main Rotor Blade (1 of 4)', category: 'Main Rotor', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 3200, tso: 1800, tbo: 5000, remainingLife: 64, status: 'Serviceable', costCHF: 92000 },
  { id: 'P007', partNumber: 'EC135-MRB-004', serialNumber: 'MRB-30119', description: 'Main Rotor Blade Assembly', category: 'Main Rotor', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 4800, tso: 4200, tbo: 5000, remainingLife: 16, status: 'Due Soon', costCHF: 185000 },
  { id: 'P008', partNumber: 'H145-MRH-001', serialNumber: 'MRH-10042', description: 'Main Rotor Head / Hub', category: 'Main Rotor', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 2100, tbo: 6000, remainingLife: 65, status: 'Serviceable', costCHF: 245000 },
  { id: 'P009', partNumber: 'BELL-MRB-429', serialNumber: 'MRB-20067', description: 'Main Rotor Blade (Composite)', category: 'Main Rotor', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 4000, remainingLife: 26, status: 'Due Soon', costCHF: 110000 },
  { id: 'P010', partNumber: 'AW109-MRS-SP', serialNumber: 'MRS-40015', description: 'Main Rotor Swashplate', category: 'Main Rotor', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 1800, tbo: 4000, remainingLife: 55, status: 'Serviceable', costCHF: 78000 },

  // === TAIL ROTOR ===
  { id: 'P011', partNumber: 'H145-TRB-002', serialNumber: 'TRB-10221', description: 'Tail Rotor Blade (Fenestron)', category: 'Tail Rotor', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 2800, tbo: 3500, remainingLife: 20, status: 'Due Soon', costCHF: 32000 },
  { id: 'P012', partNumber: 'EC135-TRB-002', serialNumber: 'TRB-30098', description: 'Tail Rotor Blade Set', category: 'Tail Rotor', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 800, tbo: 3000, remainingLife: 73, status: 'Serviceable', costCHF: 28000 },
  { id: 'P013', partNumber: 'AW109-TRG-012', serialNumber: 'TRG-40033', description: 'Tail Rotor Gearbox', category: 'Tail Rotor', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 4900, tbo: 5000, remainingLife: 2, status: 'Critical', costCHF: 67000 },
  { id: 'P014', partNumber: 'BELL-TRP-429', serialNumber: 'TRP-20044', description: 'Tail Rotor Pitch Links', category: 'Tail Rotor', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 4000, remainingLife: 26, status: 'Due Soon', costCHF: 5600 },
  { id: 'P015', partNumber: 'H145-TRD-001', serialNumber: 'TRD-10099', description: 'Tail Rotor Driveshaft', category: 'Tail Rotor', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 1500, tbo: 5000, remainingLife: 70, status: 'Serviceable', costCHF: 14500 },

  // === POWERPLANT ===
  { id: 'P016', partNumber: 'H145-ENG-001', serialNumber: 'ENG-SAF-88421', description: 'Arriel 2E Turboshaft (Left)', category: 'Powerplant', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 1280, tbo: 3000, remainingLife: 57, status: 'Serviceable', costCHF: 850000 },
  { id: 'P017', partNumber: 'H145-ENG-002', serialNumber: 'ENG-SAF-88422', description: 'Arriel 2E Turboshaft (Right)', category: 'Powerplant', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 2850, tbo: 3000, remainingLife: 5, status: 'Critical', costCHF: 850000 },
  { id: 'P018', partNumber: 'SAFRAN-ARR-2C2', serialNumber: 'ENG-SAF-72105', description: 'Arriel 2C2 Turboshaft', category: 'Powerplant', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 2100, tbo: 3000, remainingLife: 30, status: 'Due Soon', costCHF: 780000 },
  { id: 'P019', partNumber: 'PW-207D1', serialNumber: 'ENG-PW-55012', description: 'PW207D1 Turboshaft', category: 'Powerplant', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 3500, remainingLife: 16, status: 'Due Soon', costCHF: 720000 },
  { id: 'P020', partNumber: 'AW109-ENG-002', serialNumber: 'ENG-PW-44098', description: 'PW206C Turboshaft (Right)', category: 'Powerplant', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 5430, tbo: 3000, remainingLife: 0, status: 'Critical', costCHF: 690000 },

  // === TRANSMISSION ===
  { id: 'P021', partNumber: 'MGB-ZF-340', serialNumber: 'MGB-10078', description: 'Main Gearbox Assembly', category: 'Transmission', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 1280, tbo: 3500, remainingLife: 63, status: 'Serviceable', costCHF: 320000 },
  { id: 'P022', partNumber: 'IGB-EC135', serialNumber: 'IGB-30044', description: 'Intermediate Gearbox', category: 'Transmission', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 4120, tbo: 5000, remainingLife: 18, status: 'Due Soon', costCHF: 85000 },
  { id: 'P023', partNumber: 'MGB-BEARING-SET', serialNumber: 'MGB-BRG-20011', description: 'Main Gearbox Bearing Kit', category: 'Transmission', helicopterReg: null, location: 'Zurich Hangar', tsn: 0, tso: 0, tbo: 3000, remainingLife: 100, status: 'Serviceable', costCHF: 95000 },
  { id: 'P024', partNumber: 'AW109-XMSN-CHIP', serialNumber: 'XCH-40019', description: 'Transmission Chip Detector', category: 'Transmission', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 200, tbo: 2000, remainingLife: 90, status: 'Serviceable', costCHF: 3200 },
  { id: 'P025', partNumber: 'BELL-TGB-429', serialNumber: 'TGB-20033', description: 'Tail Gearbox', category: 'Transmission', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 4000, remainingLife: 26, status: 'Due Soon', costCHF: 72000 },

  // === AVIONICS ===
  { id: 'P026', partNumber: 'PRIMUS-EPIC-2', serialNumber: 'AVN-HW-88102', description: 'EFIS Display Unit (PFD)', category: 'Avionics', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 1500, tbo: 8000, remainingLife: 81, status: 'Serviceable', costCHF: 42000 },
  { id: 'P027', partNumber: 'EC135-AVN-FMS', serialNumber: 'AVN-HW-72033', description: 'Flight Management System', category: 'Avionics', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 6120, tbo: 10000, remainingLife: 39, status: 'Serviceable', costCHF: 65000 },
  { id: 'P028', partNumber: 'GARMIN-GTN750', serialNumber: 'AVN-GA-44521', description: 'GPS/Nav/Comm Unit', category: 'Avionics', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 8000, remainingLife: 63, status: 'Serviceable', costCHF: 18500 },
  { id: 'P029', partNumber: 'LIDAR-ALT-300', serialNumber: 'AVN-HW-55789', description: 'Radar Altimeter', category: 'Avionics', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 200, tso: 200, tbo: 6000, remainingLife: 97, status: 'Serviceable', costCHF: 15800 },
  { id: 'P030', partNumber: 'AW109-AVN-AP', serialNumber: 'AVN-CO-40098', description: 'Autopilot Computer', category: 'Avionics', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 3400, tbo: 5000, remainingLife: 32, status: 'Serviceable', costCHF: 88000 },

  // === FLIGHT CONTROLS ===
  { id: 'P031', partNumber: 'CTL-FBW-220', serialNumber: 'FC-10445', description: 'Fly-By-Wire Actuator (Collective)', category: 'Flight Controls', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 500, tso: 500, tbo: 4000, remainingLife: 88, status: 'Serviceable', costCHF: 28500 },
  { id: 'P032', partNumber: 'EC135-FC-MIXER', serialNumber: 'FC-30221', description: 'Control Mixing Unit', category: 'Flight Controls', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 3600, tbo: 4000, remainingLife: 10, status: 'Critical', costCHF: 34000 },
  { id: 'P033', partNumber: 'AW109-FC-SERVO', serialNumber: 'FC-40109', description: 'Servo Actuator (Cyclic)', category: 'Flight Controls', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 2200, tbo: 3000, remainingLife: 27, status: 'Due Soon', costCHF: 22000 },
  { id: 'P034', partNumber: 'BELL-FC-YOKE', serialNumber: 'FC-20078', description: 'Cyclic Control Yoke', category: 'Flight Controls', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 6000, remainingLife: 51, status: 'Serviceable', costCHF: 9800 },
  { id: 'P035', partNumber: 'H145-FC-TRIM', serialNumber: 'FC-10332', description: 'Force Trim Actuator', category: 'Flight Controls', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 2800, tbo: 3500, remainingLife: 20, status: 'Due Soon', costCHF: 11200 },

  // === HYDRAULIC ===
  { id: 'P036', partNumber: 'HYD-PUMP-440', serialNumber: 'HYD-10087', description: 'Hydraulic Pump Assembly', category: 'Hydraulic', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 2000, tbo: 3000, remainingLife: 33, status: 'Serviceable', costCHF: 18500 },
  { id: 'P037', partNumber: 'HYD-RES-EC135', serialNumber: 'HYD-30054', description: 'Hydraulic Reservoir', category: 'Hydraulic', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 3500, tbo: 5000, remainingLife: 30, status: 'Due Soon', costCHF: 4200 },
  { id: 'P038', partNumber: 'HYD-ACCUM-429', serialNumber: 'HYD-20019', description: 'Hydraulic Accumulator', category: 'Hydraulic', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 4000, remainingLife: 26, status: 'Due Soon', costCHF: 6800 },
  { id: 'P039', partNumber: 'HYD-VALVE-AW', serialNumber: 'HYD-40023', description: 'Servo Valve Block', category: 'Hydraulic', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 1200, tbo: 2500, remainingLife: 52, status: 'Serviceable', costCHF: 12300 },

  // === ELECTRICAL ===
  { id: 'P040', partNumber: 'GEN-STARTER-V2', serialNumber: 'ELC-10145', description: 'Starter-Generator Unit', category: 'Electrical', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 1800, tbo: 4000, remainingLife: 55, status: 'Serviceable', costCHF: 34000 },
  { id: 'P041', partNumber: 'ELEC-BUS-TIE', serialNumber: 'ELC-10288', description: 'Bus Tie Contactor', category: 'Electrical', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 300, tso: 300, tbo: 5000, remainingLife: 94, status: 'Serviceable', costCHF: 2800 },
  { id: 'P042', partNumber: 'BAT-SAFT-28V', serialNumber: 'ELC-30099', description: 'Main Battery (28V NiCd)', category: 'Electrical', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 1200, tso: 1200, tbo: 1500, remainingLife: 20, status: 'Due Soon', costCHF: 3400 },
  { id: 'P043', partNumber: 'ELEC-INV-429', serialNumber: 'ELC-20056', description: 'Static Inverter (115V AC)', category: 'Electrical', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 5000, remainingLife: 41, status: 'Serviceable', costCHF: 8900 },
  { id: 'P044', partNumber: 'AW109-ELC-GCU', serialNumber: 'ELC-40012', description: 'Generator Control Unit', category: 'Electrical', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 4900, tbo: 5000, remainingLife: 2, status: 'Critical', costCHF: 15600 },
  { id: 'P045', partNumber: 'ELEC-LIGHT-NAV', serialNumber: 'ELC-10401', description: 'Navigation Light Assembly', category: 'Electrical', helicopterReg: null, location: 'Zurich Hangar', tsn: 0, tso: 0, tbo: 3000, remainingLife: 100, status: 'Serviceable', costCHF: 520 },

  // === LANDING GEAR ===
  { id: 'P046', partNumber: 'H145-LG-STRUT', serialNumber: 'LG-10078', description: 'Landing Gear Oleo Strut (Left)', category: 'Landing Gear', helicopterReg: 'HB-ZRZ', location: 'Zurich Hangar', tsn: 4280, tso: 2000, tbo: 5000, remainingLife: 60, status: 'Serviceable', costCHF: 12400 },
  { id: 'P047', partNumber: 'EC135-LG-SKID', serialNumber: 'LG-30041', description: 'Skid Landing Gear Assembly', category: 'Landing Gear', helicopterReg: 'HB-XMF', location: 'Bern Facility', tsn: 6120, tso: 4500, tbo: 6000, remainingLife: 25, status: 'Due Soon', costCHF: 22000 },
  { id: 'P048', partNumber: 'BELL-LG-DAMP', serialNumber: 'LG-20055', description: 'Landing Gear Damper', category: 'Landing Gear', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 400, tso: 400, tbo: 3000, remainingLife: 87, status: 'Serviceable', costCHF: 4800 },
  { id: 'P049', partNumber: 'BELL-429-STRUT', serialNumber: 'LG-20088', description: 'Oleo Strut (Right)', category: 'Landing Gear', helicopterReg: 'HB-ZGP', location: 'Zurich Hangar', tsn: 2950, tso: 2950, tbo: 5000, remainingLife: 41, status: 'Serviceable', costCHF: 11800 },
  { id: 'P050', partNumber: 'AW109-LG-RET', serialNumber: 'LG-40008', description: 'Retractable Gear Actuator', category: 'Landing Gear', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 3200, tbo: 4000, remainingLife: 20, status: 'Due Soon', costCHF: 38000 },
  { id: 'P051', partNumber: 'AW109-LG-TIRE', serialNumber: 'LG-40109', description: 'Main Wheel Tire Assembly', category: 'Landing Gear', helicopterReg: 'HB-ZKN', location: 'Geneva Depot', tsn: 5430, tso: 800, tbo: 1000, remainingLife: 8, status: 'Critical', costCHF: 1200 },

  // === EXTRA PARTS (spares in storage) ===
  { id: 'P052', partNumber: 'HYD-FILTER-STD', serialNumber: 'HYD-SP-001', description: 'Hydraulic Filter Element', category: 'Hydraulic', helicopterReg: null, location: 'Zurich Hangar', tsn: 0, tso: 0, tbo: 500, remainingLife: 100, status: 'Serviceable', costCHF: 280 },
  { id: 'P053', partNumber: 'EC135-MRB-SPARE', serialNumber: 'MRB-30200', description: 'Main Rotor Blade (Spare)', category: 'Main Rotor', helicopterReg: null, location: 'Bern Facility', tsn: 0, tso: 0, tbo: 5000, remainingLife: 100, status: 'Serviceable', costCHF: 185000 },
  { id: 'P054', partNumber: 'BAT-SPARE-28V', serialNumber: 'ELC-SP-002', description: 'Spare Battery (28V NiCd)', category: 'Electrical', helicopterReg: null, location: 'Geneva Depot', tsn: 0, tso: 0, tbo: 1500, remainingLife: 100, status: 'Serviceable', costCHF: 3400 },
];
