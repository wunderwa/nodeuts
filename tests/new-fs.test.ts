import { clearDir, writeFile } from '../src'
import { beforeFsTest } from './setup/utils'
import { dirPath, fileContent, filePath } from './setup/config'
import { existsSync, readdirSync, readFileSync } from 'node:fs'

beforeFsTest()

test('Write file', async () => {
  const resultBefore = existsSync(filePath)
  await writeFile(filePath, fileContent)
  const resultAfter = existsSync(filePath)
  const resultContent = readFileSync(filePath, { encoding: 'utf-8' })

  expect(resultBefore).toEqual(false)
  expect(resultAfter).toEqual(true)
  expect(resultContent).toEqual(fileContent)
})

test('Clear directory', async () => {
  const resultBefore = readdirSync(dirPath)
  await clearDir(dirPath)
  const resultAfter = readdirSync(dirPath)
  expect(resultBefore.length).toEqual(1)
  expect(resultAfter.length).toEqual(0)
})
