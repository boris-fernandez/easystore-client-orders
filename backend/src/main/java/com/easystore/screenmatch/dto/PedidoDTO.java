package com.easystore.screenmatch.dto;

import com.easystore.screenmatch.model.ItemsPedido;

import java.time.LocalDate;
import java.util.List;

public record PedidoDTO(
        Long pedidos_id,
        LocalDate fecha_pedido,
        Boolean estado,
        String total_pedido,//se cambio a tipo string
        List<ItemsPedido> itemsPedidos) {
}
