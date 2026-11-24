import React from 'react';
import { CATEGORIES } from '../data/mockData';

export default function CategoryRail({ activeCategory, setActiveCategory }) {
  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-white rounded-2xl p-4 border border-amber-200/70 sticky top-32">
        <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-[#8a5a12] mb-3 px-2">
          Categories
        </h3>

        <div className="flex md:flex-col gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center justify-between p-2.5 rounded-xl transition-colors whitespace-nowrap md:whitespace-normal ${
                  isActive
                    ? 'bg-[#8a5a12] text-white font-bold'
                    : 'text-slate-700 hover:bg-[#F7F5E9] hover:text-[#8a5a12]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-8 h-8 rounded-lg object-cover"
                  />
                  <span className="text-sm font-bold">{cat.name}</span>
                </div>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#F7F5E9] text-[#8a5a12]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}