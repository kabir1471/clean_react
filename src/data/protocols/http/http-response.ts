export type HttpResponse = {
  statusCode: number
  body?: any
}

export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 204
}
