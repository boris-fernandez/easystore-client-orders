package com.easystore.screenmatch.model;

import jakarta.persistence.*;

@Entity
@Table(name = "itemsPedidoDTO")
public class ItemsPedido {
    @Id
    @Column(name = "items_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemsID;
    @Column(name = "cantidad")
    private Integer cantidad;
    @Column(name = "precio_unitario")
    private Double precioUnitario;
    @ManyToOne
    @JoinColumn(name = "pedidos_id")
    private Pedido pedido;
    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    public ItemsPedido(Integer cantidad, Double precioUnitario) {
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Double getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario(Double precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    @Override
    public String toString() {
        return  "cantidad=" + cantidad +
                ", precio_unitario=" + precioUnitario +
                ", pedido=" + pedido +
                ", producto=" + producto;
    }
}
