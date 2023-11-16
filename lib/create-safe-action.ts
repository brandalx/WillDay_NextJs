import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};
