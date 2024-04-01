import { object, string } from 'zod';

export const signupSchema = object({
  email: string().email(),
  fullName: string(),
  phone: string(),
  date: string(),
  password: string().min(6)
});
