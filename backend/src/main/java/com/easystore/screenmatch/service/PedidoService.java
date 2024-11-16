package com.easystore.screenmatch.service;

import com.easystore.screenmatch.dto.PedidoDTO;
import com.easystore.screenmatch.model.Pedido;
import com.easystore.screenmatch.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository repository;

    public List<PedidoDTO> convierteDatos(List<Pedido> pedido){
        return pedido.stream()
                .map(s -> new PedidoDTO(s.getClienteID(), s.getFechaPedido(), s.getEstado(),
                        s.getTotalPedido(), s.getItemsPedidos()))
                .collect(Collectors.toList());
    }

    public PedidoDTO guardarPedido(Pedido pedido){
        Pedido pedidoguardado = repository.save(pedido);
        return new PedidoDTO(pedidoguardado.getClienteID(), pedidoguardado.getFechaPedido(), pedidoguardado.getEstado(),
                pedidoguardado.getTotalPedido(), pedidoguardado.getItemsPedidos());
    }

    public List<PedidoDTO> mostrarTodosPedido(){
        return convierteDatos(repository.findAll());
    }

    public List<PedidoDTO> mostrarPorEstado(boolean estado){
        return convierteDatos(repository.mostrarPorEstado(estado));
    }



}
