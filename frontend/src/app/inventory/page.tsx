'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { KPICards } from '@/components/inventory/KPICards';
import { CategoryFilter } from '@/components/inventory/CategoryFilter';
import { PartsTable } from '@/components/inventory/PartsTable';
import { PartCategory } from '@/types';

export default function InventoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<PartCategory | null>(null);

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        <KPICards />
        <div className="flex gap-6">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          <PartsTable categoryFilter={selectedCategory} />
        </div>
      </div>
    </AppShell>
  );
}
