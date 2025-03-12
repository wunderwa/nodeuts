import { existsSync, rmSync } from 'node:fs'
import { dirPath } from './config'

export const beforeFsTest = () => {
  if (existsSync(dirPath)) {
    rmSync(dirPath, { recursive: true, force: true })
  }
}
