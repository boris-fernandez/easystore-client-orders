package com.easystore.screenmatch.controller;

import com.easystore.screenmatch.dto.PedidoDTO;
import com.easystore.screenmatch.model.Pedido;
import com.easystore.screenmatch.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
    @Autowired
    private PedidoService service;

    @GetMapping
    public List<PedidoDTO> mostrarTodosPedido(){
        return service.mostrarTodosPedido();
    }

    @GetMapping("/{estado}")
    public List<PedidoDTO> mostrarPorEstado (@PathVariable boolean estado){
        return service.mostrarPorEstado(estado);
    }
}
