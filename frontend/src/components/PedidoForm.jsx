import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form"; 
import { Input } from "./ui/input"; 
import axios from "axios"
import pedidosFormSchema from "./pedidosFormSchema";


const PedidoForm = () => {
  const form = useForm({
    resolver: zodResolver(pedidosFormSchema),
    defaultValues: {
      cliente: "",
      estado: true,
      fechaPedido: "",
      totalPedido: "",
      pedido: "",
    }
  });

  const API_URL = "http://localhost:8080/pedido";

  const onSubmit = async (data) => {
    try {
      console.log("Enviando datos:", data);
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Pedido guardado con éxito:", response.data);
      alert("Pedido guardado correctamente.");

      form.reset(); // Resetear formulario

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud de Axios:", error.response?.data || error.message);
        alert(`Error al guardar el Pedido: ${error.response?.data?.message || error.message}`);
      } else {
        console.error("Error inesperado:", error);
        alert("Error al guardar el Pedido. Por favor, inténtalo de nuevo.");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="cliente"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cliente</FormLabel>
              <FormControl>
                <Input placeholder="Cliente" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fechaPedido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Pedido</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  placeholder="Selecciona una fecha"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="totalPedido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Pedido</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Total Pedido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pedido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pedido</FormLabel>
              <FormControl>
                <Input placeholder="Pedido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="estado"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <FormControl>
                <Input type="checkbox" {...field} checked={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button type="submit" className="btn btn-primary">
          Guardar Pedido
        </button>
      </form>
    </Form>
  );
};

export default PedidoForm;