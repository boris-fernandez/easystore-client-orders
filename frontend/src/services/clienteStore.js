import { create } from 'zustand';
import axios from 'axios';

const useClientesStore = create((set) => ({
  clientes: [],
  loading: false,
  error: null,
  fetchClientes: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('http://localhost:8080/clientes');
      set({ clientes: response.data, loading: false });
    } catch (error) {
      set({ error: 'Error al obtener los clientes', loading: false });
    }
  },
}));
export default useClientesStore;
