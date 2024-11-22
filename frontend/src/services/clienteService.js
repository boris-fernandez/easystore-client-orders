import { create } from "zustand";
import axios from "axios";

const useClienteStore = create((set) => ({
  clientes: [],
  loading: false,
  error: null,
  editCliente: null,
  formData: {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    estado: true,
  },

  // Fetch clientes from the API
  fetchClientes: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:8080/clientes");
      set({ clientes: response.data });
    } catch (error) {
      set({ error: "No se pudo cargar la lista de clientes." });
      console.error("Error al obtener los clientes:", error);
    } finally {
      set({ loading: false });
    }
  },

  setEditCliente: (id, cliente) =>
    set((state) => ({
      editCliente: id,
      formData: {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        telefono: cliente.telefono,
        correo: cliente.correo,
        estado: cliente.estado,
      },
    })),
  setFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),
}));
export default useClienteStore;
