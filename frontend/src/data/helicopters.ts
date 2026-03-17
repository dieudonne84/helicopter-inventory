import { Helicopter, LocationName } from '@/types';

export const locations: LocationName[] = ['Zurich Hangar', 'Bern Facility', 'Geneva Depot'];

export const helicopters: Helicopter[] = [
  {
    registration: 'HB-ZRZ',
    type: 'H145',
    manufacturer: 'Airbus Helicopters',
    location: 'Zurich Hangar',
    totalHours: 4280,
    lastInspection: '2026-01-15',
    imageColor: '#38bdf8',
  },
  {
    registration: 'HB-XMF',
    type: 'EC135 T3',
    manufacturer: 'Eurocopter',
    location: 'Bern Facility',
    totalHours: 6120,
    lastInspection: '2025-11-20',
    imageColor: '#a78bfa',
  },
  {
    registration: 'HB-ZGP',
    type: '429',
    manufacturer: 'Bell',
    location: 'Zurich Hangar',
    totalHours: 2950,
    lastInspection: '2026-02-08',
    imageColor: '#34d399',
  },
  {
    registration: 'HB-ZKN',
    type: 'AW109 SP',
    manufacturer: 'Leonardo',
    location: 'Geneva Depot',
    totalHours: 5430,
    lastInspection: '2025-12-03',
    imageColor: '#fb923c',
  },
];
