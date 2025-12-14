'use client';

import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useCart } from '@/context/CartContext';

interface PayPalButtonProps {
  onSuccess: (orderId: string) => void;
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

function PayPalButtonContent({ onSuccess, onError, customerInfo }: PayPalButtonProps) {
  const { items, getTotalPrice } = useCart();
  const [{ isPending }] = usePayPalScriptReducer();

  const createOrder = async () => {
    try {
      const response = await fetch('/api/payments/paypal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: getTotalPrice(),
          currency: 'EUR',
          items: items.map(item => ({
            name: item.product.name,
            quantity: item.quantity,
            price: item.product.price,
          })),
          customerInfo,
        }),
      });

      const data = await response.json();
      if (data.success) {
        return data.orderId;
      } else {
        throw new Error(data.error || 'Failed to create PayPal order');
      }
    } catch (error) {
      console.error('PayPal order creation error:', error);
      onError(error instanceof Error ? error.message : 'Payment failed');
      throw error;
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    try {
      // In production, you would verify the payment on your server
      // For now, we'll just call onSuccess
      onSuccess(data.orderID);
    } catch (error) {
      console.error('PayPal approval error:', error);
      onError('Payment approval failed');
    }
  };

  if (isPending) {
    return <div className="text-center py-4 text-gray-mid">Lade PayPal...</div>;
  }

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onError={(err: any) => {
        console.error('PayPal error:', err);
        onError('PayPal payment failed');
      }}
      style={{
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
      }}
    />
  );
}

export default function PayPalButton({ onSuccess, onError, customerInfo }: PayPalButtonProps) {
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '';

  if (!paypalClientId) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-eco p-4 text-sm text-yellow-800">
        PayPal Client ID nicht konfiguriert. Bitte setze NEXT_PUBLIC_PAYPAL_CLIENT_ID in deiner .env Datei.
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId: paypalClientId,
        currency: 'EUR',
        intent: 'capture',
      }}
    >
      <PayPalButtonContent onSuccess={onSuccess} onError={onError} customerInfo={customerInfo} />
    </PayPalScriptProvider>
  );
}

