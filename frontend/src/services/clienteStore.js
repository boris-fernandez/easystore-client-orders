import { create } from 'zustand';
import axios from 'axios';

const useClientesStore = create((set) => ({
  clientes: [],
  loading: false,
  error: null,
  lastUpdated: null,
  fetchClientes: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('http://localhost:8080/clientes');
      set({ 
        clientes: response.data, 
        loading: false, 
        lastUpdated: new Date().toISOString() 
      });
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Error al obtener los clientes', 
        loading: false 
      });
    }
  },
}));

export default useClientesStore;
