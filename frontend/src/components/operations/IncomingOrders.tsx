'use client';

import { orders } from '@/data/orders';
import { formatCurrency, getStatusBadge } from '@/lib/utils';

export function IncomingOrders() {
  return (
    <div className="rounded-xl border overflow-auto" style={{ borderColor: 'var(--theme-border-solid)' }}>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b" style={{ borderColor: 'var(--theme-border-solid)', backgroundColor: 'var(--theme-bg-surface)' }}>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Order ID</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Supplier</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Part / Description</th>
            <th className="px-3 py-2.5 text-right font-semibold text-[var(--theme-text-secondary)]">Qty</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Ordered</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Expected</th>
            <th className="px-3 py-2.5 text-left font-semibold text-[var(--theme-text-secondary)]">Status</th>
            <th className="px-3 py-2.5 text-right font-semibold text-[var(--theme-text-secondary)]">Cost</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const badge = getStatusBadge(order.status);
            return (
              <tr key={order.id} className="border-b transition-colors hover:bg-[var(--theme-table-row-hover)]" style={{ borderColor: 'var(--theme-border)' }}>
                <td className="px-3 py-2 font-mono font-semibold">{order.id}</td>
                <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{order.supplier}</td>
                <td className="px-3 py-2">
                  <div className="font-mono text-[var(--theme-text-primary)]">{order.partNumber}</div>
                  <div className="text-[var(--theme-text-muted)]">{order.description}</div>
                </td>
                <td className="px-3 py-2 text-right font-mono">{order.quantity}</td>
                <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{order.orderDate}</td>
                <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{order.expectedDate}</td>
                <td className="px-3 py-2">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${badge.bg} ${badge.text}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-3 py-2 text-right font-mono">{formatCurrency(order.costCHF)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
