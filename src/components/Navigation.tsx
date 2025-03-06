
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  LayoutDashboard,
  MapPin,
  LineChart,
  Bell,
  Sprout,
  Users,
  BookOpen,
  Phone,
  LogIn,
  Droplet,
  Leaf
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/sensors", icon: MapPin, label: "Soil Sensors" },
  { to: "/analysis", icon: LineChart, label: "Data Analysis" },
  { to: "/alerts", icon: Bell, label: "Alerts" },
  { to: "/farm", icon: Sprout, label: "Farm Management" },
  { to: "/users", icon: Users, label: "User Access" },
  { to: "/knowledge", icon: BookOpen, label: "Soil Knowledge" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-soil-600 to-leaf-600 flex items-center justify-center">
          <Leaf className="h-6 w-6 text-white" />
        </div>
        <div className="font-bold text-xl text-soil-800">SoilSense</div>
      </div>
      
      <nav className="p-2 space-y-1 flex-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200",
              "hover:bg-soil-50 text-soil-600 hover:text-soil-800",
              location.pathname === to 
                ? "bg-soil-100 text-soil-800 font-medium border-l-4 border-soil-600" 
                : ""
            )}
          >
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="p-4 mt-auto border-t border-soil-100">
        <Link to="/login" className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-soil-50 text-soil-600">
          <LogIn size={18} />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}
