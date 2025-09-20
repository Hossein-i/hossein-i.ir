import { envSchema } from './env.schema';

export const config = envSchema.parse(process.env);
