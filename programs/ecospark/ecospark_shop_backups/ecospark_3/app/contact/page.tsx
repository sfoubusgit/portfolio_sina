'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
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
              Nachricht gesendet!
            </h1>
            <p className="text-graphite mb-2">
              Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden.
            </p>
            <p className="text-sm text-gray-mid">
              (Dies ist eine Demo. In einer echten Anwendung würde die Nachricht an einen Server gesendet werden.)
            </p>
          </div>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            Neue Nachricht senden
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Kontakt
      </h1>

      <div className="max-w-2xl grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Schreib uns
          </h2>
          <p className="text-graphite mb-6">
            Hast du Fragen, Anregungen oder Feedback? Wir freuen uns auf deine Nachricht!
          </p>
          <div className="space-y-4 text-graphite">
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-1">
                E-Mail
              </h3>
              <p>kontakt@ecospark.de</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-1">
                Antwortzeit
              </h3>
              <p>Wir antworten in der Regel innerhalb von 24-48 Stunden.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-eco border border-gray-low p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-deep-forest mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green"
            />
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
            <label htmlFor="message" className="block text-sm font-semibold text-deep-forest mb-2">
              Nachricht *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-low rounded-eco focus:outline-none focus:ring-2 focus:ring-leaf-green resize-none"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Nachricht senden
          </Button>
        </form>
      </div>
    </div>
  );
}

