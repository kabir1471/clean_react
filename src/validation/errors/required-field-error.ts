export class RequiredFieldError extends Error {
  constructor () {
    super('Requied')
    this.name = 'RequiredFieldError'
  }
}
