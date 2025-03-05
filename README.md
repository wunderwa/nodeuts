# @wunderwa/nodets

Typescript node utils library

- [x] clearConsole: (isSoft = false) => void
- [x] clearDir: (path: string) => Promise<void>
- [x] removeDir: (path: string) => <void>
- [x] writeFile: (path: string, content: string) => Promise<void>
- [x] parseVersion: (version: string, up: 'major' | 'minor' | 'patch') => Version | null
- - [x] updateVersion: (version: string, up: 'major' | 'minor' | 'patch') => Version | null
- - - [x] updateSemver: (version: string, up: 'major' | 'minor' | 'patch') => string

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

npm unpublish stasige@0.3.0
```
