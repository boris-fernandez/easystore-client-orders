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
    </div>  
  );
}

export default App;
