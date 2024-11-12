import React from 'react'
import PedidoForm from "@/components/PedidoForm"
import PedidoList from "@/components/PedidoList"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function PedidosPage() {
  return (
    <>
      <Card>
      <CardHeader>
        <CardTitle>Pedidos</CardTitle>
        <CardDescription>Este sistema permitirá a los empleados de la tienda registrar,
           gestionar, realizar seguimiento de 
           pedidos activos y pendientes.</CardDescription>
      </CardHeader>
      <CardContent>
        <section>
          <article>
            <PedidoForm/>
          </article>
          <article>
            <PedidoList/>
          </article>
        </section>
      </CardContent>
      <CardFooter>
        <p>Tienda Facil</p>
      </CardFooter>
    </Card>
    </>
  )
}

export default PedidosPage