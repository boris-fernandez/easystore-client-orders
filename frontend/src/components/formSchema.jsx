import { z } from "zod";

const formSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  apellido: z.string().min(1, "El apellido es requerido"),
  telefono: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  correo: z.string().email("Correo inválido"),
  estado: z.boolean(),
  fechaRegistro: z.string().refine(
    (date) => !isNaN(new Date(date).getTime()),
    "La fecha es inválida"
  ),
});


export default formSchema;
