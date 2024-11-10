package com.easystore.screenmatch.dto;

import java.time.LocalDate;

public record ClienteDTO(
        Long id,
        String nombre,
        String apellido,
        Integer telefono,
        String correo,
        LocalDate fecha_registro,
        Boolean estado) {
}
