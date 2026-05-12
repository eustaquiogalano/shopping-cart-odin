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
  { name: "Home", path: "/home", icons: Home },
  { name: "Store", path: "/home/shop", icons: ShoppingBag },
  { name: "Featured", path: "/home/#featured", icons: Blocks },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      className=" py-[1rem] pl-[1rem] pr-[0rem] rounded-lg"
    >
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink to="/profile">
                <User />
                <span>Profile</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
