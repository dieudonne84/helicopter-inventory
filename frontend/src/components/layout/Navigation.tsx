'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Package, Cpu, ClipboardList } from 'lucide-react';

const tabs = [
  { id: '/inventory', label: 'Inventory', icon: Package },
  { id: '/helicopter', label: 'Helicopter View', icon: Cpu },
  { id: '/operations', label: 'Operations', icon: ClipboardList },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="border-b" style={{ borderColor: 'var(--theme-border-solid)', backgroundColor: 'var(--theme-bg)' }}>
      <div className="flex px-6">
        {tabs.map((tab) => {
          const isActive = pathname === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => router.push(tab.id)}
              className={`
                relative text-[10px] font-bold uppercase tracking-widest flex items-center gap-2
                transition-all px-5 py-3
                ${isActive
                  ? 'text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-slate-500 hover:text-slate-300 border-b-2 border-transparent'
                }
              `}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
