package com.easystore.screenmatch.repository;

import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.model.ItemsPedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemsPedidoRepository extends JpaRepository<ItemsPedido, Long> {
}
