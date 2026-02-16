import { useMemo, useState } from 'react';
import PizzaCard from '../components/PizzaCard';
import { categories, pizzaMenu } from '../data/pizzas';
import Button from '../components/Button';

export default function MenuPage({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredMenu = useMemo(() => {
    return pizzaMenu.filter((pizza) => {
      const matchesCategory =
        selectedCategory === 'All' || pizza.category === selectedCategory;
      const matchesQuery = pizza.name
        .toLowerCase()
        .includes(query.toLowerCase().trim());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <div className="space-y-6 py-8">
      <section className="space-y-4 rounded-2xl border border-orange-100 bg-white p-4 sm:p-6">
        <h1 className="text-3xl font-bold">Menu</h1>
        <input
          type="search"
          placeholder="Search pizzas..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMenu.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={onAddToCart} />
        ))}
      </section>
    </div>
  );
}
