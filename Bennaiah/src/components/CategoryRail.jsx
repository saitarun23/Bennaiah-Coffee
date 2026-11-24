import React from 'react';
import { CATEGORIES } from '../data/mockData';
import '../styles/CategoryRail.css';

export default function CategoryRail({ activeCategory, setActiveCategory }) {
  return (
    <aside className="rail">
      <div className="rail__card">
        <h3 className="rail__title">Categories</h3>

        <div className="rail__list scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rail__item ${isActive ? 'rail__item--active' : ''}`}
              >
                <div className="rail__item-left">
                  <img src={cat.image} alt={cat.name} />
                  <span>{cat.name}</span>
                </div>
                <span className="rail__count">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}