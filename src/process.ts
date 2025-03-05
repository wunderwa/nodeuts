import child_process from 'node:child_process'
import { promisify } from 'node:util'

export const exec = promisify(child_process.exec)

export const execLiveLog = async (cmd: string, cwd: string, log = true) => {
  return new Promise((resolve) => {
    const { exec } = child_process
    const command = exec(cmd, { cwd })
    command.stdout?.on('data', (output) => {
      if (log) console.log(output.toString())
    })
    command.stdout?.on('error', (output) => {
      if (log) console.log(output.toString())
    })
    command.stdout?.on('end', () => resolve(''))
  })
}
