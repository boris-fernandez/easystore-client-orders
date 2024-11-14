import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, "El nombre de usuario debe tener al menos 2 caracteres").max(50, "El nombre de usuario no puede tener más de 50 caracteres"),
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  phone: z.string().min(10, "El celular debe tener al menos 10 caracteres").max(15, "El celular no puede tener más de 15 caracteres"),
  email: z.string().email("Debe ser un email válido"),
});
