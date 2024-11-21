package com.easystore.screenmatch.controller;

import com.easystore.screenmatch.dto.ClienteDTO;
import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    @Autowired
    private ClienteService service;

    @PostMapping
    public ResponseEntity<ClienteDTO> guardarCliente(@RequestBody Cliente cliente) {
        try {
            ClienteDTO nuevoClienteDTO = service.guardarCliente(cliente);
            return ResponseEntity.created(new URI("/clientes/" + nuevoClienteDTO.id())).body(nuevoClienteDTO);
        } catch (URISyntaxException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public List<ClienteDTO> obtenerTodosLosClientes(){
        return service.obtenerTodosLosClientes();
    }

    @GetMapping("/{estado}")
    public List<ClienteDTO> obtenerConEstado(@PathVariable Boolean estado) {
        return service.obtenerConEstado(estado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarCliente(@PathVariable Long id) {
        service.borrarCliente(id);
        return ResponseEntity.noContent().build();
    }


}
