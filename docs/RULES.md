# Regeln

## Schichten

```
packages/core   Schicht A — Regellogik
packages/web    Schicht B — Renderer, importiert core
packages/sim    Headless-Simulator, importiert core
```

- `core` darf `web` und `sim` nicht importieren.
- `web` und `sim` dürfen `core` importieren.
- `core` hat keine Produktionsabhängigkeit. Der einzige erlaubte Extra-Bezug ist der Test-Runner (Vitest).

Diese Grenzen sind in `eslint.config.js` technisch erzwungen.

## Zufall

Zufall in `core` läuft ausschließlich über einen injizierten, seedbaren Generator (`createRng(seed)` / `requireRng(rng)`), nie über `Math.random()`.

Ohne festes Seed sind Tests und der Simulator wertlos: dieselbe Eingabe muss dieselbe Folge ergeben.
