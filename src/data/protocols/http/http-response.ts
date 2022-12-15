export type HttpResponse = {
  statusCode: number
  body?: any
}

export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  ok = 200,
  serverError = 500
}
