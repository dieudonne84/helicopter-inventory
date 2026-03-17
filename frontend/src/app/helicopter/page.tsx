'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { helicopters } from '@/data/helicopters';
import { HelicopterSVG } from '@/components/helicopter/HelicopterSVG';
import { SystemPanel } from '@/components/helicopter/SystemPanel';
import { PartCategory } from '@/types';

export default function HelicopterPage() {
  const [selectedReg, setSelectedReg] = useState(helicopters[0].registration);
  const [selectedZone, setSelectedZone] = useState<PartCategory | null>(null);

  const heli = helicopters.find((h) => h.registration === selectedReg)!;

  return (
    <AppShell>
      <div className="animate-fade-in">
        {/* Helicopter selector */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative">
            <select
              value={selectedReg}
              onChange={(e) => { setSelectedReg(e.target.value); setSelectedZone(null); }}
              className="input-base text-sm pr-8 w-64 appearance-none"
            >
              {helicopters.map((h) => (
                <option key={h.registration} value={h.registration}>
                  {h.registration} — {h.manufacturer} {h.type}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--theme-text-muted)] pointer-events-none" />
          </div>
          <div className="text-xs text-[var(--theme-text-muted)] space-x-4">
            <span>Location: <span className="text-[var(--theme-text-secondary)]">{heli.location}</span></span>
            <span>Hours: <span className="font-mono text-[var(--theme-text-secondary)]">{heli.totalHours.toLocaleString()}</span></span>
            <span>Last inspection: <span className="text-[var(--theme-text-secondary)]">{heli.lastInspection}</span></span>
          </div>
        </div>

        {/* SVG + Panel */}
        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <HelicopterSVG
              helicopterReg={selectedReg}
              selectedZone={selectedZone}
              onZoneClick={(zone) => setSelectedZone(selectedZone === zone ? null : zone)}
            />
            <p className="text-[10px] text-[var(--theme-text-muted)] mt-2 text-center">
              Click a system zone to view parts detail. Colors indicate worst-part health in each system.
            </p>
          </div>

          {selectedZone && (
            <SystemPanel
              category={selectedZone}
              helicopterReg={selectedReg}
              onClose={() => setSelectedZone(null)}
            />
          )}
        </div>
      </div>
    </AppShell>
  );
}
