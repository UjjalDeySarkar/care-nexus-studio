import { 
  LayoutDashboard, 
  Building2, 
  Hotel, 
  Bed, 
  Ambulance, 
  Stethoscope, 
  UserCog, 
  Users, 
  ClipboardList, 
  FlaskConical, 
  Home,
  AlertCircle
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Hospitals", url: "/hospitals", icon: Building2 },
  { title: "Hotels", url: "/hotels", icon: Hotel },
  { title: "Rooms", url: "/rooms", icon: Bed },
  { title: "Emergency Services", url: "/emergency", icon: AlertCircle },
  { title: "Home Care", url: "/home-care", icon: Home },
  { title: "Doctors", url: "/doctors", icon: Stethoscope },
  { title: "Admissions", url: "/admissions", icon: ClipboardList },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Ambulances", url: "/ambulances", icon: Ambulance },
  { title: "Lab Tests", url: "/lab-tests", icon: FlaskConical },
  { title: "Staff", url: "/staff", icon: UserCog },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={`glass-card border-r transition-all ${isCollapsed ? 'w-16' : 'w-64'}`} collapsible="icon">
      <SidebarContent>
        <div className="px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-lg font-semibold text-foreground">HealthCare</h1>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "justify-center px-2" : ""}>
            {!isCollapsed && "Management"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-sidebar-accent"
                      activeClassName="bg-gradient-primary text-white shadow-glow"
                    >
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
