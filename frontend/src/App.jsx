import "./App.css";
import AppSidebar from "@/components/ui/AppSidebar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ClientesPage from "./pages/ClientesPage";
import PedidosPage from "./pages/PedidosPage";
import ReportesPage from "./pages/ReportesPage";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


function App() {
  return (
      <Router   future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      >
        <div className="sidebar">
        <AppSidebar/>
        </div>
      <div className="main-content">
      <Routes>
            <Route
                path="/reportes"
                element={<ReportesPage/>}
            />

            <Route
                path="/pedidos"
                element={<PedidosPage/>}
            />

            <Route
                path="/clientes"
                element={<ClientesPage/>}
            />

            <Route
                path="/search"
                element={<SearchPage/>}
            />
 
            <Route
                path="/"
                element={<HomePage/>}
            />
        
      </Routes>
      </div>
    </Router>
  );
}

export default App;
