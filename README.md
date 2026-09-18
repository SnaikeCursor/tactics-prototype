# tactics-prototype

Tactics game prototype.

## Layout

```
packages/core   Schicht A: Regellogik
packages/web    Schicht B: Renderer, importiert core
packages/sim    Headless-Simulator, importiert core
docs/RULES.md
docs/DECISIONS.md
```

Architecture rules live in `docs/RULES.md`. Agents: read `CLAUDE.md`.

## Setup

This repo is pinned to **Node.js 24.21.0** (see `.nvmrc`). Use `nvm` so the
whole team — and coding agents — run the same runtime.

```bash
nvm install
nvm use
corepack enable
pnpm install
```

```bash
pnpm test
pnpm test:watch
pnpm lint
pnpm typecheck
pnpm dev
```
