package com.easystore.screenmatch.repository;

import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    @Query("select p from Pedido as p where p.estado = :estado")
    public List<Pedido> mostrarPorEstado(boolean estado);

}
