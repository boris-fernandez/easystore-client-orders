import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ClienteForm from "@/components/ClienteForm"
import ClienteList from "@/components/ClienteList"


function HomePage() {
  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>Pricipal</CardTitle>
        <CardDescription>Este sistema permitirá a los empleados de la tienda registrar
           y gestionar la información de los clientes y realizar seguimiento de 
           pedidos activos y pendientes.</CardDescription>
      </CardHeader>
      <CardContent>
        <section>
          <article>
            <ClienteForm/>
          </article>
          <article>
            <ClienteList/>
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

export default HomePage