'use client';

import { useRouter } from 'next/navigation';
import { Disc3, LogOut } from 'lucide-react';

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('helitrex_auth');
    router.replace('/login');
  };

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b" style={{ borderColor: 'var(--theme-border-solid)', backgroundColor: 'var(--theme-bg-surface)' }}>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Disc3 className="h-7 w-7 text-cyan-400 animate-[spin_8s_linear_infinite]" />
        </div>
        <div>
          <h1 className="text-base font-bold tracking-wide text-white">
            Heli<span className="text-cyan-400">trex</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-widest text-slate-500">
          Powered by <span className="text-slate-400 font-semibold">Omnitrex</span>
        </span>
        <div className="h-8 w-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
          <span className="text-xs font-semibold text-cyan-400">JV</span>
        </div>
        <button
          onClick={handleLogout}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-[var(--theme-bg-hover)] transition-colors"
          title="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
