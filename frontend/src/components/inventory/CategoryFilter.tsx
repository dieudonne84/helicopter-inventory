'use client';

import { PartCategory } from '@/types';
import { parts } from '@/data/parts';
import {
  Box, RotateCcw, Disc3, Flame, Cog, Radio,
  Joystick, Droplets, Zap, CircleDot,
} from 'lucide-react';

const categoryIcons: Record<PartCategory, React.ComponentType<{ className?: string }>> = {
  'Airframe': Box,
  'Main Rotor': RotateCcw,
  'Tail Rotor': Disc3,
  'Powerplant': Flame,
  'Transmission': Cog,
  'Avionics': Radio,
  'Flight Controls': Joystick,
  'Hydraulic': Droplets,
  'Electrical': Zap,
  'Landing Gear': CircleDot,
};

const categories: PartCategory[] = [
  'Airframe', 'Main Rotor', 'Tail Rotor', 'Powerplant', 'Transmission',
  'Avionics', 'Flight Controls', 'Hydraulic', 'Electrical', 'Landing Gear',
];

interface CategoryFilterProps {
  selected: PartCategory | null;
  onSelect: (category: PartCategory | null) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="w-56 shrink-0 space-y-1">
      <button
        onClick={() => onSelect(null)}
        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
          selected === null
            ? 'bg-cyan-500/15 text-cyan-400'
            : 'text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg-hover)]'
        }`}
      >
        All Categories ({parts.length})
      </button>
      {categories.map((cat) => {
        const Icon = categoryIcons[cat];
        const count = parts.filter((p) => p.category === cat).length;
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(isActive ? null : cat)}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 ${
              isActive
                ? 'bg-cyan-500/15 text-cyan-400'
                : 'text-[var(--theme-text-secondary)] hover:bg-[var(--theme-bg-hover)]'
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="flex-1">{cat}</span>
            <span className="text-[var(--theme-text-muted)]">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
