import { envSchema } from './env.schema';

/**
 * Note: Only environment variables that start with 'NEXT_PUBLIC_' are
 * explicitly defined, while other environment variables are spread from
 * process.env
 */
export const config = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});
