'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/Button';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderData, setOrderData] = useState<any>(null);

  const paymentId = searchParams.get('paymentId');
  const provider = searchParams.get('provider');

  useEffect(() => {
    if (paymentId && typeof window !== 'undefined') {
      // In production, fetch order data from your backend
      // For now, get from localStorage
      try {
        const orders = JSON.parse(localStorage.getItem('ecospark-orders') || '[]');
        const order = orders.find((o: any) => o.paymentId === paymentId);
        if (order) {
          setOrderData(order);
        }
      } catch (error) {
        console.error('Error loading order data:', error);
      }
    }
  }, [paymentId]);

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
            Zahlung erfolgreich!
          </h1>
          <p className="text-graphite mb-2">
            Vielen Dank für deine Bestellung bei EcoSpark.
          </p>
          {paymentId && (
            <p className="text-sm text-gray-mid mb-2">
              Zahlungs-ID: {paymentId}
            </p>
          )}
          {provider && (
            <p className="text-sm text-gray-mid">
              Zahlungsmethode: {provider === 'paypal' ? 'PayPal' : 'Kreditkarte (Mollie)'}
            </p>
          )}
        </div>

        {orderData && (
          <div className="bg-white rounded-eco border border-gray-low p-6 mb-6 text-left">
            <h2 className="font-heading text-xl font-bold text-deep-forest mb-4">
              Bestelldetails
            </h2>
            <div className="space-y-2 text-sm">
              <p><strong>Bestelldatum:</strong> {new Date(orderData.date).toLocaleDateString('de-DE')}</p>
              <p><strong>Gesamtbetrag:</strong> €{orderData.total.toFixed(2)}</p>
              <p><strong>Artikel:</strong> {orderData.items.length} Produkt(e)</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <p className="text-graphite">
            Du erhältst in Kürze eine Bestätigungs-E-Mail mit allen Details zu deiner Bestellung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button variant="primary">Weiter einkaufen</Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Zur Startseite</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-graphite">Lade...</div>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}

