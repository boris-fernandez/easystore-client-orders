import { useState, useEffect } from "react";
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

const PedidoList = () => {
  const [pedidos, setPedidos] = useState([]); // Estado para la lista de pedidos
  const [loading, setLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/pedido"); // Cambia la URL según corresponda
        setPedidos(response.data); // Actualiza el estado con los datos
      } catch (err) {
        console.error("Error al obtener los pedidos:", err);
        setError("No se pudo cargar la lista de pedidos.");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchPedidos();
  }, []);

  if (loading) {
    return <p>Cargando pedidos...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <Table>
      <TableCaption>(Actualizar pagina al guardar pedido).</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id Pedido</TableHead>
          <TableHead>Id Cliente</TableHead>
          <TableHead>Fecha Pedido</TableHead>
          <TableHead>Total Pedido</TableHead>
          <TableHead>pedido</TableHead>
          <TableHead className="text-right">Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <TableRow key={pedido.pedidoID}>
              <TableCell>{pedido.pedidoID}</TableCell>
              <TableCell>{pedido.ClienteID}</TableCell>
              <TableCell>
                {pedido.fecha_registro && Array.isArray(pedido.fechaPedido)
                  ? new Date(
                      pedido.fechaPedido[0],
                      pedido.fechaPedido[1] - 1, // Mes en JavaScript empieza en 0
                      pedido.fechaPedido[2]
                    ).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Fecha no disponible"}
              </TableCell>
              <TableCell>{pedido.totalPedido}</TableCell>
              <TableCell>{pedido.pedido}</TableCell>
              <TableCell className="text-right">
                {pedido.estado ? "Activo" : "Inactivo"}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="text-center">
              No hay pedidos disponibles.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default PedidoList;
