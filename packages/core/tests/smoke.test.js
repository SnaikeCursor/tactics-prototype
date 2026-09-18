import { describe, expect, it } from "vitest";

describe("core", () => {
  it("runs a trivial assertion so the agent has a green baseline", () => {
    expect(true).toBe(true);
  });
});
