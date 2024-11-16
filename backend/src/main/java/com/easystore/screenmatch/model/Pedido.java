package com.easystore.screenmatch.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;


@Setter
@Getter
@NoArgsConstructor
@ToString
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
    private Boolean estado;
    @Column(name = "total_pedido")
    private Double totalPedido;
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente clientes;
    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<ItemsPedido> itemsPedidos;
}
