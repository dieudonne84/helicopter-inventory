'use client';

import { Header } from './Header';
import { Navigation } from './Navigation';
import { AuthGuard } from './AuthGuard';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AuthGuard>
  );
}
