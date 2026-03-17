'use client';

import { parts } from '@/data/parts';
import { formatCurrency, formatHours, getHealthColor, getStatusBadge } from '@/lib/utils';

export function DueReplacement() {
  const dueParts = parts
    .filter((p) => p.remainingLife <= 30)
    .sort((a, b) => a.remainingLife - b.remainingLife);

  return (
    <div className="rounded-xl border overflow-auto" style={{ borderColor: 'var(--theme-border-solid)' }}>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b" style={{ borderColor: 'var(--theme-border-solid)', backgroundColor: 'var(--theme-bg-surface)' }}>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Part / Serial</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Description</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Helicopter</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Category</th>
            <th className="px-3 py-2.5 text-right font-semibold text-[var(--theme-text-secondary)]">Life %</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Status</th>
            <th className="px-3 py-2.5 text-right font-semibold text-[var(--theme-text-secondary)]">Replacement Cost</th>
          </tr>
        </thead>
        <tbody>
          {dueParts.map((part) => {
            const health = getHealthColor(part.remainingLife);
            const badge = getStatusBadge(part.status);
            const isUrgent = part.remainingLife <= 10;
            return (
              <tr
                key={part.id}
                className={`border-b transition-colors hover:bg-[var(--theme-table-row-hover)] ${isUrgent ? 'bg-red-500/5' : ''}`}
                style={{ borderColor: 'var(--theme-border)' }}
              >
                <td className="px-3 py-2">
                  <div className="font-mono font-semibold">{part.partNumber}</div>
                  <div className="text-[var(--theme-text-muted)]">{part.serialNumber}</div>
                </td>
                <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{part.description}</td>
                <td className="px-3 py-2 font-mono">{part.helicopterReg ?? 'Storage'}</td>
                <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{part.category}</td>
                <td className="px-3 py-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className={`font-mono font-semibold ${health.text}`}>{part.remainingLife}%</span>
                    <div className="w-12 h-1.5 rounded-full bg-slate-700 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${part.remainingLife}%`, backgroundColor: health.stroke }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${badge.bg} ${badge.text}`}>
                    {part.status}
                  </span>
                </td>
                <td className="px-3 py-2 text-right font-mono">{formatCurrency(part.costCHF)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="px-3 py-2 text-[10px] text-[var(--theme-text-muted)] border-t" style={{ borderColor: 'var(--theme-border)' }}>
        {dueParts.length} parts due — Total replacement cost: {formatCurrency(dueParts.reduce((s, p) => s + p.costCHF, 0))}
      </div>
    </div>
  );
}
