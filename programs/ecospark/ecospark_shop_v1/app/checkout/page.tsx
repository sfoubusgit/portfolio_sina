'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/Button';
import PayPalButton from '@/components/PayPalButton';
import MollieButton from '@/components/MollieButton';

type PaymentMethod = 'paypal' | 'mollie' | null;

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
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  const handlePaymentSuccess = async (paymentId: string, provider: string) => {
    setIsProcessing(true);
    
    // Save order data (in production, send to your backend)
    const orderData = {
      paymentId,
      provider,
      items,
      customerInfo: formData,
      total: getTotalPrice(),
      date: new Date().toISOString(),
    };

    // Store order in localStorage for demo (in production, save to database)
    if (typeof window !== 'undefined') {
      try {
        const orders = JSON.parse(localStorage.getItem('ecospark-orders') || '[]');
        orders.push(orderData);
        localStorage.setItem('ecospark-orders', JSON.stringify(orders));
      } catch (error) {
        console.error('Error saving order to localStorage:', error);
      }
    }

    // Clear cart
    clearCart();

    // Redirect to success page
    router.push(`/payments/success?paymentId=${paymentId}&provider=${provider}`);
  };

  const handlePaymentError = (error: string) => {
    setIsProcessing(false);
    alert(`Zahlungsfehler: ${error}`);
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.postalCode
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Shipping Information Form */}
          <form className="bg-white rounded-eco border border-gray-low p-6 space-y-6">
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
          </form>

          {/* Payment Method Selection */}
          <div className="bg-white rounded-eco border border-gray-low p-6">
            <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
              Zahlungsmethode
            </h2>

            {!isFormValid() && (
              <p className="text-sm text-gray-mid mb-4">
                Bitte fülle zuerst die Lieferadresse aus.
              </p>
            )}

            <div className="space-y-4">
              {/* PayPal Option */}
              <div className="border border-gray-low rounded-eco p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="paypal"
                      checked={selectedPayment === 'paypal'}
                      onChange={() => setSelectedPayment('paypal')}
                      disabled={!isFormValid()}
                      className="w-4 h-4 text-leaf-green focus:ring-leaf-green"
                    />
                    <label htmlFor="paypal" className="font-heading font-semibold text-deep-forest cursor-pointer">
                      PayPal
                    </label>
                  </div>
                  <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="h-8" />
                </div>
                <p className="text-sm text-gray-mid mb-3">
                  Bezahle sicher mit PayPal oder Kreditkarte
                </p>
                {selectedPayment === 'paypal' && isFormValid() && (
                  <div className="mt-4">
                    <PayPalButton
                      onSuccess={(orderId) => handlePaymentSuccess(orderId, 'paypal')}
                      onError={handlePaymentError}
                      customerInfo={formData}
                    />
                  </div>
                )}
              </div>

              {/* Mollie / Credit Card Option */}
              <div className="border border-gray-low rounded-eco p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="mollie"
                      name="payment"
                      value="mollie"
                      checked={selectedPayment === 'mollie'}
                      onChange={() => setSelectedPayment('mollie')}
                      disabled={!isFormValid()}
                      className="w-4 h-4 text-leaf-green focus:ring-leaf-green"
                    />
                    <label htmlFor="mollie" className="font-heading font-semibold text-deep-forest cursor-pointer">
                      Kreditkarte (VISA, Mastercard)
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <img src="https://www.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="VISA" className="h-6" />
                    <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png" alt="Mastercard" className="h-6" />
                  </div>
                </div>
                <p className="text-sm text-gray-mid mb-3">
                  Sichere Zahlung mit Kreditkarte über Mollie
                </p>
                {selectedPayment === 'mollie' && isFormValid() && (
                  <div className="mt-4">
                    <MollieButton
                      onSuccess={(paymentId) => handlePaymentSuccess(paymentId, 'mollie')}
                      onError={handlePaymentError}
                      customerInfo={formData}
                    />
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-mid mt-4">
              * Alle Zahlungen werden sicher verarbeitet. Deine Zahlungsdaten werden verschlüsselt übertragen.
            </p>
          </div>
        </div>

        {/* Order Summary */}
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
            <div className="text-xs text-gray-mid space-y-1">
              <p>✓ Kostenloser Versand</p>
              <p>✓ 14 Tage Widerrufsrecht</p>
              <p>✓ Sichere Zahlung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
