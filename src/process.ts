import child_process from 'node:child_process'

export type ExecLog = 'all' | 'data' | 'error' | 'none'

export type ExecOptions = {
  cwd?: string
  log?: ExecLog
}

export const execLiveLog = async (
  cmd: string,
  { cwd = '.', log = 'none' }: ExecOptions = {},
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const response: string[] = []
    const command = child_process.exec(cmd, { cwd })

    command.stdout?.on('data', (output) => {
      response.push(output)
      if (['data', 'all'].includes(log ?? '')) console.log(output.toString())
    })
    command.stdout?.on('error', (output) => {
      if (['error', 'all'].includes(log ?? '')) console.log(output.toString())
      reject(output.toString())
    })

    command.stdout?.on('end', () => resolve(response))
  })
}
