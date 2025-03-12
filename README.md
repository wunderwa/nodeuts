# @wunderwa/nodeuts

Typescript node utils library

```typescript
// like shell 'clear'
type clearConsole = (isSoft: boolean) => void

// like shell 'rm -r path/*'
type clearDir = (path: string) => Promise<void>

// like shell 'rm -r path'
type removeDir = (path: string) => void

// creates non-existent directories in path
type writeFile = (path: string, content: string) => Promise<void>

export type Version = { major: number; minor: number; patch: number }
type ParseVersion = (version: string) => Version | null
parseVersion('0.0.0') //  => { major: 0,  minor: 0, patch: 0}

type UpdateVersion = (
  version: string,
  up: 'major' | 'minor' | 'patch',
) => Version | null
updateVersion('0.2.9', 'major') //  => { major: 1,  minor: 0, patch: 0}
updateVersion('0.2.9', 'minor') //  => { major: 0,  minor: 3, patch: 0}
updateVersion('0.2.9', 'patch') //  => { major: 0,  minor: 2, patch: 10}

type UpdateSemver = (version: string, up: 'major' | 'minor' | 'patch') => string
updateSemver('0.2.9', 'major') //  => '1.0.0'
updateSemver('0.2.9', 'minor') //  => '0.3.0'
updateSemver('0.2.9', 'patch') //  => '0.2.10'

type initReadLine = () => readline.Interface
const answer = await read.question('Entr answer')

// exec
export type ExecOptions = {
  cwd?: string
  log?: 'all' | 'data' | 'error' | 'none'
}
type execLiveLog = (
  cmd: string,
  { cwd = '.', log = 'none' }: ExecOptions,
) => Promise<string[]>
```
