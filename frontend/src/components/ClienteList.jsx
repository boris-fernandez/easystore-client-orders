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
import { Button } from "@/components/ui/button";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]); // Estado para la lista de clientes
  const [loading, setLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null); // Estado para errores
  const [editCliente, setEditCliente] = useState(null); // Estado para cliente en edición
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    estado: true,
  });

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEditClick = (cliente) => {
    setEditCliente(cliente.id);
    setFormData({
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      telefono: cliente.telefono,
      correo: cliente.correo,
      estado: cliente.estado,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/clientes/${editCliente}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updatedClientes = clientes.map((cliente) =>
        cliente.id === editCliente ? response.data : cliente
      );
      setClientes(updatedClientes);
      setEditCliente(null);
      alert("Cliente actualizado correctamente.");
    } catch (err) {
      console.error("Error al actualizar el cliente:", err);
      setError("No se pudo actualizar el cliente.");
    }
  };

  const borrarCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/clientes/${id}`); // Cambia la URL según corresponda
      const nuevoArray = clientes.filter((cliente) => cliente.id !== id);
      setClientes(nuevoArray);
    } catch (err) {
      console.error("Error al borrar el cliente:", err);
      setError("No se pudo borrar el cliente.");
    }
  };

  if (loading) {
    return <p>Cargando clientes...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <Table>
        <TableCaption>(Actualizar página al guardar cliente).</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id Cliente</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Fecha de Registro</TableHead>
            <TableHead className="text-right">Estado</TableHead>
            <TableHead>Actualizar</TableHead>
            <TableHead>Borrar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <TableRow key={cliente.id}>
                <TableCell>{cliente.id}</TableCell>
                <TableCell>{cliente.nombre}</TableCell>
                <TableCell>{cliente.apellido}</TableCell>
                <TableCell>{cliente.telefono}</TableCell>
                <TableCell>{cliente.correo}</TableCell>
                <TableCell>
                  {cliente.fecha_registro && Array.isArray(cliente.fecha_registro)
                    ? new Date(
                        cliente.fecha_registro[0],
                        cliente.fecha_registro[1] - 1, // Mes en JavaScript empieza en 0
                        cliente.fecha_registro[2]
                      ).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Fecha no disponible"}
                </TableCell>
                <TableCell className="text-right">
                  {cliente.estado ? "Activo" : "Inactivo"}
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditClick(cliente)}>Actualizar</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => borrarCliente(cliente.id)}>Borrar</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} className="text-center">
                No hay clientes disponibles.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {editCliente && (
        <form onSubmit={handleUpdateSubmit}>
          <h2>Actualizar Cliente</h2>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Correo:</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Estado:</label>
            <input
              type="checkbox"
              name="estado"
              checked={formData.estado}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Guardar Cambios</button>
          <button onClick={() => setEditCliente(null)}>Cancelar</button>
        </form>
      )}
    </>
  );
};

export default ClienteList;
