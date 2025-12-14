import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Versand & Rückgabe – EcoSpark',
  description: 'Informationen zu Versand, Lieferzeiten, Rücksendungen und unserer "Keep it"-Policy.',
};

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Versand & Rückgabe
      </h1>

      <div className="max-w-3xl space-y-12">
        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Versand
          </h2>
          <div className="space-y-4 text-graphite">
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                Standardversand
              </h3>
              <p>
                Unser Standardversand ist kostenlos ab einem Bestellwert von 30€. 
                Darunter betragen die Versandkosten 4,90€. Die Lieferzeit beträgt in der Regel 3-7 Werktage.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                Expressversand
              </h3>
              <p>
                Für eilige Bestellungen bieten wir Expressversand an. Die Lieferzeit beträgt 1-2 Werktage. 
                Die Kosten für Expressversand betragen 9,90€.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                Internationaler Versand
              </h3>
              <p>
                Wir versenden auch international. Die Versandkosten und Lieferzeiten variieren je nach Land. 
                Bitte wähle dein Land im Checkout, um die genauen Kosten zu sehen.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Rückgabe & Umtausch
          </h2>
          <div className="space-y-4 text-graphite">
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                Widerrufsrecht
              </h3>
              <p>
                Du hast das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. 
                Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem du oder ein von dir benannter Dritter, 
                der nicht der Beförderer ist, die Waren in Besitz genommen hast bzw. hat.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                Rücksendung
              </h3>
              <p>
                Um dein Widerrufsrecht auszuüben, musst du uns (EcoSpark) mittels einer eindeutigen Erklärung 
                (z.B. ein Brief, Telefax oder E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, 
                informieren. Du kannst dafür unser Kontaktformular verwenden.
              </p>
              <p className="mt-2">
                Die Rücksendekosten trägst du, es sei denn, die gelieferte Ware entspricht nicht der bestellten 
                oder ist beschädigt.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                "Keep it"-Policy
              </h3>
              <p>
                Bei kleinen, günstigen Produkten bieten wir manchmal eine "Keep it"-Option an. Das bedeutet: 
                Wenn du mit einem Produkt nicht zufrieden bist, kannst du es behalten und wir erstatten dir 
                den Kaufpreis. Dies spart Ressourcen und Versandkosten, die bei einer Rücksendung anfallen würden.
              </p>
              <p className="mt-2">
                Diese Option steht nicht für alle Produkte zur Verfügung und wird von uns im Einzelfall angeboten. 
                Bitte kontaktiere uns, wenn du Fragen dazu hast.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                Erstattung
              </h3>
              <p>
                Wir erstatten den Kaufpreis unverzüglich und spätestens binnen 14 Tagen ab dem Tag, an dem wir 
                über deinen Widerruf dieses Vertrags informiert wurden. Für diese Rückzahlung verwenden wir dasselbe 
                Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Beschädigte oder falsche Lieferung
          </h2>
          <p className="text-graphite">
            Falls deine Bestellung beschädigt ankommt oder nicht der Bestellung entspricht, kontaktiere uns bitte 
            umgehend. Wir werden das Problem schnellstmöglich lösen und die Rücksendekosten übernehmen.
          </p>
        </section>
      </div>
    </div>
  );
}




