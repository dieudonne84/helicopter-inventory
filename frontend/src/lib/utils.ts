export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatHours(hours: number): string {
  return new Intl.NumberFormat('de-CH').format(hours) + ' h';
}

export function getHealthColor(percent: number): {
  bg: string;
  text: string;
  fill: string;
  stroke: string;
} {
  if (percent > 30) {
    return {
      bg: 'bg-emerald-500/20',
      text: 'text-emerald-400',
      fill: 'rgba(16, 185, 129, 0.15)',
      stroke: '#10b981',
    };
  }
  if (percent > 10) {
    return {
      bg: 'bg-amber-500/20',
      text: 'text-amber-400',
      fill: 'rgba(245, 158, 11, 0.15)',
      stroke: '#f59e0b',
    };
  }
  return {
    bg: 'bg-red-500/20',
    text: 'text-red-400',
    fill: 'rgba(239, 68, 68, 0.15)',
    stroke: '#ef4444',
  };
}

export function getStatusBadge(status: string): { bg: string; text: string } {
  switch (status) {
    case 'Serviceable':
      return { bg: 'bg-emerald-500/20', text: 'text-emerald-400' };
    case 'Due Soon':
      return { bg: 'bg-amber-500/20', text: 'text-amber-400' };
    case 'Critical':
      return { bg: 'bg-red-500/20', text: 'text-red-400' };
    case 'Ordered':
      return { bg: 'bg-blue-500/20', text: 'text-blue-400' };
    case 'Shipped':
      return { bg: 'bg-cyan-500/20', text: 'text-cyan-400' };
    case 'Delivered':
      return { bg: 'bg-emerald-500/20', text: 'text-emerald-400' };
    case 'Delayed':
      return { bg: 'bg-red-500/20', text: 'text-red-400' };
    default:
      return { bg: 'bg-slate-500/20', text: 'text-slate-400' };
  }
}
