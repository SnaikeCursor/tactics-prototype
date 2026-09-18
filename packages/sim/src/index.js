import { createRng, pick } from "@tactics/core";

/**
 * Headless consumer of core. Replays exactly when the seed is fixed.
 *
 * @param {{ seed: number, items: readonly string[], steps: number }} options
 * @returns {string[]}
 */
export function runSimulation({ seed, items, steps }) {
  const rng = createRng(seed);
  const results = [];

  for (let i = 0; i < steps; i += 1) {
    results.push(pick(rng, items));
  }

  return results;
}
