export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
  error?: string;
}

export interface HttpRequest<B> {
  body: B;
  params?: string;
  headers?: string;
}
