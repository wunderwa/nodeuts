import {
  existsSync,
  lstatSync,
  rmSync,
  unlinkSync,
  readdirSync,
} from 'node:fs'
import {join} from "node:path"

export const clearDir = async (path: string): Promise<void> => {
  if (existsSync(path)) {
    readdirSync(path).forEach((name) => {
      const fPath = join(path, name)
      const stat = lstatSync(fPath)
      if (stat.isDirectory()) {
        rmSync(fPath, { recursive: true })
      } else {
        unlinkSync(fPath)
      }
    })
  }
}
