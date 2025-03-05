type Version = {
  major: number
  minor: number
  patch: number
}

type VersionLevel = 'major' | 'minor' | 'patch'

export const parseVersion = (version: string): Version | null => {
  const parsed = version.match(
    /^(0|[1-9]+[0-9]*)\.(0|[1-9]+[0-9]*).(0|[1-9]+[0-9]*)$/,
  )
  if (parsed) {
    return {
      major: parseInt(parsed[1]),
      minor: parseInt(parsed[2]),
      patch: parseInt(parsed[3]),
    }
  }
  return null
}

export const updateVersion = (
  version: string,
  up: VersionLevel,
): Version | null => {
  const parsed = parseVersion(version)
  if (!parsed) {
    return null
  }
  const { major, minor, patch } = parsed
  if (up === 'patch') {
    return { major, minor, patch: patch + 1 }
  }
  if (up === 'minor') {
    return { major, minor: minor + 1, patch: 0 }
  }
  if (up === 'major') {
    return { major: major + 1, minor: 0, patch: 0 }
  }
  return null
}

export const updateSemver = (
  version: string,
  up: VersionLevel,
): string | null => {
  const v = updateVersion(version, up)
  return v ? `${v.major}.${v.minor}.${v.patch}` : null
}
