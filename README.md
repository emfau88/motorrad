# Ottenauer Motorradfreunde e. V.

Neue offizielle Website der Ottenauer Motorradfreunde e. V. aus Gaggenau-Ottenau.

## Versionen ansehen

- **Hauptversion – v9-Prototyp:** [https://emfau88.github.io/motorrad/](https://emfau88.github.io/motorrad/)
- **Bisheriger Astro-Entwurf:** [https://emfau88.github.io/motorrad/entwurf/](https://emfau88.github.io/motorrad/entwurf/)
- **Jubiläumsseite des bisherigen Entwurfs:** [https://emfau88.github.io/motorrad/50-jahre/](https://emfau88.github.io/motorrad/50-jahre/)

## Status

Die visuelle v9-Version ist die aktuelle Hauptseite. Sie wurde aus dem eigenständigen HTML-Prototyp in eine wartbarere Struktur mit ausgelagerten Assets, Styles und JavaScript überführt. Der vorherige mehrseitige Astro-Entwurf bleibt für Vergleich und Weiterentwicklung separat erreichbar. Das CMS ist weiterhin nicht Bestandteil dieser Frontend-Phase.

## Technik

- Astro mit TypeScript
- statische Ausgabe mit wenig clientseitigem JavaScript
- zentrale Design-Tokens in CSS
- v9-Bilder, Schriften, Styles und Verhalten als separate Assets
- redaktionelle Listen der Hauptseite direkt in Astro-Datenstrukturen
- einheitliche Bildkarten mit tastaturbedienbarer Foto-Großansicht
- Jubiläums-Countdown mit Sekunden und externer Google-Maps-Anfahrt (keine Karten-Einbettung)
- strukturierte Mock-Daten als spätere CMS-Schnittstelle

## Änderungen vom 1. Oktober 2026

- Vier neue Vereinsfotos eingebunden; alte verpixelte Gruppen-/Eventbilder und Zeitungsausschnitte entfernt. Der Jubiläumsrückblick ist ausdrücklich als Aufnahme von 2016 gekennzeichnet.
- Fotos dezent aufbereitet: passende Ausschnitte, Farb-/Helligkeitskorrekturen, Perspektivkorrektur des abfotografierten historischen Bildes und weichgezeichnete Kennzeichen im Tourenbild. Originaldateien unverändert erhalten.
- Optimierte WebP-Dateien und responsive Bildgrößen eingeführt; kleine Originale werden nicht künstlich hochskaliert. Die Bildaufbereitung ist über ein Skript reproduzierbar.
- Vereinsleben-Karten auf einheitliche 16:9-Bildflächen und gemeinsame Textkanten ausgerichtet, ohne Personen durch einen erzwungenen Bildbeschnitt zu verlieren.
- Klickbare Foto-Großansicht mit Weiterblättern, Pfeiltasten, Escape und direktem Bildlink als Alternative ohne JavaScript ergänzt.
- Kontaktinformationen konsistent linksbündig ausgerichtet und für schmale Bildschirme angepasst.
- Jubiläums-Countdown um Sekunden sowie einen externen Google-Maps-Link zur Anfahrt zur Merkurhalle ergänzt; keine eingebettete Karte.
- Impressum und Datenschutzhinweise recherchiert, im Seitendesign umgesetzt und im Footer verlinkt. Sichtbare Entwurfshinweise auf Wunsch entfernt; die intern dokumentierten Freigabepunkte bleiben bestehen.
- Jubiläumslogo rund 10 % vergrößert, Lorbeerfarbe auf das Vereinsgelb/-gold abgestimmt und die Zweige etwas weiter nach außen gesetzt. Die Maskierung der Zweige überarbeitet, um störende Mittelstreifen zu vermeiden.
- Einen sanften Shine von links unten nach rechts oben ausschließlich auf den Lorbeerblättern ergänzt, gefolgt von einem kurzen Glanzpunkt an der oberen rechten Blattspitze. Logo und Schrift bleiben ohne Effekt; die Sequenz wiederholt sich im 12-Sekunden-Takt, funktioniert auch mobil, pausiert außerhalb des sichtbaren Bereichs und berücksichtigt reduzierte Bewegung.
- Instagram-Profil [@omf19762026](https://www.instagram.com/omf19762026/) über einen eigenen Text-Button im Kontaktbereich und einen dezenten Footer-Link angebunden. Kein nachgebautes Markenlogo, kein Feed, kein Instagram-Skript; externe Links öffnen ausdrücklich gekennzeichnet in einem neuen Tab. Grundlage: [Instagram-Markenrichtlinien](https://www.meta.com/de-de/brand/resources/instagram/instagram-brand/).
- Automatisierte Website-Prüfungen für Bilder, Bildgrößen, Foto-Großansicht, Rechtsseiten, Instagram-Links und Signet-Effekte ergänzt; Build sowie Desktop-, Tablet- und Mobilansichten geprüft.

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
- [Vereinsfotos und Bildaufbereitung](docs/photo-assets.md)
- [Rechtliche Quellen und offene Freigaben](docs/legal-review.md)

## Noch zu bestätigen

Die neuen Vereinsfotos ersetzen die Zeitungsausschnitte und die alten verpixelten Bilder. Impressum und Datenschutz sind im Design der Hauptseite vorbereitet und im Footer verlinkt.

Die endgültige Domain und Veranstaltungsangaben sowie die zustellfähige Vereinsanschrift und die aktuelle Vorstandsvertretung sind noch zu bestätigen. Die sichtbaren Entwurfshinweise wurden auf Wunsch entfernt; die internen Freigabepunkte bleiben offen. Details und Quellen: [rechtliche Freigabe](docs/legal-review.md).
