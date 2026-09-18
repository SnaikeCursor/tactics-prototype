# Entscheidungen

## Monorepo in drei Paketen

`core`, `web` und `sim` leben als pnpm-Workspace-Pakete unter `packages/`.

Regellogik bleibt von Darstellung und Simulation getrennt. So kann `sim` Tausende von Replays ohne Renderer fahren, und `web` kann rendern, ohne die Regeln zu besitzen.

## Einbahn-Abhängigkeit

Nur `web` und `sim` dürfen `@tactics/core` importieren. `core` importiert niemals `@tactics/web` oder `@tactics/sim`.

Damit kann die Regelschicht allein getestet werden. Ein Import in die falsche Richtung würde Tests an UI oder Simulator koppeln.

## Seedbarer Zufall, injiziert

`Math.random()` ist in `core` verboten. Jede Chance-Funktion bekommt einen Generator, den der Aufrufer mit einem Integer-Seed erzeugt.

Gleiche Seeds müssen dieselbe Folge liefern. Sonst sind Unit-Tests und der Headless-Simulator nicht reproduzierbar.
