import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Blocks, Home, ShoppingBag, User } from "lucide-react";
import { NavLink } from "react-router";

const menuItems = [
  { name: "Home", path: "/", icons: Home },
  { name: "Shop", path: "/shop", icons: ShoppingBag },
  { name: "Featured", path: "/#featured", icons: Blocks },
  { name: "Profile", path: "/profile", icons: User },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <NavLink href={item.path} to={item.path}>
                    <item.icons />
                    <span>{item.name}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
