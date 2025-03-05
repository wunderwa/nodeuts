import { parseVersion, updateSemver } from '../src'

test('parse version correctly 0.0.1', () => {
  const result = parseVersion('0.0.1')
  expect(result).toEqual({
    major: 0,
    minor: 0,
    patch: 1,
  })
})

test('parse version correctly 1.0.0', () => {
  const result = parseVersion('1.0.0')
  expect(result).toEqual({
    major: 1,
    minor: 0,
    patch: 0,
  })
})

test('parse version correctly 123.956.563', () => {
  const result = parseVersion('123.956.563')
  expect(result).toEqual({
    major: 123,
    minor: 956,
    patch: 563,
  })
})

test('parse version incorrectly 0.0.01', () => {
  const result = parseVersion('0.0.01')
  expect(result).toEqual(null)
})

test('updateSemver patch', () => {
  const result = updateSemver('0.0.1', 'patch')
  expect(result).toEqual('0.0.2')
})

test('updateSemver minor', () => {
  const result = updateSemver('0.0.2', 'minor')
  expect(result).toEqual('0.1.0')
})

test('updateSemver minor', () => {
  const result = updateSemver('0.1.2', 'major')
  expect(result).toEqual('1.0.0')
})
