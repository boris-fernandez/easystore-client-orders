package com.easystore.screenmatch.dto;

public record ProductoDTO(
        Long producto_id,
        String nombre,
        String descripcion,
        Double precio,
        Integer stock) {
}
