import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nachhaltigkeit – EcoSpark',
  description: 'Erfahre mehr über unsere Nachhaltigkeitskriterien, Verpackungsstrategie und unseren Ansatz zu Dropshipping.',
};

export default function SustainabilityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Nachhaltigkeit bei EcoSpark
      </h1>

      <div className="max-w-3xl space-y-12">
        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Unsere Auswahlkriterien für Produkte
          </h2>
          <p className="text-graphite mb-4">
            Wir wählen unsere Produkte sorgfältig aus und achten dabei auf folgende Kriterien:
          </p>
          <ul className="list-disc list-inside space-y-2 text-graphite">
            <li>
              <strong>Materialien:</strong> Produkte aus nachhaltigen, recycelten oder biologisch abbaubaren Materialien
            </li>
            <li>
              <strong>Herstellung:</strong> Faire Produktionsbedingungen und umweltfreundliche Herstellungsprozesse
            </li>
            <li>
              <strong>Langlebigkeit:</strong> Produkte, die lange halten und nicht nach kurzer Zeit ersetzt werden müssen
            </li>
            <li>
              <strong>Funktionalität:</strong> Produkte, die einen echten Mehrwert bieten und nachhaltige Alternativen zu konventionellen Produkten sind
            </li>
            <li>
              <strong>Impact:</strong> Produkte, die einen messbaren positiven Impact auf die Umwelt haben
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Verpackung
          </h2>
          <p className="text-graphite mb-4">
            Wir legen großen Wert auf nachhaltige Verpackungen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-graphite mb-4">
            <li>
              <strong>Plastikfrei:</strong> So weit wie möglich verzichten wir auf Plastikverpackungen
            </li>
            <li>
              <strong>Recyceltes Material:</strong> Unsere Verpackungen bestehen aus recyceltem Papier oder Karton
            </li>
            <li>
              <strong>Minimale Verpackung:</strong> Wir verwenden nur so viel Verpackung wie nötig, um die Produkte sicher zu transportieren
            </li>
            <li>
              <strong>Kompostierbar:</strong> Wo möglich, verwenden wir kompostierbare Verpackungsmaterialien
            </li>
          </ul>
          <p className="text-graphite">
            Wir arbeiten kontinuierlich daran, unsere Verpackungen zu optimieren und noch nachhaltiger zu gestalten.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Dropshipping & Nachhaltigkeit
          </h2>
          <p className="text-graphite mb-4">
            Wir möchten ehrlich und transparent über unser Geschäftsmodell sein:
          </p>
          <p className="text-graphite mb-4">
            EcoSpark nutzt teilweise Dropshipping, um Produkte direkt von unseren Lieferanten zu unseren Kunden zu 
            senden. Dies hat sowohl Vorteile als auch Herausforderungen in Bezug auf Nachhaltigkeit:
          </p>
          <div className="bg-soft-mint rounded-eco p-6 mb-4">
            <h3 className="font-heading font-semibold text-deep-forest mb-2">
              Vorteile:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-graphite">
              <li>Reduzierte Lagerhaltung und damit weniger Ressourcenverbrauch</li>
              <li>Direkter Versand vom Hersteller, kürzere Lieferketten möglich</li>
              <li>Flexibilität bei der Produktauswahl</li>
            </ul>
          </div>
          <div className="bg-off-white rounded-eco p-6">
            <h3 className="font-heading font-semibold text-deep-forest mb-2">
              Herausforderungen:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-graphite">
              <li>Längere Transportwege können den CO2-Fußabdruck erhöhen</li>
              <li>Weniger Kontrolle über Verpackungsmaterialien</li>
              <li>Mögliche Mehrfachverpackungen bei verschiedenen Lieferanten</li>
            </ul>
          </div>
          <p className="text-graphite mt-4">
            Wir arbeiten aktiv daran, diese Herausforderungen zu adressieren, indem wir:
          </p>
          <ul className="list-disc list-inside space-y-2 text-graphite mt-2">
            <li>Nur mit Lieferanten zusammenarbeiten, die unsere Nachhaltigkeitsstandards teilen</li>
            <li>Kompensation von CO2-Emissionen wo möglich</li>
            <li>Kontinuierliche Optimierung unserer Lieferketten</li>
            <li>Transparenz gegenüber unseren Kunden über unsere Prozesse</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Unser Engagement
          </h2>
          <p className="text-graphite">
            Nachhaltigkeit ist für uns kein Marketing-Gag, sondern eine echte Verpflichtung. Wir sind uns bewusst, 
            dass es immer Raum für Verbesserungen gibt, und wir arbeiten kontinuierlich daran, unseren Impact zu 
            optimieren. Dein Feedback und deine Unterstützung helfen uns dabei, besser zu werden.
          </p>
        </section>
      </div>
    </div>
  );
}



