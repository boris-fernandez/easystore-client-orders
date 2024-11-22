import "./App.css";

import ClienteList from "./components/ClienteList";
import ClientesForm from "./components/ClientesForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PedidoList from "./components/PedidoList";
import PedidoForm from "./components/PedidoForm";


function App() {
  return (
    <div className="container">
      <div className="item">
      <Card>
        <CardHeader>
          <CardTitle>Guardar Clientes</CardTitle>
          <CardDescription>Guardar Clientes</CardDescription>
        </CardHeader>
        <CardContent >
          <ClientesForm/>
        </CardContent>
      </Card>
      </div>
      <div className="item">
      <Card>
        <CardHeader>
          <CardTitle>Clientes Lista</CardTitle>
          <CardDescription>Manejo de Clientes</CardDescription>
        </CardHeader>
        <CardContent >
          <ClienteList/>
        </CardContent>
      </Card>
      </div>
      <div className="item">
      <Card>
        <CardHeader>
          <CardTitle>Guardar Pedido</CardTitle>
          <CardDescription>Guardar Pedido</CardDescription>
        </CardHeader>
        <CardContent >
          <PedidoForm/>
        </CardContent>
      </Card>
      </div>      
      <div className="item">
      <Card>
        <CardHeader>
          <CardTitle>Lista Pedidos</CardTitle>
          <CardDescription>Manejo de Pedidos</CardDescription>
        </CardHeader>
        <CardContent >
          <PedidoList/>
        </CardContent>
      </Card>
      </div>
    </div>  
  );
}

export default App;
