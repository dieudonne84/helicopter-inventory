'use client';

import { useState, useMemo } from 'react';
import { Search, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Part, PartCategory } from '@/types';
import { parts } from '@/data/parts';
import { formatCurrency, formatHours, getStatusBadge, getHealthColor } from '@/lib/utils';

type SortKey = 'partNumber' | 'description' | 'category' | 'location' | 'tsn' | 'tso' | 'tbo' | 'remainingLife' | 'status' | 'costCHF';
type SortDir = 'asc' | 'desc';

interface PartsTableProps {
  categoryFilter: PartCategory | null;
}

export function PartsTable({ categoryFilter }: PartsTableProps) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('remainingLife');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const filtered = useMemo(() => {
    let result = parts;
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.partNumber.toLowerCase().includes(q) ||
          p.serialNumber.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          (p.helicopterReg && p.helicopterReg.toLowerCase().includes(q))
      );
    }
    result = [...result].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
      }
      const aStr = String(aVal ?? '');
      const bStr = String(bVal ?? '');
      return sortDir === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
    return result;
  }, [search, categoryFilter, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ArrowUpDown className="h-3 w-3 opacity-30" />;
    return sortDir === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />;
  }

  const columns: { key: SortKey; label: string; className?: string }[] = [
    { key: 'partNumber', label: 'Part / Serial' },
    { key: 'description', label: 'Description' },
    { key: 'category', label: 'Category' },
    { key: 'location', label: 'Location' },
    { key: 'tsn', label: 'TSN', className: 'text-right' },
    { key: 'tso', label: 'TSO', className: 'text-right' },
    { key: 'tbo', label: 'TBO', className: 'text-right' },
    { key: 'remainingLife', label: 'Life %', className: 'text-right' },
    { key: 'status', label: 'Status' },
    { key: 'costCHF', label: 'Cost', className: 'text-right' },
  ];

  return (
    <div className="flex-1 min-w-0">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--theme-text-muted)]" />
        <input
          type="text"
          placeholder="Search parts, serials, locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-base pl-10 text-sm"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border overflow-auto" style={{ borderColor: 'var(--theme-border-solid)' }}>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--theme-border-solid)', backgroundColor: 'var(--theme-bg-surface)' }}>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => toggleSort(col.key)}
                  className={`px-3 py-2.5 font-semibold text-[var(--theme-text-secondary)] cursor-pointer hover:text-[var(--theme-text-primary)] transition-colors whitespace-nowrap select-none ${col.className ?? 'text-left'}`}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    <SortIcon col={col.key} />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((part) => (
              <PartRow key={part.id} part={part} />
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-3 py-8 text-center text-[var(--theme-text-muted)]">
                  No parts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[10px] text-[var(--theme-text-muted)]">{filtered.length} parts</p>
    </div>
  );
}

function PartRow({ part }: { part: Part }) {
  const badge = getStatusBadge(part.status);
  const health = getHealthColor(part.remainingLife);

  return (
    <tr className="border-b transition-colors hover:bg-[var(--theme-table-row-hover)]" style={{ borderColor: 'var(--theme-border)' }}>
      <td className="px-3 py-2">
        <div className="font-mono font-semibold text-[var(--theme-text-primary)]">{part.partNumber}</div>
        <div className="text-[var(--theme-text-muted)]">{part.serialNumber}</div>
      </td>
      <td className="px-3 py-2 max-w-[200px]">
        <div className="truncate">{part.description}</div>
        {part.helicopterReg && (
          <div className="text-[var(--theme-text-muted)]">{part.helicopterReg}</div>
        )}
      </td>
      <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{part.category}</td>
      <td className="px-3 py-2 text-[var(--theme-text-secondary)]">{part.location}</td>
      <td className="px-3 py-2 text-right font-mono">{formatHours(part.tsn)}</td>
      <td className="px-3 py-2 text-right font-mono">{formatHours(part.tso)}</td>
      <td className="px-3 py-2 text-right font-mono">{formatHours(part.tbo)}</td>
      <td className="px-3 py-2 text-right">
        <div className="flex items-center justify-end gap-2">
          <span className={`font-mono font-semibold ${health.text}`}>{part.remainingLife}%</span>
          <div className="w-16 h-1.5 rounded-full bg-slate-700 overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${part.remainingLife}%`,
                backgroundColor: health.stroke,
              }}
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
}
