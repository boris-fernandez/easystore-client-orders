package com.easystore.screenmatch.controller;

import com.easystore.screenmatch.dto.ClienteDTO;
import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ClienteController {

    /*Ejemplo
    @GetMapping("/Cliente")
    public List<ClienteDTO> obtenerTodasLasSeries(){
        return
    }*/
}
