'use client';

import { X } from 'lucide-react';
import { PartCategory } from '@/types';
import { parts } from '@/data/parts';
import { formatCurrency, formatHours, getHealthColor, getStatusBadge } from '@/lib/utils';

interface SystemPanelProps {
  category: PartCategory;
  helicopterReg: string;
  onClose: () => void;
}

export function SystemPanel({ category, helicopterReg, onClose }: SystemPanelProps) {
  const systemParts = parts.filter(
    (p) => p.category === category && (p.helicopterReg === helicopterReg || p.helicopterReg === null)
  );

  return (
    <div className="w-96 shrink-0 card animate-slide-in-right overflow-auto max-h-[calc(100vh-200px)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-sm">{category}</h3>
          <p className="text-xs text-[var(--theme-text-muted)]">{helicopterReg} — {systemParts.length} parts</p>
        </div>
        <button onClick={onClose} className="p-1 rounded hover:bg-[var(--theme-bg-hover)] transition-colors">
          <X className="h-4 w-4 text-[var(--theme-text-muted)]" />
        </button>
      </div>

      <div className="space-y-3">
        {systemParts.map((part) => {
          const health = getHealthColor(part.remainingLife);
          const badge = getStatusBadge(part.status);
          return (
            <div
              key={part.id}
              className="p-3 rounded-lg border transition-colors"
              style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg)' }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-mono text-xs font-semibold">{part.partNumber}</p>
                  <p className="text-[11px] text-[var(--theme-text-secondary)] mt-0.5">{part.description}</p>
                </div>
                <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold ${badge.bg} ${badge.text}`}>
                  {part.status}
                </span>
              </div>

              {/* Mini health bar */}
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex-1 h-1.5 rounded-full bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${part.remainingLife}%`, backgroundColor: health.stroke }}
                  />
                </div>
                <span className={`text-[10px] font-mono font-semibold ${health.text}`}>{part.remainingLife}%</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[10px] text-[var(--theme-text-muted)]">
                <div>TSN <span className="font-mono text-[var(--theme-text-secondary)]">{formatHours(part.tsn)}</span></div>
                <div>TSO <span className="font-mono text-[var(--theme-text-secondary)]">{formatHours(part.tso)}</span></div>
                <div>Cost <span className="font-mono text-[var(--theme-text-secondary)]">{formatCurrency(part.costCHF)}</span></div>
              </div>
            </div>
          );
        })}

        {systemParts.length === 0 && (
          <p className="text-xs text-[var(--theme-text-muted)] text-center py-4">No parts tracked for this system.</p>
        )}
      </div>
    </div>
  );
}
