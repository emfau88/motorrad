# Ottenauer Motorradfreunde e. V.

Neue offizielle Website der Ottenauer Motorradfreunde e. V. aus Gaggenau-Ottenau.

## Status

Das Projekt befindet sich im Aufbau. Der aktuelle Stand enthält das technische Fundament, das Datenmodell und die Projektdokumentation. Das CMS ist bewusst noch nicht Bestandteil dieser ersten Frontend-Phase.

## Technik

- Astro mit TypeScript
- statische Ausgabe mit möglichst wenig clientseitigem JavaScript
- zentrale Design-Tokens in CSS
- Inhalte getrennt von Layout und Komponenten
- strukturierte Mock-Daten als spätere CMS-Schnittstelle

## Lokal starten

```bash
npm install
npm run dev
```

Produktionsprüfung:

```bash
npm run build
```

## Dokumentation

- [Umsetzungsplan](docs/implementation-plan.md)
- [Architektur](docs/architecture.md)
- [Inhaltsmodell](docs/content-model.md)

## Noch zu bestätigen

Die endgültige Domain, Kontaktdaten, Anschrift, Vorstandsmitglieder, rechtlichen Texte, das Vereinslogo, die Akzentfarbe und sämtliche echten Bilder werden erst nach Bestätigung durch den Verein veröffentlicht.
