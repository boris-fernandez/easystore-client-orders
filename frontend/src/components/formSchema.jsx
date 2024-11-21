import { z } from "zod";

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  apellido: z
    .string()
    .min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
  telefono: z
    .string()
    .length(10, { message: "El teléfono debe tener exactamente 10 caracteres." }),
  correo: z
    .string()
    .email({ message: "El correo no es válido." }),
  estado: z
    .boolean().refine((val) => typeof val === "boolean", { message: "Debe ser verdadero o falso." }),
});

export default formSchema;
