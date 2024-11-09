package com.easystore.screenmatch.repository;

import com.easystore.screenmatch.model.Cliente;
import com.easystore.screenmatch.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
