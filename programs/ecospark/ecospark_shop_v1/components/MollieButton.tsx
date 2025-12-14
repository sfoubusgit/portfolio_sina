'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from './Button';

interface MollieButtonProps {
  onSuccess: (paymentId: string) => void;
  onError: (error: string) => void;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export default function MollieButton({ onSuccess, onError, customerInfo }: MollieButtonProps) {
  const { items, getTotalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      // Get origin safely (client-side only)
      const origin = typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_APP_URL || '';
      
      const response = await fetch('/api/payments/mollie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: getTotalPrice(),
          currency: 'EUR',
          description: `EcoSpark Bestellung - ${items.length} Artikel`,
          redirectUrl: `${origin}/payments/success`,
          webhookUrl: `${process.env.NEXT_PUBLIC_APP_URL || origin}/api/payments/mollie/webhook`,
          metadata: {
            orderItems: items.map(item => ({
              id: item.product.id,
              name: item.product.name,
              quantity: item.quantity,
              price: item.product.price,
            })),
            customer: customerInfo,
          },
        }),
      });

      const data = await response.json();
      
      if (data.success && data.paymentUrl) {
        // Redirect to Mollie payment page (client-side only)
        if (typeof window !== 'undefined') {
          window.location.href = data.paymentUrl;
        }
      } else {
        throw new Error(data.error || 'Failed to create Mollie payment');
      }
    } catch (error) {
      console.error('Mollie payment error:', error);
      setIsLoading(false);
      onError(error instanceof Error ? error.message : 'Payment failed');
    }
  };

  return (
    <Button
      variant="primary"
      onClick={handlePayment}
      disabled={isLoading}
      className="w-full bg-deep-forest hover:bg-opacity-90"
    >
      {isLoading ? 'Wird verarbeitet...' : `Mit Kreditkarte zahlen (${formatPrice(getTotalPrice())})`}
    </Button>
  );
}

