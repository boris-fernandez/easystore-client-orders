import { z } from "zod";

const pedidosFormSchema = z.object({
  cliente: z.string().min(1, "El cliente es requerido"),
  estado: z.boolean(),
  fechaPedido: z.string().refine(
    (date) => !isNaN(new Date(date).getTime()),
    "La fecha es inválida"
  ),
  totalPedido: z.string().min(2, "El total del pedido es requerido"),
  pedido: z.string()
});


export default pedidosFormSchema;
