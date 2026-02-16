import Button from './Button';
import { useCart } from '../context/CartContext';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'menu', label: 'Menu' },
  { key: 'checkout', label: 'Checkout' },
];

export default function Header({ activePage, onNavigate }) {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-10 border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="container-app flex items-center justify-between py-4">
        <button
          className="text-xl font-bold text-brand-primary"
          onClick={() => onNavigate('home')}
          type="button"
        >
          PizzaVirus 🍕
        </button>

        <nav className="hidden gap-2 sm:flex">
          {links.map((link) => (
            <Button
              key={link.key}
              variant={activePage === link.key ? 'primary' : 'ghost'}
              onClick={() => onNavigate(link.key)}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <Button variant="secondary" onClick={() => onNavigate('checkout')}>
          Cart ({itemCount})
        </Button>
      </div>
    </header>
  );
}
