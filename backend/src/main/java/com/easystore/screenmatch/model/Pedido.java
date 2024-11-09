package com.easystore.screenmatch.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Locale;

@Entity
@Table(name = "Pedidos")
public class Pedido {
    @Id
    @Column(name = "pedidos_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clienteID;
    @Column(name = "fecha_pedido")
    private LocalDate fechaPedido;
    @Column(name = "estado")
    private String estado;
    @Column(name = "total_pedido")
    private Double totalPedido;
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente clientes;
    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<ItemsPedido> itemsPedidos;

    public Pedido(String estado) {
        this.estado = estado;
        this.fechaPedido = LocalDate.now();
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }


    public Cliente getClientes() {
        return clientes;
    }

    public void setClientes(Cliente clientes) {
        this.clientes = clientes;
    }

    public LocalDate getFechaPedido() {
        return fechaPedido;
    }

    public Double getTotalPedido() {
        return totalPedido;
    }

    public List<ItemsPedido> getItemsPedidos() {
        return itemsPedidos;
    }

    public void setItemsPedidos(List<ItemsPedido> itemsPedidos) {
        this.itemsPedidos = itemsPedidos;
    }



    @Override
    public String toString() {
        return  "fechaPedido=" + fechaPedido +
                ", estado='" + estado + '\'' +
                ", totalPedido=" + totalPedido +
                ", clientes=" + clientes;
    }
}
