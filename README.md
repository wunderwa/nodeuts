# @wunderwa/nodets

Typescript node utils library

```typescript
type clearConsole = (isSoft: boolean) => void
type clearDir = (path: string) => Promise<void>
type removeDir = (path: string) => void
type writeFile = (path: string, content: string) => Promise<void>
type parseVersion = (
  version: string,
  up: 'major' | 'minor' | 'patch',
) => Version | null
type updateVersion = (
  version: string,
  up: 'major' | 'minor' | 'patch',
) => Version | null
type updateSemver = (version: string, up: 'major' | 'minor' | 'patch') => string
type initinitReadLine = () => readline.Interface
type ExecOptions = {
  cwd?: string
  log?: ExecLog
}
type execLiveLog = (
  cmd: string,
  { cwd = '.', log = 'none' }: ExecOptions,
) => Promise<string[]>
```

### Releases (add tag)

```shell
git tag -a v0.1.0 2004632 -m 'v0.1.0'
git push origin v0.1.0
```

### Releases (npm)

```shell
yarn build
npm login
npm publish --access public

npm unpublish @wunderwa/nodeuts@0.1.1
```
