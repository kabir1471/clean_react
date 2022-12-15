export class UnexpectedError extends Error {
  constructor () {
    super('unexpected error')
    this.name = 'UnexpectedError'
  }
}
