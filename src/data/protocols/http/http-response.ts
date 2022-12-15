export type HttpResponse<T> = {
  statusCode: number
  body?: T
}

export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  ok = 200,
  serverError = 500
}
