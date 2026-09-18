# CLAUDE.md

Guidance for Claude Code and other agents working in this repository.

## Layout

```
packages/core   Layer A: rule logic. No production dependencies.
packages/web    Layer B: renderer. Imports @tactics/core.
packages/sim    Headless simulator. Imports @tactics/core.
docs/RULES.md   Canonical project rules (German).
docs/DECISIONS.md
```

## Invariants

Read `docs/RULES.md` before changing package boundaries or chance.

1. `@tactics/core` must not import `@tactics/web` or `@tactics/sim`.
2. `@tactics/web` and `@tactics/sim` may import `@tactics/core`.
3. Chance in `core` goes only through an injected, seedable generator (`createRng` / `requireRng`). Never `Math.random()`. A missing seed is an error. Same seed, same stream — otherwise tests and `sim` are worthless.

ESLint enforces (1) and the `Math.random()` ban in `packages/core/**`.

## Commands

Node version is pinned in `.nvmrc` (`24.21.0`).

```bash
nvm use
pnpm install
pnpm lint
pnpm test
```

## Workflow

`main` is protected. Work on a branch and merge through a pull request.
