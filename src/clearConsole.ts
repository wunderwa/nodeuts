export const clearConsole = (isSoft = false): void => {
  process.stdout.write(isSoft ? '\x1B[H\x1B[2J' : '\x1B[2J\x1B[3J\x1B[H\x1Bc')
}
