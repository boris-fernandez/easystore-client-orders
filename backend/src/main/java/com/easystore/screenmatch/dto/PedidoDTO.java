package com.easystore.screenmatch.dto;

import java.time.LocalDate;

public record PedidoDTO(
        Long pedidos_id,
        LocalDate fecha_pedido,
        String estado,
        Double total_pedido) {
}
