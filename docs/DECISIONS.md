# Entscheidungen

Eine Zeile pro Entscheidung: Datum, Beschluss, Begründung. Dieselbe Diskussion nicht erneut führen, bis eine neue Zeile sie ersetzt.

- 2026-09-18 — Monorepo als `core` / `web` / `sim`. Regeln bleiben von Renderer und Simulator getrennt, damit `sim` ohne UI replayen kann.
- 2026-09-18 — `core` importiert nie `web` oder `sim`. Sonst hängen Tests an UI oder Simulator.
- 2026-09-18 — Zufall in `core` nur über injizierten, seedbaren Generator, nie `Math.random()`. Sonst sind Tests und `sim` nicht reproduzierbar.
- 2026-09-18 — `docs/RULES.md` ist die Quelle der Wahrheit für Spielregeln, nicht für Architektur.
- 2026-09-18 — Branches `feat/` / `fix/` / `chore/` plus Ticketnummer; ein Feature, ein Branch, ein PR. Verhindert Misch-Diffs und erzwingt den Schutz von `main`.
- 2026-09-18 — Commit nach jedem grünen Testlauf, nicht nach der Arbeitssitzung. Sonst fehlt dem Agenten die Rückkopplung.
