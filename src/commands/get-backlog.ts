import {Command, Flags} from '@oclif/core'

export default class GetBacklog extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GetBacklog)
    // TODO: ここにコードを書く
    const name = flags.name ?? 'backlog'
    this.log(`hello ${name} from /Users/fscoward/ghq/github.com/FScoward/notion-sprint-tracker/src/commands/get-backlog.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
