import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Asegúrate de que esta ruta es correcta
import axios from "axios";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]); // Estado para la lista de clientes
  const [loading, setLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/clientes"); // Cambia la URL según corresponda
        setClientes(response.data); // Actualiza el estado con los datos
      } catch (err) {
        console.error("Error al obtener los clientes:", err);
        setError("No se pudo cargar la lista de clientes.");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchClientes();
  }, []);

  if (loading) {
    return <p>Cargando clientes...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <Table>
      <TableCaption>Lista de Clientes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id Cliente</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Apellido</TableHead>
          <TableHead>Teléfono</TableHead>
          <TableHead>Correo</TableHead>
          <TableHead>Fecha de Registro</TableHead>
          <TableHead className="text-right">Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <TableRow key={cliente.clienteID}>
              <TableCell>{cliente.clienteID}</TableCell>
              <TableCell>{cliente.nombre}</TableCell>
              <TableCell>{cliente.apellido}</TableCell>
              <TableCell>{cliente.telefono}</TableCell>
              <TableCell>{cliente.correo}</TableCell>
              <TableCell>
                {new Date(cliente.fechaRegistro).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                {cliente.estado ? "Activo" : "Inactivo"}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="text-center">
              No hay clientes disponibles.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ClienteList;
