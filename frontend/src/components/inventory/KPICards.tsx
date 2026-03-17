'use client';

import { Package, AlertTriangle, DollarSign, Plane } from 'lucide-react';
import { parts } from '@/data/parts';
import { helicopters } from '@/data/helicopters';
import { formatCurrency } from '@/lib/utils';

export function KPICards() {
  const totalParts = parts.length;
  const dueForReplacement = parts.filter((p) => p.remainingLife <= 30).length;
  const fleetValue = parts.reduce((sum, p) => sum + p.costCHF, 0);
  const activeHelicopters = helicopters.length;

  const cards = [
    {
      label: 'Total Parts',
      value: totalParts.toString(),
      icon: Package,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
    },
    {
      label: 'Due for Replacement',
      value: dueForReplacement.toString(),
      icon: AlertTriangle,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
    {
      label: 'Fleet Parts Value',
      value: formatCurrency(fleetValue),
      icon: DollarSign,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
    {
      label: 'Active Helicopters',
      value: activeHelicopters.toString(),
      icon: Plane,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="card flex items-center gap-4">
            <div className={`p-3 rounded-lg ${card.bg}`}>
              <Icon className={`h-5 w-5 ${card.color}`} />
            </div>
            <div>
              <p className="text-xs text-[var(--theme-text-muted)] uppercase tracking-wider">{card.label}</p>
              <p className="text-xl font-bold font-mono">{card.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
