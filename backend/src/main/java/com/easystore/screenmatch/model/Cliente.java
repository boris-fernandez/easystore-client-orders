package com.easystore.screenmatch.model;

import jakarta.persistence.*;

import javax.lang.model.element.Name;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Clientes")
public class Cliente {
    @Id
    @Column(name = "cliente_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clienteID;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "apellido")
    private String apellido;
    @Column(name = "telefono")
    private Integer telefono;
    @Column(name = "correo")
    private String correo;
    @Column(name = "fecha_registro")
    private LocalDate fechaRegistro;
    @Column(name = "estado")
    private String estado;
    @OneToMany(mappedBy = "clientes", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Pedido> pedidos;

    public Cliente(String nombre, String apellido, Integer telefono, String correo, String estado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.estado = estado;
        this.fechaRegistro = LocalDate.now();
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public LocalDate getFecha_registro() {
        return fechaRegistro;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Integer getTelefono() {
        return telefono;
    }

    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        pedidos.forEach(e -> e.setClientes(this));
        this.pedidos = pedidos;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public void setFecha_registro(LocalDate fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    @Override
    public String toString() {
        return  "nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", telefono=" + telefono +
                ", correo=" + correo +
                ", fecha_registro=" + fechaRegistro +
                ", estado='" + estado + '\'' +
                ", pedidos=" + pedidos;
    }
}
