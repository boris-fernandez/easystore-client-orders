import { useEffect } from 'react';
import useClientesStore from '../services/clienteStore';

const ClientesList = () => {
  const { clientes, loading, error, fetchClientes } = useClientesStore();

  useEffect(() => {
    fetchClientes(); // Llama a la función para obtener los clientes al cargar el componente
  }, [fetchClientes]);

  if (loading) {
    return <p>Cargando clientes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nombre} {cliente.apellido} - {cliente.correo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientesList;
