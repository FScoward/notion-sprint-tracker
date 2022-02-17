import {expect, test} from '@oclif/test'

describe('get-backlog', () => {
  test
  .stdout()
  .command(['get-backlog'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['get-backlog', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
