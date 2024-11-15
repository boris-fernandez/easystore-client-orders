package com.easystore.screenmatch.repository;

import com.easystore.screenmatch.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    @Query("select c from Cliente as c where c.estado = :estado")
    List<Cliente> obtenerConEstado(Boolean estado);
}
