import {React} from "react"
import {Search, Home, SquareUser, ShoppingBag, ClipboardList} from "lucide-react"
import {Sidebar, 
    SidebarProvider,
    SidebarTrigger, 
    SidebarContent,
    SidebarGroup, 
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem} from "@/components/ui/sidebar"
    import {Link} from 'react-router-dom'


     // Menu items.
     const items = [
        {
          title: "Search",
          to: "/search",
          icon: Search,
        },
        {
          title: "Principal",
          to: "/",
          icon: Home,
        },
        {
          title: "Clientes",
          to: "/clientes",
          icon: SquareUser,
        },
        {
          title: "Pedidos",
          to: "/pedidos",
          icon: ShoppingBag,
        },
        {
          title: "Reportes",
          to: "/reportes",
          icon: ClipboardList,
        },
      ]
  

function AppSidebar() {
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
                        <Link to={item.to}>
                        <item.icon />
                        <span>{item.title}</span>
                        </Link>
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
  )
}

export default AppSidebar