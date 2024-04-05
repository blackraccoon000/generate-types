import { createMessageFormatter } from "./index"
import { templates } from "./demoTemplates"
import { MessageFormatType } from "libs/generatedType"

const formatMessage = createMessageFormatter<MessageFormatType>()

describe("formatMessage", () => {
  test("should format message with two parameters", () => {
    const result = formatMessage(templates.a, "John", "Tokyo")
    expect(result).toBe("Hello John, welcome to Tokyo!")
  })

  test("should format message with three parameters", () => {
    const result = formatMessage(templates.b, "John", "Tokyo", "Japan")
    expect(result).toBe("Hello John, welcome to Tokyo Japan!")
  })
})
