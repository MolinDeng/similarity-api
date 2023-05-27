import { ApiKey } from '@prisma/client';
import { ZodAny, ZodIssue } from 'zod'; // schema validation

export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokeApiData {
  error: string | ZodAny[] | null;
  sucess: boolean;
}
