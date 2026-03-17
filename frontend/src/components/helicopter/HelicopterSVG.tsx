'use client';

import { useMemo } from 'react';
import { PartCategory } from '@/types';
import { parts } from '@/data/parts';
import { getHealthColor } from '@/lib/utils';

interface HelicopterSVGProps {
  helicopterReg: string;
  selectedZone: PartCategory | null;
  onZoneClick: (zone: PartCategory) => void;
}

interface Zone {
  category: PartCategory;
  path: string;
  labelX: number;
  labelY: number;
}

// Clickable zones over the helicopter schematic
const zones: Zone[] = [
  {
    category: 'Airframe',
    path: 'M 200,180 Q 250,140 380,130 L 500,135 L 520,180 L 520,260 L 500,290 Q 350,300 200,270 Z',
    labelX: 360, labelY: 215,
  },
  {
    category: 'Main Rotor',
    path: 'M 100,80 L 340,55 L 380,75 L 380,115 L 340,120 L 100,105 Z',
    labelX: 240, labelY: 92,
  },
  {
    category: 'Tail Rotor',
    path: 'M 680,120 L 720,70 L 760,70 L 760,140 L 720,140 Z',
    labelX: 720, labelY: 105,
  },
  {
    category: 'Powerplant',
    path: 'M 280,130 Q 320,110 400,105 L 440,110 L 440,145 L 400,150 L 280,155 Z',
    labelX: 360, labelY: 132,
  },
  {
    category: 'Transmission',
    path: 'M 330,105 L 380,95 L 410,100 L 410,130 L 380,135 L 330,130 Z',
    labelX: 370, labelY: 118,
  },
  {
    category: 'Avionics',
    path: 'M 200,180 L 260,170 L 280,180 L 280,230 L 260,240 L 200,230 Z',
    labelX: 240, labelY: 208,
  },
  {
    category: 'Flight Controls',
    path: 'M 260,170 L 330,155 L 360,160 L 360,200 L 330,210 L 260,220 Z',
    labelX: 310, labelY: 188,
  },
  {
    category: 'Hydraulic',
    path: 'M 370,160 L 440,155 L 470,165 L 470,220 L 440,230 L 370,225 Z',
    labelX: 420, labelY: 195,
  },
  {
    category: 'Electrical',
    path: 'M 440,155 L 510,150 L 530,165 L 530,225 L 510,235 L 440,230 Z',
    labelX: 485, labelY: 195,
  },
  {
    category: 'Landing Gear',
    path: 'M 250,290 L 310,290 L 330,340 L 310,360 L 250,360 L 230,340 Z',
    labelX: 280, labelY: 328,
  },
];

export function HelicopterSVG({ helicopterReg, selectedZone, onZoneClick }: HelicopterSVGProps) {
  // Compute worst health per zone for this helicopter
  const zoneHealth = useMemo(() => {
    const map: Record<string, number> = {};
    for (const zone of zones) {
      const categoryParts = parts.filter(
        (p) => p.category === zone.category && (p.helicopterReg === helicopterReg || p.helicopterReg === null)
      );
      if (categoryParts.length === 0) {
        map[zone.category] = 100;
      } else {
        map[zone.category] = Math.min(...categoryParts.map((p) => p.remainingLife));
      }
    }
    return map;
  }, [helicopterReg]);

  return (
    <svg viewBox="0 0 900 420" className="w-full max-w-4xl mx-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.1))' }}>
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(51,65,85,0.2)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="900" height="420" fill="url(#grid)" rx="12" />

      {/* Helicopter outline — stylized utility helicopter side profile */}
      <g id="helicopter-outline" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5">
        {/* Fuselage */}
        <path d="M 180,200 Q 160,170 200,145 Q 260,120 350,115 L 440,112 Q 500,115 530,140 L 545,170 L 550,240 Q 545,275 520,290 Q 480,310 400,315 Q 300,315 240,300 Q 200,285 185,260 Z" />
        {/* Windshield */}
        <path d="M 200,180 Q 210,160 240,150 L 270,148 L 275,195 L 220,210 Z" strokeWidth="1" stroke="rgba(34,211,238,0.4)" />
        {/* Tail boom */}
        <path d="M 540,185 L 700,145 L 730,130 L 740,125 L 740,160 L 730,165 L 700,175 L 540,220 Z" />
        {/* Tail fin */}
        <path d="M 720,130 L 740,70 L 770,65 L 770,130 Z" />
        {/* Tail rotor disc */}
        <ellipse cx="770" cy="67" rx="8" ry="35" stroke="rgba(34,211,238,0.25)" strokeWidth="1" strokeDasharray="3,3" />
        {/* Main rotor mast */}
        <line x1="360" y1="115" x2="360" y2="75" strokeWidth="2" />
        {/* Main rotor disc */}
        <line x1="80" y1="72" x2="640" y2="72" strokeWidth="1.5" strokeDasharray="8,4" stroke="rgba(34,211,238,0.25)" />
        <ellipse cx="360" cy="72" rx="280" ry="8" stroke="rgba(34,211,238,0.15)" strokeWidth="1" />
        {/* Landing skids */}
        <path d="M 220,310 L 220,350 L 200,355 L 380,355 L 380,310" strokeWidth="1.5" />
        <path d="M 400,310 L 400,350 L 380,355 L 520,355 L 520,310" strokeWidth="1.5" />
        {/* Engine exhaust */}
        <path d="M 430,112 L 450,95 L 470,95 L 460,112" strokeWidth="1" stroke="rgba(34,211,238,0.2)" />
        {/* Door line */}
        <line x1="310" y1="155" x2="310" y2="295" strokeWidth="0.5" strokeDasharray="4,4" stroke="rgba(34,211,238,0.15)" />
      </g>

      {/* Clickable zones */}
      {zones.map((zone) => {
        const health = zoneHealth[zone.category] ?? 100;
        const colors = getHealthColor(health);
        const isSelected = selectedZone === zone.category;

        return (
          <g
            key={zone.category}
            onClick={() => onZoneClick(zone.category)}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <path
              d={zone.path}
              fill={colors.fill}
              stroke={colors.stroke}
              strokeWidth={isSelected ? 2 : 1}
              opacity={isSelected ? 0.4 : 0.2}
              className="transition-all duration-200 hover:opacity-30"
            />
            <text
              x={zone.labelX}
              y={zone.labelY}
              textAnchor="middle"
              className="text-[8px] font-semibold fill-slate-400 pointer-events-none select-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {zone.category}
            </text>
          </g>
        );
      })}

      {/* Title */}
      <text x="20" y="400" className="text-[10px] fill-slate-600" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        SCHEMATIC — {helicopterReg}
      </text>
    </svg>
  );
}
