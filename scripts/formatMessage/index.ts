import { MessageFormatType } from "libs/generatedType"

export const formatMessage = <K extends keyof MessageFormatType>(
  message: K,
  ...params: MessageFormatType[K]
) => {
  return message.replace(/{(\d+)}/g, (match, number) => {
    return typeof params[number] !== "undefined" ? params[number] : match
  })
}
