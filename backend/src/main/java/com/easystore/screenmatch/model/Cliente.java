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
    private String telefono;//se cambio a tipo string
    @Column(name = "correo")
    private String correo;
    @Column(name = "fecha_registro")
    private LocalDate fechaRegistro;
    @Column(name = "estado")
    private Boolean estado;
    @OneToMany(mappedBy = "clientes", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Pedido> pedidos;

    public Cliente(String nombre, String apellido, String telefono, String correo, Boolean estado, LocalDate fechaRegistro) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.estado = estado;
        this.fechaRegistro = LocalDate.now();
    }

}
