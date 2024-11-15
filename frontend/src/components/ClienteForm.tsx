"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod" 
//https://zod.dev/
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios";

const apiUrl = process.env.VITE_API_URL;

const formSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  lastname: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }),
  cel: z.string().min(10, { message: "El celular debe tener al menos 10 caracteres" }), // Cambie a z.string() para validarlo como cadena
  email: z.string().email({ message: "El email no es válido" }),
  estado: z.boolean({ message: "El estado solo puede ser Activo o No Activo" }),
})

export function ClienteForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      lastname: "",
      cel: "",
      email: "",
      estado: true,
    },
  })

  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    // Envía los datos del formulario al backend.
    const response = await axios.post("${apiUrl}/clientes", values);
    console.log(response.data);
    alert("Cliente registrado exitosamente");
    form.reset(); // Resetea el formulario después de un envío exitoso
  } catch (error) {
    console.error("Error al registrar cliente", error);
    alert("Hubo un error al registrar el cliente.");
  }
}


  return (
    <>
      <h2>Registro Clientes</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
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
            name="lastname"
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
            name="cel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Celular</FormLabel>
                <FormControl>
                  <Input placeholder="Celular" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                  <> <input 
                    type="checkbox"
                    id="estado"
                    className="items-top flex space-x-2"
                  /></>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Registrar</Button>
        </form>
      </Form>
    </>
  )
}