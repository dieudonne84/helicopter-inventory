'use client';

import { useState } from 'react';
import { Package, AlertTriangle, History } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { IncomingOrders } from '@/components/operations/IncomingOrders';
import { DueReplacement } from '@/components/operations/DueReplacement';
import { AuditLog } from '@/components/operations/AuditLog';

const subTabs = [
  { id: 'orders', label: 'Incoming Orders', icon: Package },
  { id: 'due', label: 'Due for Replacement', icon: AlertTriangle },
  { id: 'audit', label: 'Audit Log', icon: History },
];

export default function OperationsPage() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <AppShell>
      <div className="animate-fade-in">
        {/* Sub-tabs (pill variant) */}
        <div className="flex gap-1 mb-6">
          {subTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative text-xs font-medium flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors
                  ${isActive
                    ? 'bg-[var(--theme-bg-hover)] text-[var(--theme-text-primary)]'
                    : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-hover)]'
                  }
                `}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'orders' && <IncomingOrders />}
        {activeTab === 'due' && <DueReplacement />}
        {activeTab === 'audit' && <AuditLog />}
      </div>
    </AppShell>
  );
}
