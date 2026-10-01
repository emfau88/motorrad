# Neue Vereinsfotos

Die vier am 1. Oktober 2026 hochgeladenen Originaldateien bleiben unverändert
im Repository. Für die Website werden optimierte WebP-Dateien unter
`public/v9/assets/` verwendet.

| Original                | Webdateien          | Bearbeitung und Verwendung                                                                                                                           |
| ----------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMG-20261001-WA0004.jpg | gemeinschaft-2016-* | Vordergrund reduziert, Farben dezent ausgeglichen; Jubiläumsrückblick ausdrücklich 2016, Gemeinschaftskarte                                          |
| IMG-20261001-WA0005.jpg | gemeinsame-touren-* | Weniger Bäume/Asphalt, Auto entfernt durch Ausschnitt, Kennzeichen weichgezeichnet; Tourenkarte                                                      |
| IMG-20261001-WA0006.jpg | clubhaus-*          | Bäume/Boden reduziert, Schatten leicht aufgehellt; Clubhauskarte                                                                                     |
| IMG20261001190910.heic  | vereinsgeschichte-* | HEIC-Kacheln korrekt zusammengesetzt, Perspektive des abfotografierten Abzugs leicht begradigt, roter Gegenstand/Ränder abgeschnitten; Vereinsarchiv |

Keine generative Rekonstruktion, keine erfundenen Gesichter/Details. Reflexionen
und Alterungsspuren im historischen Foto bleiben sichtbar. Ein Scan des Originals
würde mehr verbessern als weitere digitale Nachbearbeitung. Ein unbekanntes
Aufnahmedatum wurde nicht erfunden. Die Originale im öffentlichen Git-Repository
enthalten weiterhin die ursprünglichen Kennzeichen.

Vorbereitete WebP-Dateien werden committed, nicht beim Deployment neu erzeugt.
Bei Bedarf: `npm run photos:prepare` (Node.js, Sharp und FFmpeg/FFprobe auf PATH).
Der reproduzierbare Ausschnitt und die Korrekturen stehen in
`scripts/prepare-club-photos.mjs`. Die Dateinamen 640/1280/1920 bezeichnen die
maximale Exportbreite; kleine Originale werden nicht hochskaliert. Die
`srcset`-Breitenangaben berücksichtigen die tatsächliche Größe.

Die Fotorechte und Rechte der erkennbaren Personen wurden vom Auftraggeber
für diese Verwendung bestätigt. Der Zeitungsausschnitt sowie die alten
verpixelten Event-/Gruppenbilder werden nicht mehr veröffentlicht; frühere
Versionen bleiben über die Git-Historie wiederherstellbar.

Die drei Vereinsleben-Karten verwenden gleich breite Spalten und identische
16:9-Bildflächen. `object-fit: contain` erhält alle Personen und Bilddetails;
die Bildunterschriften und Texte beginnen dadurch auf gemeinsamen Kanten.
Alle vier Vereinsmotive sind über einen sichtbaren Großansicht-Link erreichbar.
Die native Dialogansicht erlaubt Weiterblättern, Pfeiltasten und Escape; ohne
JavaScript führt der Link direkt zur größten optimierten Bilddatei.
