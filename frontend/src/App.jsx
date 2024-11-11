import "./App.css";
import { Button } from "@/components/ui/button";
import {Search, Home, SquareUser, ShoppingBag, ClipboardList} from "lucide-react"
import {Sidebar, 
  SidebarProvider,
  SidebarTrigger, 
  SidebarHeader,
  SidebarContent,
  SidebarGroup, 
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,} from "@/components/ui/sidebar"

  // Menu items.
  const items = [
    {
      title: "Search",
      url: "search.jsx",
      icon: Search,
    },
    {
      title: "Principal",
      url: "#",
      icon: Home,
    },
    {
      title: "Clientes",
      url: "#",
      icon: SquareUser,
    },
    {
      title: "Pedido",
      url: "#",
      icon: ShoppingBag,
    },
    {
      title: "Reporte",
      url: "#",
      icon: ClipboardList,
    },
  ]

function App() {

  return (
    <>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarTrigger/>
          <SidebarHeader>
            <SidebarContent>
              <SidebarGroup />
              <SidebarGroupLabel>Tienda Facil</SidebarGroupLabel>
              <SidebarGroupContent>
              <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroup />
            </SidebarContent>
          </SidebarHeader>
        </Sidebar>
      </SidebarProvider>
      <Button>Hello World</Button>
    </>
  );
}

export default App;
