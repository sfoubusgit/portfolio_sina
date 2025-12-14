# Payment Integration Setup Guide

This guide explains how to set up PayPal and Mollie payment integrations for EcoSpark.

## Overview

EcoSpark supports two payment methods:
1. **PayPal** - Supports PayPal accounts and credit cards via PayPal
2. **Mollie** - Direct credit card payments (VISA, Mastercard, etc.)

## Prerequisites

- Node.js and npm installed
- PayPal Business account (for PayPal integration)
- Mollie account (for credit card payments)

## Step 1: Install Dependencies

```bash
npm install
```

This will install `@paypal/react-paypal-js` for PayPal integration.

## Step 2: PayPal Setup

### 2.1 Create PayPal Business Account

1. Go to https://www.paypal.com and create a business account
2. Complete business verification

### 2.2 Get PayPal API Credentials

1. Go to https://developer.paypal.com/
2. Log in with your PayPal business account
3. Navigate to "My Apps & Credentials"
4. Create a new app (or use existing)
5. Copy your **Client ID** and **Client Secret**

### 2.3 Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here
```

**Important:** 
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is exposed to the browser (safe)
- `PAYPAL_CLIENT_SECRET` is server-side only (never expose)

### 2.4 Test Mode vs Production

- **Sandbox Mode**: Use sandbox credentials for testing (no real money)
- **Live Mode**: Use production credentials for real payments

Switch between modes by using different Client IDs.

## Step 3: Mollie Setup

### 3.1 Create Mollie Account

1. Go to https://www.mollie.com
2. Sign up for a business account
3. Complete business verification

### 3.2 Get Mollie API Key

1. Log in to Mollie Dashboard
2. Go to "Developers" → "API Keys"
3. Copy your **API Key** (test or live)

### 3.3 Configure Environment Variables

Add to your `.env.local`:

```env
MOLLIE_API_KEY=your_mollie_api_key_here
```

### 3.4 Test Mode vs Production

- **Test Mode**: Use test API keys (starts with `test_`)
- **Live Mode**: Use live API keys (starts with `live_`)

## Step 4: Application URL Configuration

Set your application URL for webhooks and redirects:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production, use your actual domain:
```env
NEXT_PUBLIC_APP_URL=https://ecospark.de
```

## Step 5: Install Mollie SDK (Optional)

For full Mollie integration, you may want to install the Mollie SDK:

```bash
npm install @mollie/api-client
```

Then update `app/api/payments/mollie/route.ts` to use the actual SDK.

## Step 6: Webhook Configuration

### PayPal Webhooks

1. Go to PayPal Developer Dashboard
2. Navigate to your app
3. Add webhook URL: `https://yourdomain.com/api/payments/paypal/webhook`
4. Subscribe to events: `PAYMENT.CAPTURE.COMPLETED`, `PAYMENT.CAPTURE.DENIED`

### Mollie Webhooks

1. Go to Mollie Dashboard → Settings → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/payments/mollie/webhook`
3. Select events: `payment.paid`, `payment.failed`, `payment.canceled`

## Current Implementation Status

### ✅ Implemented

- Payment method selection UI
- PayPal button component (client-side)
- Mollie payment button (client-side)
- API route structure for both providers
- Payment success/failure pages
- Order storage (localStorage for demo)

### ⚠️ Needs Production Implementation

1. **Server-side Payment Processing**
   - Update `app/api/payments/paypal/route.ts` with actual PayPal SDK
   - Update `app/api/payments/mollie/route.ts` with actual Mollie SDK
   - Currently using mock/placeholder implementations

2. **Webhook Handlers**
   - Create `app/api/payments/paypal/webhook/route.ts`
   - Create `app/api/payments/mollie/webhook/route.ts`
   - Verify webhook signatures
   - Update order status in database

3. **Payment Verification**
   - Implement actual payment verification in `app/api/payments/verify/route.ts`
   - Check payment status with providers

4. **Database Integration**
   - Replace localStorage with real database
   - Store orders, customers, payment records

5. **Email Notifications**
   - Send order confirmation emails
   - Send payment confirmation emails
   - Send shipping notifications

## Testing

### Test PayPal Payments

1. Use PayPal Sandbox credentials
2. Use test PayPal accounts from https://developer.paypal.com/
3. Test successful payments
4. Test failed payments
5. Test cancellation

### Test Mollie Payments

1. Use Mollie test API key
2. Use test card numbers from Mollie documentation
3. Test successful payments
4. Test failed payments
5. Test different payment methods

## Production Checklist

Before going live:

- [ ] Replace test credentials with production credentials
- [ ] Implement actual PayPal SDK integration
- [ ] Implement actual Mollie SDK integration
- [ ] Set up webhook handlers
- [ ] Configure webhook URLs in provider dashboards
- [ ] Test webhook delivery
- [ ] Set up database for order storage
- [ ] Implement email notifications
- [ ] Set up SSL certificate
- [ ] Test all payment flows
- [ ] Set up monitoring and error tracking
- [ ] Review security (PCI compliance considerations)

## Security Notes

- Never expose API secrets to the client
- Always verify webhook signatures
- Use HTTPS in production
- Store sensitive data securely
- Follow PCI DSS guidelines if handling card data directly
- Use environment variables for all secrets

## Support & Documentation

- PayPal: https://developer.paypal.com/docs/
- Mollie: https://docs.mollie.com/
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

## Troubleshooting

### PayPal Button Not Showing

- Check that `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set
- Check browser console for errors
- Verify PayPal script is loading

### Mollie Payment Fails

- Check that `MOLLIE_API_KEY` is set
- Verify API key is correct (test vs live)
- Check Mollie dashboard for error logs

### Webhooks Not Working

- Verify webhook URL is accessible
- Check webhook signature verification
- Review server logs for errors

