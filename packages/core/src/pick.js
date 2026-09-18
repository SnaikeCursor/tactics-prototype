import { requireRng } from "./rng.js";

/**
 * @template T
 * @param {import("./rng.js").Rng} rng
 * @param {readonly T[]} items
 * @returns {T}
 */
export function pick(rng, items) {
  requireRng(rng);

  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError("pick() requires a non-empty array");
  }

  return items[rng.int(0, items.length - 1)];
}
