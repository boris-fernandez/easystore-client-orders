package com.easystore.screenmatch.service;

import com.easystore.screenmatch.dto.ClienteDTO;
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

}
