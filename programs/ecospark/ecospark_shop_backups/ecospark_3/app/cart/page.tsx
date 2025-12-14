'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/Button';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
          Warenkorb
        </h1>
        <div className="text-center py-16">
          <p className="text-lg text-gray-mid mb-6">Dein Warenkorb ist leer.</p>
          <Link href="/products">
            <Button variant="primary">Produkte entdecken</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Warenkorb
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-eco border border-gray-low p-6 flex flex-col md:flex-row gap-6"
            >
              <div className="relative w-full md:w-32 h-32 bg-off-white rounded-eco overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.image || '/images/placeholder.jpg'}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 128px"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-heading text-xl font-semibold text-deep-forest mb-2">
                  {item.product.name}
                </h3>
                <p className="text-sm text-gray-mid mb-4">
                  {formatPrice(item.product.price)} pro Stück
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-low rounded-eco">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-low transition-colors"
                      aria-label="Menge reduzieren"
                    >
                      −
                    </button>
                    <span className="px-4 py-1 min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-low transition-colors"
                      aria-label="Menge erhöhen"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Entfernen
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-heading text-xl font-bold text-deep-forest">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-eco border border-gray-low p-6 sticky top-24">
            <h2 className="font-heading text-xl font-bold text-deep-forest mb-4">
              Zusammenfassung
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-graphite">
                <span>Zwischensumme ({getTotalItems()} Artikel)</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <div className="flex justify-between text-graphite">
                <span>Versand</span>
                <span>Kostenlos</span>
              </div>
              <div className="border-t border-gray-low pt-3 flex justify-between">
                <span className="font-heading font-bold text-deep-forest">Gesamt</span>
                <span className="font-heading font-bold text-deep-forest">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-mid mb-6">
              Versandkosten werden im Checkout berechnet.
            </p>
            <Link href="/checkout" className="block">
              <Button variant="primary" className="w-full">
                Zur Kasse
              </Button>
            </Link>
            <Link href="/products" className="block mt-4 text-center text-sm text-deep-forest hover:text-leaf-green">
              Weiter einkaufen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



