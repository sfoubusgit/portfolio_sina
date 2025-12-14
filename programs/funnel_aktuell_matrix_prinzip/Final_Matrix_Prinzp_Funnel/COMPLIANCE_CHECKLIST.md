# DSGVO & Rechtliche Compliance-Checkliste
## Matrixprinzip Funnel - matrixprinzip.netlify.app

---

## ✅ ERLEDIGT / AUTOMATISCH VORBEREITET

- [x] **Impressum erstellt** - Vollständig mit allen Pflichtangaben nach § 5 TMG
- [x] **Datenschutzerklärung erstellt** - DSGVO-konform mit allen erforderlichen Abschnitten
- [x] **Netlify Hosting-Hinweis** - Mit EU-US Data Privacy Framework Erwähnung
- [x] **Footer mit Links** - Impressum, Datenschutz, Kontakt
- [x] **Umsatzsteuer-ID Hinweis** - "derzeit nicht vorhanden" eingetragen
- [x] **Verantwortlicher nach § 55 RStV** - Im Impressum enthalten
- [x] **Affiliate-Hinweis** - Transparent ausgewiesen
- [x] **Streitbeilegung** - ODR-Plattform verlinkt
- [x] **SSL/TLS Verschlüsselung** - In Datenschutz erwähnt
- [x] **Cookie-Hinweis** - "Keine Tracking-Cookies" explizit erwähnt
- [x] **Formular-Hinweise** - E-Mail-Formular in Datenschutz erklärt
- [x] **Rechte der Nutzer** - Alle DSGVO-Rechte aufgelistet

---

## ⚠️ NOCH AUSZUFÜLLEN / ANPASSEN

### 1. PERSONENDATEN IM IMPRESSUM
**Status:** ❌ PLATZHALTER VORHANDEN

**Zu ersetzen:**
- `[NAME]` → Dein vollständiger Name (z.B. "Amir-Sina Foudehi")
- `[ADRESSE]` → Deine vollständige Adresse (z.B. "Heinestraße 6, 22880 Wedel, Deutschland")
- `[EMAIL]` → Deine E-Mail-Adresse (z.B. "sfou.business@gmail.com")

**Dateien zu bearbeiten:**
- `impressum.html` (Zeilen 22-25, 30)
- `datenschutz.html` (Zeilen 55-59)

**⚠️ WICHTIG:** Diese Platzhalter MÜSSEN ersetzt werden, bevor die Website live geht!

---

### 2. TRACKING-TOOLS PRÜFEN
**Status:** ✅ Aktuell keine Tracking-Tools aktiv

**Frage:** Werden Tracking-Tools verwendet?
- [ ] **Nein** → Alles OK, keine Änderung nötig
- [ ] **Ja, Google Analytics** → Abschnitt in `datenschutz.html` aktivieren (Zeilen 147-157)
- [ ] **Ja, Meta Pixel** → Abschnitt in `datenschutz.html` aktivieren (Zeilen 159-169)
- [ ] **Ja, TikTok Pixel** → Abschnitt in `datenschutz.html` aktivieren (Zeilen 171-181)
- [ ] **Ja, andere Tools** → Eigenen Abschnitt in `datenschutz.html` hinzufügen

**⚠️ WICHTIG:** Wenn Tracking-Tools aktiviert werden:
1. Abschnitte in `datenschutz.html` auskommentieren (<!-- --> entfernen)
2. **Cookie-Banner implementieren** (z.B. Cookiebot, Osano, oder Custom-Lösung)
3. **Opt-in vor Aktivierung** gemäß TTDSG § 25 Abs. 1
4. **Widerrufsmöglichkeit** anbieten

---

### 3. E-MAIL-FORMULAR PRÜFEN
**Status:** ✅ Formular vorhanden (lead-form in index.html)

**Frage:** Wird das Formular tatsächlich verwendet?
- [ ] **Ja, funktioniert** → Alles OK, bereits in Datenschutz erklärt
- [ ] **Nein, nicht aktiv** → Formular-Hinweis in Datenschutz optional machen

**⚠️ WICHTIG:** Falls Newsletter-Anmeldung:
- [ ] **Double-Opt-In implementieren** (Bestätigungs-E-Mail)
- [ ] **Widerrufsmöglichkeit** in jeder E-Mail
- [ ] **Abmelde-Link** funktionsfähig

**Aktueller Status:** Formular hat `onsubmit="return false;"` → **NICHT FUNKTIONSFÄHIG**
- Entweder: Formular-Handler implementieren (z.B. Netlify Forms, Formspree)
- Oder: Hinweis in Datenschutz anpassen, dass Formular derzeit nicht aktiv ist

---

### 4. COOKIE-BANNER
**Status:** ❌ NICHT VORHANDEN

**Frage:** Wird ein Cookie-Banner benötigt?

