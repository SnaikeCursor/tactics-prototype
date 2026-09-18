import { describe, expect, it } from "vitest";
import { createRng, pick, requireRng } from "../src/index.js";

describe("createRng", () => {
  it("replays the same stream for the same seed", () => {
    const a = createRng(7);
    const b = createRng(7);

    expect([a.next(), a.next(), a.int(0, 10)]).toEqual([
      b.next(),
      b.next(),
      b.int(0, 10),
    ]);
  });

  it("diverges for different seeds", () => {
    expect(createRng(1).next()).not.toBe(createRng(2).next());
  });

  it("rejects a missing seed so chance cannot fall back to entropy", () => {
    expect(() => createRng()).toThrow(/integer seed/);
  });
});

describe("requireRng", () => {
  it("rejects calls that omit an injected generator", () => {
    expect(() => requireRng()).toThrow(/injected seedable RNG/);
    expect(() => pick(undefined, ["a"])).toThrow(/injected seedable RNG/);
  });
});

describe("pick", () => {
  it("is deterministic for a fixed seed", () => {
    const items = ["north", "east", "south", "west"];

    expect(pick(createRng(42), items)).toBe(pick(createRng(42), items));
  });
});
