import * as z from "zod";

export const SignupVaidation = z.object({
    name: z.string().min(2, {message: 'Name is too short'}),
    username: z.string().min(2, {message: 'Username is too short'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 charecter'}),
  })