'use client';

import { auditLog } from '@/data/auditLog';
import { getStatusBadge } from '@/lib/utils';

const actionColors: Record<string, { bg: string; text: string }> = {
  Installation: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
  Removal: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
  Replacement: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  Inspection: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  Overhaul: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
};

export function AuditLog() {
  return (
    <div className="rounded-xl border overflow-auto" style={{ borderColor: 'var(--theme-border-solid)' }}>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b" style={{ borderColor: 'var(--theme-border-solid)', backgroundColor: 'var(--theme-bg-surface)' }}>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Date / Time</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Action</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Part</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Helicopter</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Technician</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Notes</th>
          </tr>
        </thead>
        <tbody>
          {auditLog.map((entry) => {
            const color = actionColors[entry.action] ?? { bg: 'bg-slate-500/20', text: 'text-slate-400' };
            const date = new Date(entry.timestamp);
            return (
              <tr key={entry.id} className="border-b transition-colors hover:bg-[var(--theme-table-row-hover)]" style={{ borderColor: 'var(--theme-border)' }}>
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="font-mono text-[var(--theme-text-primary)]">{date.toLocaleDateString('de-CH')}</div>
                  <div className="text-[var(--theme-text-muted)]">{date.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })}</div>
                </td>
                <td className="px-3 py-2">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${color.bg} ${color.text}`}>
                    {entry.action}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <div className="font-mono font-semibold">{entry.partNumber}</div>
                  <div className="text-[var(--theme-text-muted)]">{entry.description}</div>
                </td>
                <td className="px-3 py-2 font-mono">{entry.helicopterReg}</td>
                <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{entry.technician}</td>
                <td className="px-3 py-2 text-[var(--theme-text-muted)] max-w-[250px] truncate">{entry.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
