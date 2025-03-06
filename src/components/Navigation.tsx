
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  LayoutDashboard,
  Map,
  LineChart,
  Bell,
  Sprout,
  Users,
  BookOpen,
  Phone,
  LogIn
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/sensors", icon: Map, label: "Sensors" },
  { to: "/analysis", icon: LineChart, label: "Analysis" },
  { to: "/alerts", icon: Bell, label: "Alerts" },
  { to: "/farm", icon: Sprout, label: "Farm" },
  { to: "/users", icon: Users, label: "Users" },
  { to: "/knowledge", icon: BookOpen, label: "Knowledge" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="p-4 space-y-2">
      {navItems.map(({ to, icon: Icon, label }) => (
        <Link
          key={to}
          to={to}
          className={cn(
            "nav-link",
            location.pathname === to && "active"
          )}
        >
          <Icon size={20} />
          <span>{label}</span>
        </Link>
      ))}
      <Link to="/login" className="nav-link mt-auto">
        <LogIn size={20} />
        <span>Login</span>
      </Link>
    </nav>
  );
}
