import { Cliente, columns } from "./ColClientes"
import { DatosClientes } from "./DatosClientes"
import axios from 'axios'
import { useEffect, useState } from "react";

async function getData(): Promise<Cliente[]> {
  // Fetch data from your API here.
    try {
      const response = await axios.get("http://localhost/clientes"); // URL de tu API
      return response.data; // Axios parsea los datos automáticamente
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud de Axios:", error.response?.data || error.message);
      } else {
        console.error("Error inesperado:", error);
      }
      return []; // Retornamos un arreglo vacío en caso de error
    }
  }

  const ClienteList: React.FC = () =>{ 
    // Usamos useState para manejar el estado de los datos
    const [data, setData] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Estado de carga
    const [error, setError] = useState<string | null>(null); // Estado de error
  
    // useEffect para cargar los datos cuando el componente se monta
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Marcamos como cargando
        setError(null); // Limpiamos el error
        try {
          const fetchedData = await getData();
          setData(fetchedData); // Actualizamos el estado con los datos obtenidos
        } catch (error) {
          setError("Hubo un error al cargar los datos.");
        } finally {
          setLoading(false); // Terminamos de cargar
        }
      };
  
      fetchData(); // Llamamos a la función para obtener los datos
    }, []); // El arreglo vacío asegura que solo se ejecute una vez, al montar el componente
  
    // Renderizado condicional según el estado de carga
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    // ...
    const DemoPage: React.FC = () => {
      // Usamos useState para manejar el estado de los datos
      const [data, setData] = useState<Cliente[]>([]);
      const [loading, setLoading] = useState<boolean>(true); // Estado de carga
      const [error, setError] = useState<string | null>(null); // Estado de error
    
      // useEffect para cargar los datos cuando el componente se monta
      useEffect(() => {
        const fetchData = async () => {
          setLoading(true); // Marcamos como cargando
          setError(null); // Limpiamos el error
          try {
            const fetchedData = await getData();
            setData(fetchedData); // Actualizamos el estado con los datos obtenidos
          } catch (error) {
            setError("Hubo un error al cargar los datos.");
          } finally {
            setLoading(false); // Terminamos de cargar
          }
        };
    
        fetchData(); // Llamamos a la función para obtener los datos
      }, []); // El arreglo vacío asegura que solo se ejecute una vez, al montar el componente
    
      // Renderizado condicional según el estado de carga
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

  return (
    <div className="container mx-auto py-10">
      <DatosClientes columns={columns} data={data} />
    </div>
  )
}
}
export default ClienteList;