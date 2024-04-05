import { TemplateType, generateFormatType } from "../generateFormatType"
import fs from "fs"
import path from "path"

/**
 * Generate format type and write to file
 * @param filePath - ../libs/generatedType.ts
 */
export const writeFormatType = async (
  templates: TemplateType,
  filePath: string
) => {
  generateFormatType(templates).then((res) => {
    const p = path.resolve(__dirname, filePath)
    fs.writeFileSync(p, res)
    console.log(`Generated ${p}`)
  })
}
