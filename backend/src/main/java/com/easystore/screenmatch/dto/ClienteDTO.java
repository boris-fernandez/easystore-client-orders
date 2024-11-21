package com.easystore.screenmatch.dto;

import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.model.ItemsPedido;

import java.time.LocalDate;
import java.util.List;

public record ClienteDTO(
        Long id,
        String nombre,
        String apellido,
        String telefono, //se cambio a tipo string
        String correo,
        LocalDate fecha_registro,
        Boolean estado) {
}
