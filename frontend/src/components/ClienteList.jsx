import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Asegúrate de que esta ruta es correcta
import { Button } from "@/components/ui/button";
import useClienteStore from "../services/clienteService"; // Ruta al archivo del store

const ClienteList = () => {
  const {
    clientes,
    loading,
    error,
    editCliente,
    formData,
    fetchClientes,
    deleteCliente,
    updateCliente,
    setEditCliente,
    setFormData,
  } = useClienteStore();

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    await updateCliente(editCliente, formData);
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
                  {cliente.fecha_registro
                    ? new Date(cliente.fecha_registro).toLocaleDateString("es-ES")
                    : "Fecha no disponible"}
                </TableCell>
                <TableCell className="text-right">
                  {cliente.estado ? "Activo" : "Inactivo"}
                </TableCell>
                <TableCell>
                  <Button onClick={() => setEditCliente(cliente.id, cliente)}>Actualizar</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => deleteCliente(cliente.id)}>Borrar</Button>
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
