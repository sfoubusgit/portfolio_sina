# EcoSpark

Nachhaltiger Online-Shop für kleine, umweltfreundliche Produkte.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Context API (Cart State)
- PayPal & Mollie Payment Integration

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Payment Setup

### PayPal Integration

1. Create a PayPal Business account at https://www.paypal.com
2. Go to https://developer.paypal.com/ and create an app
3. Get your Client ID and Client Secret
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id
   PAYPAL_CLIENT_SECRET=your_client_secret
   ```

### Mollie Integration

1. Create a Mollie account at https://www.mollie.com
2. Get your API key from the dashboard
3. Add to `.env.local`:
   ```
   MOLLIE_API_KEY=your_api_key
   ```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

## Project Structure

- `app/` - Next.js App Router pages
- `components/` - Reusable UI components
- `data/` - Mock data (products, categories, blog posts)
- `lib/` - Utility functions
- `context/` - React Context providers (Cart)
- `app/api/` - API routes for payment processing

## Payment Features

- ✅ PayPal integration (credit cards via PayPal)
- ✅ Mollie integration (direct credit card payments)
- ✅ Payment success/failure handling
- ✅ Order management (localStorage for demo)

## Production Deployment

Before deploying to production:

1. Set up real payment provider accounts (PayPal & Mollie)
2. Configure webhooks for payment verification
3. Replace localStorage with a real database
4. Add email notifications
5. Set up SSL certificate
6. Configure production environment variables

## Notes

- Payment integration is currently using mock/placeholder implementations
- In production, you need to implement actual API calls to PayPal/Mollie
- Webhook handlers need to be implemented for payment verification
- Order data is currently stored in localStorage (replace with database in production)