**Aktuell:**
- ✅ Keine Tracking-Cookies verwendet
- ✅ Keine Marketing-Cookies verwendet
- ✅ Nur technisch notwendige Cookies (falls vorhanden)

**Empfehlung:**
- [ ] **Kein Cookie-Banner nötig** → Wenn wirklich KEINE Cookies gesetzt werden
- [ ] **Cookie-Banner implementieren** → Wenn in Zukunft Tracking-Tools hinzugefügt werden

**⚠️ WICHTIG:** 
- Wenn Tracking-Tools aktiviert werden → **Cookie-Banner MUSS** implementiert werden
- Cookie-Banner muss Opt-in vor Aktivierung ermöglichen (TTDSG-konform)
- Empfohlene Lösungen: Cookiebot, Osano, oder Custom-Lösung mit TTDSG-Konformität

---

### 5. WEITERE PRÜFPUNKTE

#### AGB (Allgemeine Geschäftsbedingungen)
**Status:** ❌ NICHT VORHANDEN

**Frage:** Werden Produkte direkt über diese Website verkauft?
- [ ] **Nein** → AGB nicht erforderlich (Verkauf läuft über Digistore24)
- [ ] **Ja** → AGB erstellen und im Footer verlinken

**Aktuell:** Verkauf läuft über Digistore24 → **AGB NICHT ERFORDERLICH**

---

#### Widerrufsbelehrung
**Status:** ❌ NICHT VORHANDEN

**Frage:** Werden Produkte direkt über diese Website verkauft?
- [ ] **Nein** → Widerrufsbelehrung nicht erforderlich (Verkauf läuft über Digistore24)
- [ ] **Ja** → Widerrufsbelehrung erstellen

**Aktuell:** Verkauf läuft über Digistore24 → **WIDERRUFSBELEHRUNG NICHT ERFORDERLICH**

---

#### Datenschutz-Folgenabschätzung (DSFA)
**Status:** ✅ NICHT ERFORDERLICH

**Grund:** Keine umfangreiche Datenverarbeitung, keine sensiblen Daten, keine Profiling-Aktivitäten

---

## 📋 FINALE CHECKLISTE VOR GO-LIVE

### Vor dem Live-Schalten:

- [ ] **Impressum:** Alle Platzhalter `[NAME]`, `[ADRESSE]`, `[EMAIL]` ersetzt
- [ ] **Datenschutz:** Alle Platzhalter `[NAME]`, `[ADRESSE]`, `[EMAIL]` ersetzt
- [ ] **Tracking-Tools:** Entweder deaktiviert ODER aktiviert mit Cookie-Banner
- [ ] **Formular:** Entweder funktionsfähig ODER Hinweis angepasst
- [ ] **Footer:** Auf allen Seiten konsistent (Impressum, Datenschutz, Kontakt)
- [ ] **Links:** Alle Links funktionieren (Impressum, Datenschutz)
- [ ] **Rechtschreibung:** Alle Texte auf Fehler geprüft
- [ ] **Stand-Datum:** Aktuelles Datum in Impressum und Datenschutz eingetragen

---

## 🔍 REGELMÄSSIGE ÜBERPRÜFUNGEN

### Nach dem Go-Live:

- [ ] **Quartalsweise:** Impressum und Datenschutz auf Aktualität prüfen
- [ ] **Bei Änderungen:** Datenschutz aktualisieren (z.B. neue Tracking-Tools)
- [ ] **Bei neuen Features:** Datenschutz entsprechend erweitern
- [ ] **Bei Umsatzsteuer-ID:** Impressum aktualisieren

---

## 📞 SUPPORT & HILFE

**Bei Fragen zur DSGVO:**
- Bundesbeauftragter für Datenschutz: https://www.bfdi.bund.de
- Landesdatenschutzbeauftragte: Je nach Bundesland

**Bei Fragen zum Impressum:**
- Rechtsanwalt für Medienrecht konsultieren
- IHK oder Handwerkskammer (bei gewerblicher Tätigkeit)

---

## ✅ STATUS-ÜBERSICHT

| Bereich | Status | Aktion erforderlich |
|---------|--------|-------------------|
| Impressum | ✅ Vorbereitet | ⚠️ Platzhalter ersetzen |
| Datenschutz | ✅ Vorbereitet | ⚠️ Platzhalter ersetzen |
| Footer | ✅ Implementiert | ✅ Fertig |
| Tracking | ✅ Keine Tools | ✅ Fertig |
| Cookie-Banner | ❌ Nicht vorhanden | ⚠️ Nur nötig bei Tracking |
| Formular | ⚠️ Nicht funktionsfähig | ⚠️ Handler implementieren oder Hinweis anpassen |
| AGB | ❌ Nicht vorhanden | ✅ Nicht erforderlich |
| Widerruf | ❌ Nicht vorhanden | ✅ Nicht erforderlich |

---

**Letzte Aktualisierung:** Dezember 2025
**Nächste Überprüfung empfohlen:** März 2026


