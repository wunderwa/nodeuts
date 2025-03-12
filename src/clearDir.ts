import { existsSync, lstatSync, unlinkSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { removeDir } from './removeDir'

export const clearDir = async (path: string): Promise<void> => {
  if (existsSync(path)) {
    readdirSync(path).forEach((name) => {
      const fPath = join(path, name)
      const stat = lstatSync(fPath)
      if (stat.isDirectory()) {
        removeDir(fPath)
      } else {
        unlinkSync(fPath)
      }
    })
  }
}
