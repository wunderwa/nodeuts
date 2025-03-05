import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export const initReadLine = (): readline.Interface =>
  readline.createInterface({ input, output })
