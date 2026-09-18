/**
 * @typedef {object} Rng
 * @property {() => number} next Float in [0, 1).
 * @property {(min: number, max: number) => number} int Inclusive integer.
 */

/**
 * Seedable generator for all chance in core. Never use Math.random() here.
 *
 * @param {number} seed Integer seed. The same seed must replay the same stream.
 * @returns {Rng}
 */
export function createRng(seed) {
  if (!Number.isInteger(seed)) {
    throw new TypeError("createRng(seed) requires an integer seed");
  }

  let state = seed >>> 0;

  return {
    next() {
      state = (state + 0x6d2b79f5) >>> 0;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    },
    int(min, max) {
      if (!Number.isInteger(min) || !Number.isInteger(max) || max < min) {
        throw new TypeError("int(min, max) expects integers with max >= min");
      }

      return min + Math.floor(this.next() * (max - min + 1));
    },
  };
}

/**
 * @param {Rng | null | undefined} rng
 * @returns {Rng}
 */
export function requireRng(rng) {
  if (rng == null || typeof rng.next !== "function") {
    throw new TypeError("An injected seedable RNG is required");
  }

  return rng;
}
