'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/Button';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Deutschland',
  });
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    router.push('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a payment provider
    // For now, we just show a success message
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-soft-mint rounded-eco p-8 mb-6">
            <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-heading text-3xl font-bold text-deep-forest mb-4">
              Bestellung erfolgreich!
            </h1>
            <p className="text-graphite mb-2">
              Vielen Dank für deine Bestellung bei EcoSpark.
            </p>
            <p className="text-sm text-gray-mid">
              (Dies ist eine Demo-Bestellung. In einer echten Anwendung würde hier eine Zahlungsabwicklung stattfinden.)
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-graphite">
              Du erhältst in Kürze eine Bestätigungs-E-Mail an {formData.email}.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" onClick={() => router.push('/products')}>
                Weiter einkaufen
              </Button>
              <Button variant="secondary" onClick={() => router.push('/')}>
                Zur Startseite
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-eco border border-gray-low p-6 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
              Lieferadresse
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-deep-forest mb-2">
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-deep-forest mb-2">
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-deep-forest mb-2">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-deep-forest mb-2">
                Straße und Hausnummer *
              </label>
              <input
                type="text"
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="city" className="block text-sm font-semibold text-deep-forest mb-2">
                  Stadt *
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block text-sm font-semibold text-deep-forest mb-2">
                  PLZ *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-deep-forest mb-2">
                Land *
              </label>
              <select
                id="country"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
              >
                <option value="Deutschland">Deutschland</option>
                <option value="Österreich">Österreich</option>
                <option value="Schweiz">Schweiz</option>
              </select>
            </div>

            <div className="pt-4 border-t border-gray-low">
              <p className="text-sm text-gray-mid mb-4">
                * Pflichtfelder
              </p>
              <p className="text-sm text-gray-mid mb-4">
                Hinweis: Dies ist eine Demo-Checkout-Seite. In einer echten Anwendung würde hier eine Zahlungsabwicklung (z.B. Stripe, Shopify Checkout) integriert werden.
              </p>
              <Button type="submit" variant="primary" className="w-full md:w-auto">
                Bestellung abschließen
              </Button>
            </div>
          </form>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-eco border border-gray-low p-6 sticky top-24">
            <h2 className="font-heading text-xl font-bold text-deep-forest mb-4">
              Bestellübersicht
            </h2>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-graphite">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="text-graphite">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
              <div className="border-t border-gray-low pt-3 flex justify-between">
                <span className="font-heading font-bold text-deep-forest">Gesamt</span>
                <span className="font-heading font-bold text-deep-forest">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


