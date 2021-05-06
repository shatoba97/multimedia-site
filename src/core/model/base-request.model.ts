export interface BaseRequestModel<T> {
  count: number,
  next: string,
  previous: string,
  results: T[];
}