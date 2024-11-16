"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 

export type Cliente = {
  id: number
  nombre: string
  apellido: string
  celular: number
  email: string
  fecha: Date
    estado: "activo" | "no activo"

}
 
export const columns: ColumnDef<Cliente>[] = [
  {
    accessorKey: "id",
    header: "Cliente_Id",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "apellido",
    header: "Apellido",
  },
  {
    accessorKey: "celular",
    header: "Celular",
  },  {
    accessorKey: "email",
    header: "Email",
  },  {
    accessorKey: "fecha",
    header: "Fecha Registro",
  },  {
    accessorKey: "estado",
    header: "Estado",
  },
]