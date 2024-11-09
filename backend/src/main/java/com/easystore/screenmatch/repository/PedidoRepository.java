package com.easystore.screenmatch.repository;

import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
