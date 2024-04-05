import { TemplateType, generateFormatType } from "../generateFormatType"
import fs from "fs"

/**
 * Generate format type and write to file
 * @param filePath - ../libs/generatedType.ts
 */
export const writeFormatType = async (
  templates: TemplateType,
  filePath: string
) => {
  generateFormatType(templates).then((res) => {
    fs.writeFileSync(filePath, res)
    console.log(`Generated ${filePath}`)
  })
}
