import atocha from "./atocha";

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
    await expect(atocha("echho")).rejects.toThrow(
      /(echho: not found|command not found)/
    );
  });

  it("can handle error messages", async () => {
    await expect(atocha('>&2 echo "custom error"')).rejects.toThrow(
      /custom error/
    );
  });
});
