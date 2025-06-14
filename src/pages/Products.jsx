import { useState } from 'react';
import { products } from '../data/prodacts';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const categories = ['הכל', ...new Set(products.map(p => p.category))];

  const filtered = selectedCategory === 'הכל'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="products">
      <h2>המוצרים שלנו</h2>

      {/* תפריט קטגוריות */}
      <div className="category-filter">

        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* הצגת מוצרים */}
      <div className="product-grid">
        {filtered.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
