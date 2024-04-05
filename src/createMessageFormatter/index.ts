export const createMessageFormatter = <
  T extends Record<string, string[]>
>() => {
  return function formatMessage<K extends keyof T>(
    message: K,
    ...params: T[K]
  ) {
    if (typeof message !== "string") throw new Error("message is not string")
    return message.replace(/{(\d+)}/g, (match, number) => {
      const matched =
        typeof params[number] !== "undefined" ? params[number] : match
      return matched.toString()
    })
  }
}
