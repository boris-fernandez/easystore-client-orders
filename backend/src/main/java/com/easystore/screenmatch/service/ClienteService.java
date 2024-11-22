package com.easystore.screenmatch.service;

import com.easystore.screenmatch.dto.ClienteDTO;
import com.easystore.screenmatch.exception.ResourceNotFoundException;
import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository repositorio;

    public List<ClienteDTO> convierteDatos(List<Cliente> cliente){
        return cliente.stream()
                .map(s -> new ClienteDTO(s.getClienteID(),s.getNombre(),s.getApellido(),s.getTelefono(),
                        s.getCorreo(),s.getFechaRegistro(),s.getEstado()))
                .collect(Collectors.toList());
    }

    public ClienteDTO guardarCliente(Cliente cliente) {
        Cliente clienteGuardado = repositorio.save(cliente);
        return new ClienteDTO(clienteGuardado.getClienteID(),clienteGuardado.getNombre(),clienteGuardado.getApellido(),
                clienteGuardado.getTelefono(),clienteGuardado.getCorreo(),clienteGuardado.getFechaRegistro(),clienteGuardado.getEstado());
    }

    public List<ClienteDTO> obtenerTodosLosClientes(){
        return convierteDatos(repositorio.findAll());
    }

    public List<ClienteDTO> obtenerConEstado(boolean estado) {
        return convierteDatos(repositorio.obtenerConEstado(estado));
    }

    public void agregarCliente() {
      // TODO Auto-generated method stub
      throw new UnsupportedOperationException("Unimplemented method 'agregarCliente'");
    }

    public void borrarCliente(Long id) {
        if (repositorio.existsById(id)) {
            repositorio.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Cliente no encontrado con id :: " + id);
        }
    }

    
        public Cliente actualizarCliente(Long id, Cliente clienteDetalles) {
            Cliente cliente = repositorio.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Cliente no encontrado para este id :: " + id));
    
            cliente.setNombre(clienteDetalles.getNombre());
            cliente.setApellido(clienteDetalles.getApellido());
            cliente.setTelefono(clienteDetalles.getTelefono());
            cliente.setCorreo(clienteDetalles.getCorreo());
            cliente.setEstado(clienteDetalles.getEstado());
    
            final Cliente clienteActualizado = repositorio.save(cliente);
            return clienteActualizado;
        }
    
    

}
