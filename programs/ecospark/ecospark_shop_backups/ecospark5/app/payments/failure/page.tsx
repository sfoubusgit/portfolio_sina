'use client';

import Link from 'next/link';
import Button from '@/components/Button';

export default function PaymentFailurePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-red-50 rounded-eco border border-red-200 p-8 mb-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl font-bold text-deep-forest mb-4">
            Zahlung fehlgeschlagen
          </h1>
          <p className="text-graphite mb-2">
            Die Zahlung konnte nicht verarbeitet werden.
          </p>
          <p className="text-sm text-gray-mid">
            Bitte versuche es erneut oder wähle eine andere Zahlungsmethode.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-graphite">
            Mögliche Gründe: unzureichende Deckung, abgelehnte Karte oder technisches Problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <Button variant="primary">Erneut versuchen</Button>
            </Link>
            <Link href="/cart">
              <Button variant="secondary">Zurück zum Warenkorb</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

