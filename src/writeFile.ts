import  {dirname} from 'node:path'
import  { existsSync, promises } from 'node:fs'

export const writeFile = async (
  path: string,
  content: string,
): Promise<void> => {
  const dir = dirname(path)
  if (!existsSync(dir)) {
    await promises.mkdir(dir, { recursive: true })
  }
  await promises.writeFile(path, content)
}
