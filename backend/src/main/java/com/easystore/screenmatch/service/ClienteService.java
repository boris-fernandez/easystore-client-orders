package com.easystore.screenmatch.service;

import com.easystore.screenmatch.dto.ClienteDTO;
import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

@Service
public class ClienteService {
    private Scanner teclado = new Scanner(System.in);

    @Autowired
    private ClienteRepository repositorio;

    public List<ClienteDTO> convierteDatos(List<Cliente> serie){
        return serie.stream()
                .map(s -> new ClienteDTO(s.getClienteID(),s.getNombre(),s.getApellido(),s.getTelefono(),
                        s.getCorreo(),s.getFechaRegistro(),s.getEstado()))
                .collect(Collectors.toList());
    }

    /*public void agregarCliente() {
        System.out.println("Escribe el nombre del cliente");
        String nombreCliente = teclado.nextLine();
        nombreCliente = nombreCliente.substring(0, 1).toUpperCase() + nombreCliente.substring(1).toLowerCase();
        System.out.println("Escribe el apellido del cliente");
        String apellidoCliente = teclado.nextLine();
        apellidoCliente = apellidoCliente.substring(0,1).toUpperCase() + apellidoCliente.substring(1).toLowerCase();
        System.out.println("Escribe el telefono del cliente");
        Integer telefonoCliente = teclado.nextInt();
        teclado.nextLine();
        System.out.println("Escribe el correo del cliente");
        String correoCliente = teclado.nextLine();
        System.out.println("Escribe el estado del cliente");
        String estadoCliente = teclado.nextLine();
        boolean bEstadoCliente = false;
        if (estadoCliente.equalsIgnoreCase("Activo")){
            bEstadoCliente = true;
        } else if (estadoCliente.equalsIgnoreCase("Inactivo")) {
            bEstadoCliente = false;
        }else {
            System.out.println("Valor incorrecto");
        }
        estadoCliente = estadoCliente.substring(0,1).toUpperCase() + estadoCliente.substring(1).toLowerCase();
        Cliente cliente = new Cliente(nombreCliente, apellidoCliente, telefonoCliente, correoCliente, bEstadoCliente);
        System.out.println(cliente);
        repositorio.save(cliente);
    }*/

    public List<ClienteDTO> obtenerTodosClientes(){
        return convierteDatos(repositorio.findAll());
    }

    public List<ClienteDTO> obtenerTodosConEstado(Boolean estado) {
        return convierteDatos(repositorio.obtenerTodosConEstado(estado));
    }

}
