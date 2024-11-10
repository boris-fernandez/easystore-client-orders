package com.easystore.screenmatch.controller;

import com.easystore.screenmatch.dto.ClienteDTO;
import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.repository.ClienteRepository;
import com.easystore.screenmatch.service.ClienteService;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    @Autowired
    private ClienteService service;


    @GetMapping()
    public List<ClienteDTO> obtenerTodasLasSeries(){
        return service.obtenerTodosClientes();
    }

    @GetMapping("/{estado}")
    public List<ClienteDTO> obtenerTodosConEstado(@PathVariable Boolean estado) {
        return service.obtenerTodosConEstado(estado);
    }
}
