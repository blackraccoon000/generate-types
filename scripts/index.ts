import { generateFormatType } from "./generateFormatType"
import { templates } from "libs/templates"
import fs from "fs"
import path from "path"

const filePath = "../libs/generatedType.ts"
generateFormatType(templates).then((res) => {
  const p = path.resolve(__dirname, filePath)
  fs.writeFileSync(p, res)
  console.log(`Generated ${p}`)
})
