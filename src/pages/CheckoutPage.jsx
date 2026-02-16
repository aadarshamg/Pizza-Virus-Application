import { useState } from 'react';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const {
    cartItems,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    tax,
    total,
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cartItems.length) return;
    setIsSubmitted(true);
    clearCart();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid gap-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-2xl border border-orange-100 bg-white p-6">
        <h1 className="text-3xl font-bold">Checkout</h1>

        {isSubmitted ? (
          <div className="mt-6 rounded-xl bg-green-50 p-4 text-green-700">
            <p className="font-semibold">Order placed successfully 🎉</p>
            <p className="text-sm">We are preparing your order right now.</p>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-slate-700">
              Full Name
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Phone Number
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Delivery Address
              <textarea
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <Button type="submit" className="w-full" disabled={!cartItems.length}>
              Place Order
            </Button>
          </form>
        )}
      </section>

      <section className="h-fit rounded-2xl border border-orange-100 bg-white p-6">
        <h2 className="text-xl font-bold">Order Summary</h2>

        <div className="mt-4 space-y-3">
          {cartItems.length ? (
            cartItems.map((item) => (
              <div key={item.id} className="space-y-2 border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    −
                  </Button>
                  <span className="text-sm">Qty: {item.quantity}</span>
                  <Button variant="ghost" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500">Your cart is empty.</p>
          )}
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
