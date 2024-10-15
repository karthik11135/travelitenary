import z from "zod";

export const signupZodSchema = z.object({
  name: z.string().max(20),
  email: z.string().email(),
  password: z.string(),
  provider: z.string(),
});

export const loginZodSchema = z.object({
  email: z.string().email(), 
  password: z.string(), 
})

export type loginType = z.infer<typeof loginZodSchema>
export type signupType = z.infer<typeof signupZodSchema>
