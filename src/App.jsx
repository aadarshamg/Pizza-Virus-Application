import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { useCart } from './context/CartContext';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-brand-light">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main className="container-app">
        {activePage === 'home' && (
          <HomePage
            onExploreMenu={() => setActivePage('menu')}
            onAddToCart={addToCart}
          />
        )}
        {activePage === 'menu' && <MenuPage onAddToCart={addToCart} />}
        {activePage === 'checkout' && <CheckoutPage />}
      </main>
      <Footer />
    </div>
  );
}
