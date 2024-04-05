import { format } from "prettier"

/**
 * jestのバグでprettierが2系で設定している
 * jest v30系でprettier3系を使える予定
 * Example: https://github.com/prettier/prettier/issues/15769
 */

// 与えられたテンプレートが正しいかチェック
const paramsChecker = (params: string[], key: string, element: string) => {
  const checkIndex = Array(params.length)
    .fill("")
    .map((_, i) => `{${i}}`)

  const invalidParams = params.filter((param) => !checkIndex.includes(param))
  if (invalidParams.length > 0) {
    throw new Error(`
    invalidParams: ${invalidParams.join(", ")}
    ${key}: ${element}
    `)
  }
}

type TemplateType = string | { [key: string]: TemplateType }

// テンプレートを再帰的に探索して、正しい型を生成する
const recursionMatches = (obj: TemplateType) => {
  const types: string[] = []
  if (typeof obj === "string") {
    return types
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key as keyof typeof obj]
      if (typeof element === "string") {
        const params = element.match(/{(\d+)}/g)
        if (!params) {
          return types
        }
        paramsChecker(params, key, element)

        const typeString = `"${element}": [${Array(params.length)
          .fill("string")
          .join(", ")}]`
        types.push(typeString)
      } else {
        const innerTypes = recursionMatches(element)
        types.push(...innerTypes)
      }
    }
  }
  return types
}

// テンプレートから型を生成する
export const generateFormatType = async (obj: TemplateType) => {
  const types = recursionMatches(obj)
  const typeString = `// 自動生成されたファイルです。手動で変更しないでください。
  export type MessageFormatType = {\n  ${types.join("\n")}\n}`
  const formattedString = await format(typeString, {
    parser: "typescript",
  })
  return formattedString
}
