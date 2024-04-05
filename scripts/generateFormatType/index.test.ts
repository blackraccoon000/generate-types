import { generateFormatType } from "."

describe("generateFormatType", () => {
  it("should generate correct type string for valid template", async () => {
    const template = {
      greeting: "Hello {0}",
      farewell: "Goodbye {0}",
    }

    const result = await generateFormatType(template)

    expect(result).toContain("export type MessageFormatType")
    expect(result).toContain('"Hello {0}": [string]')
    expect(result).toContain('"Goodbye {0}": [string]')
  })

  it("should throw error for invalid template", async () => {
    const template = {
      greeting: "Hello {0}",
      farewell: "Goodbye {1}",
    }

    await expect(generateFormatType(template)).rejects.toThrow()
  })
})
