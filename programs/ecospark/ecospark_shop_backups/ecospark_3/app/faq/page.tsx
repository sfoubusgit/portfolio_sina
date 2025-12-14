'use client';

import { useState } from 'react';

const faqs = [
  {
    category: 'Versand',
    questions: [
      {
        question: 'Wie lange dauert der Versand?',
        answer: 'Die Versanddauer hängt von deinem Standort und dem gewählten Versandservice ab. In der Regel beträgt die Lieferzeit 3-7 Werktage innerhalb Deutschlands. Internationale Bestellungen können 7-14 Werktage dauern.',
      },
      {
        question: 'Welche Versandoptionen gibt es?',
        answer: 'Wir bieten Standardversand (kostenlos ab einem Bestellwert von 30€) und Expressversand an. Die genauen Optionen und Preise findest du im Checkout.',
      },
      {
        question: 'Versendet ihr auch international?',
        answer: 'Ja, wir versenden in verschiedene Länder. Die verfügbaren Länder und Versandkosten findest du im Checkout.',
      },
    ],
  },
  {
    category: 'Retouren',
    questions: [
      {
        question: 'Wie kann ich eine Rücksendung veranlassen?',
        answer: 'Bitte kontaktiere uns per E-Mail oder über unser Kontaktformular. Wir senden dir dann die notwendigen Informationen und ein Rücksendeetikett zu.',
      },
      {
        question: 'Wie lange habe ich Zeit für eine Rücksendung?',
        answer: 'Du hast 14 Tage Zeit, um deine Bestellung zurückzusenden. Die Frist beginnt mit dem Tag, an dem du die Ware erhalten hast.',
      },
      {
        question: 'Was ist eure "Keep it"-Policy?',
        answer: 'Bei kleinen, günstigen Produkten bieten wir manchmal eine "Keep it"-Option an. Das bedeutet, dass du das Produkt behalten kannst, auch wenn du nicht zufrieden bist, und wir erstatten dir den Kaufpreis. Dies spart Ressourcen und Versandkosten.',
      },
    ],
  },
  {
    category: 'Nachhaltigkeit',
    questions: [
      {
        question: 'Wie nachhaltig sind eure Produkte wirklich?',
        answer: 'Wir wählen unsere Produkte sorgfältig aus und achten auf nachhaltige Materialien, faire Produktionsbedingungen und einen positiven Umweltimpact. Mehr Details findest du auf unserer Nachhaltigkeitsseite.',
      },
      {
        question: 'Sind eure Verpackungen wirklich plastikfrei?',
        answer: 'Wir versuchen, so weit wie möglich auf Plastik zu verzichten. Unsere Verpackungen bestehen hauptsächlich aus recyceltem Papier und Karton. In manchen Fällen, besonders bei Dropshipping, haben wir weniger Kontrolle, arbeiten aber kontinuierlich daran, dies zu verbessern.',
      },
      {
        question: 'Wie kompensiert ihr CO2-Emissionen?',
        answer: 'Wir arbeiten an verschiedenen Maßnahmen zur CO2-Kompensation, einschließlich der Zusammenarbeit mit Klimaschutzprojekten. Details zu unserem Ansatz findest du auf unserer Nachhaltigkeitsseite.',
      },
    ],
  },
  {
    category: 'Produkte',
    questions: [
      {
        question: 'Woher kommen eure Produkte?',
        answer: 'Wir arbeiten mit verschiedenen nachhaltigen Lieferanten zusammen, die unsere Werte teilen. Die Herkunft der einzelnen Produkte findest du auf den jeweiligen Produktseiten.',
      },
      {
        question: 'Sind alle Produkte auf Lager?',
        answer: 'Wir nutzen teilweise Dropshipping, was bedeutet, dass einige Produkte direkt vom Hersteller versendet werden. Der Verfügbarkeitsstatus wird auf jeder Produktseite angezeigt.',
      },
      {
        question: 'Kann ich Produkte als Geschenk verpacken lassen?',
        answer: 'Ja, bei der Bestellung kannst du angeben, dass es sich um ein Geschenk handelt. Wir verwenden dann eine besonders schöne, nachhaltige Verpackung.',
      },
    ],
  },
  {
    category: 'Zahlung',
    questions: [
      {
        question: 'Welche Zahlungsmethoden akzeptiert ihr?',
        answer: 'Wir akzeptieren verschiedene Zahlungsmethoden, einschließlich Kreditkarte, PayPal und Überweisung. Die verfügbaren Optionen findest du im Checkout.',
      },
      {
        question: 'Ist meine Zahlung sicher?',
        answer: 'Ja, alle Zahlungen werden über sichere Zahlungsanbieter abgewickelt. Wir speichern keine Kreditkartendaten auf unseren Servern.',
      },
      {
        question: 'Kann ich auf Rechnung kaufen?',
        answer: 'Ja, für Bestellungen ab einem bestimmten Wert bieten wir Kauf auf Rechnung an. Die genauen Bedingungen findest du im Checkout.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Häufig gestellte Fragen (FAQ)
      </h1>

      <div className="max-w-3xl space-y-8">
        {faqs.map((category) => (
          <section key={category.category}>
            <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
              {category.category}
            </h2>
            <div className="space-y-2">
              {category.questions.map((faq) => {
                const currentIndex = questionIndex++;
                const isOpen = openIndex === currentIndex;
                return (
                  <div
                    key={faq.question}
                    className="bg-white rounded-eco border border-gray-low overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(currentIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-off-white transition-colors"
                    >
                      <span className="font-heading font-semibold text-deep-forest">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-deep-forest transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 border-t border-gray-low">
                        <p className="text-graphite">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

