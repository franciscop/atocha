import atocha from "./index";

describe("atocha", () => {
  it("is defined", () => {
    expect(atocha).toBeDefined();
  });

  it("can list the directories", async () => {
    expect(await atocha("ls")).toContain("node_modules");
  });

  it("uses swear()", async () => {
    expect(await atocha("ls").split("\n")).toContain("node_modules");
  });

  it("can handle fatal errors", async () => {
    const err = await atocha("echho").then(() => null, (e: Error) => e);
    expect(err?.message).toMatch(/(echho: not found|command not found)/);
  });

  it("can handle error messages", async () => {
    const err = await atocha('>&2 echo "custom error"').then(() => null, (e: Error) => e);
    expect(err?.message).toMatch(/custom error/);
  });
});
