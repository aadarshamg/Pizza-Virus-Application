import Button from '../components/Button';
import PizzaCard from '../components/PizzaCard';
import { pizzaMenu } from '../data/pizzas';

export default function HomePage({ onExploreMenu, onAddToCart }) {
  const featured = pizzaMenu.slice(0, 3);

  return (
    <div className="space-y-10 py-8">
      <section className="rounded-3xl bg-brand-dark px-6 py-12 text-white sm:px-10">
        <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
          30 min delivery guarantee
        </p>
        <h1 className="max-w-2xl text-3xl font-bold sm:text-5xl">
          Hot & delicious pizzas delivered right to your door.
        </h1>
        <p className="mt-4 max-w-xl text-sm text-orange-100 sm:text-base">
          Build your perfect order from handcrafted classics, veggie favorites,
          and chef specials made with fresh ingredients.
        </p>
        <Button className="mt-6" variant="secondary" onClick={onExploreMenu}>
          Explore Menu
        </Button>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Pizzas</h2>
          <button
            type="button"
            className="text-sm font-semibold text-brand-primary"
            onClick={onExploreMenu}
          >
            View all →
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}
