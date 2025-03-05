import { existsSync, rmSync } from 'node:fs'

export const removeDir = (path: string): void => {
  if (existsSync(path)) {
    rmSync(path, { recursive: true })
  }
}
