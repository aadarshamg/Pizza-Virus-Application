import Button from './Button';

export default function PizzaCard({ pizza, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-brand-dark">{pizza.name}</h3>
          <span className="rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700">
            {pizza.category}
          </span>
        </div>
        <p className="text-sm text-slate-600">{pizza.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-brand-primary">${pizza.price.toFixed(2)}</p>
          <Button onClick={() => onAddToCart(pizza)}>Add to cart</Button>
        </div>
      </div>
    </article>
  );
}
