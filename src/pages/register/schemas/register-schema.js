import {z} from "zod" 

export const registerSchema = z.object({
  name: z.string().trim().min(3, 'Name minimal 3 karakter'),
  email: z.email(),
  password: z.string().min(8, " password minimal * karakter"),
})

export default registerSchema