import { Result } from "./result.model";

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}
