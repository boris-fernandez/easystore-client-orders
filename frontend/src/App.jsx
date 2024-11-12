import "./App.css";
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
        url: "/search",
        icon: Search,
      },
      {
        title: "Principal",
        url: "/",
        icon: Home,
      },
      {
        title: "Clientes",
        url: "/clientes",
        icon: SquareUser,
      },
      {
        title: "Pedidos",
        url: "/pedidos",
        icon: ShoppingBag,
      },
      {
        title: "Reportes",
        url: "/reportes",
        icon: ClipboardList,
      },
    ]

function App() {

  return (
    <>
        <SidebarProvider>
        <Sidebar collapsible="icon">     
        <SidebarTrigger />
          <SidebarContent>
            <SidebarGroup>
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
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        </SidebarProvider>

    </>
  );
}

export default App;
