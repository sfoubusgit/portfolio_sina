import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns – EcoSpark',
  description: 'Erfahre mehr über EcoSpark, unsere Mission und unsere Vision für nachhaltige Mini-Produkte.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Über EcoSpark
      </h1>

      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Unsere Geschichte
          </h2>
          <p className="text-graphite mb-4">
            EcoSpark wurde mit der Vision gegründet, nachhaltige Mini-Produkte für jeden zugänglich zu machen. 
            Wir glauben daran, dass kleine Dinge einen großen Impact haben können – sowohl für die Umwelt als auch 
            für das Bewusstsein der Menschen.
          </p>
          <p className="text-graphite">
            Was als kleine Idee begann, ist heute ein wachsendes Sortiment an nachhaltigen Produkten, die helfen, 
            den Alltag bewusster und umweltfreundlicher zu gestalten.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Unsere Mission
          </h2>
          <p className="text-graphite mb-4">
            Unsere Mission ist es, nachhaltige Mini-Produkte anzubieten, die:
          </p>
          <ul className="list-disc list-inside space-y-2 text-graphite mb-4">
            <li>Einen echten Beitrag zur Nachhaltigkeit leisten</li>
            <li>Zero-Waste-Prinzipien unterstützen</li>
            <li>Aus recycelten oder nachhaltigen Materialien hergestellt werden</li>
            <li>Upcycling und Kreislaufwirtschaft fördern</li>
            <li>Erschwinglich und für jeden zugänglich sind</li>
          </ul>
          <p className="text-graphite">
            Wir möchten zeigen, dass Nachhaltigkeit nicht kompliziert oder teuer sein muss. Jeder kleine Schritt 
            zählt, und zusammen können wir einen großen Unterschied machen.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Unsere Werte
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                🌱 Echte Nachhaltigkeit
              </h3>
              <p className="text-graphite">
                Wir wählen nur Produkte aus, die wirklich nachhaltig sind und unseren strengen Kriterien entsprechen.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                🤝 Transparenz
              </h3>
              <p className="text-graphite">
                Wir sind ehrlich über unsere Produkte, Lieferanten und unseren Impact. Transparenz ist uns wichtig.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                💚 Gemeinschaft
              </h3>
              <p className="text-graphite">
                Wir sehen uns als Teil einer größeren Bewegung hin zu mehr Nachhaltigkeit und bewusstem Konsum.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}




