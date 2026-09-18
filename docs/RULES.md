# Spielregeln

Quelle der Wahrheit. `packages/core` folgt dieser Datei. Steht eine Regel nicht hier, existiert sie nicht.

Widerspricht der Code dieser Datei, gewinnt `RULES.md`. Zuerst hier ändern, dann implementieren und testen.

## Status

Noch kein Regelwerk. Keine Einheiten, kein Kampf, keine Economy, keine Balancing-Zahlen.

Neue Spielregeln zuerst in dieser Datei festhalten. Zahlen nicht stillschweigend im Code ändern.

## Invarianten

- `web` und `sim` erfinden keine eigenen Spielregeln. Sie rufen `core` auf.
- Jede zufällige Spielentscheidung ist seedbar. Dieselbe Eingabe plus dasselbe Seed ergibt dieselbe Folge.
