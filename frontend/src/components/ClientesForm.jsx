import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "./formSchema"; 
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form"; 
import { Input } from "./ui/input"; 
import axios from "axios"


const ClientesForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      estado: true,
    },
  });

  const API_URL = "http://localhost:8080/clientes";

  const onSubmit = async (data) => {
    try {
      console.log("Enviando datos:", data);
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Cliente guardado con éxito:", response.data);
      alert("Cliente guardado correctamente.");

      form.reset(); // Resetear formulario

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud de Axios:", error.response?.data || error.message);
        alert(`Error al guardar el cliente: ${error.response?.data?.message || error.message}`);
      } else {
        console.error("Error inesperado:", error);
        alert("Error al guardar el cliente. Por favor, inténtalo de nuevo.");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apellido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="Apellido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefono"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="Teléfono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="correo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="Correo Electrónico" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fechaRegistro"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Registro</FormLabel>
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
          Guardar Cliente
        </button>
      </form>
    </Form>
  );
};

export default ClientesForm;
