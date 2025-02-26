import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Minimum 2 characters")
    .max(256, "Maximum 256 characters"),
  email: z.string().trim().email(),
  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .max(256, "Maximum 256 characters"),
});
