import { describe, expect, it } from "vitest";
import { runSimulation } from "../src/index.js";

describe("runSimulation", () => {
  it("replays the same outcomes for the same seed", () => {
    const options = {
      seed: 99,
      items: ["strike", "guard", "wait"],
      steps: 8,
    };

    expect(runSimulation(options)).toEqual(runSimulation(options));
  });
});
