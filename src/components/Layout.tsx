
import { Outlet } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-white to-soil-50">
        <Sidebar className="border-r border-soil-100">
          <SidebarContent>
            <Navigation />
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 min-h-screen">
          <div className="container py-6">
            <SidebarTrigger className="mb-6 text-soil-600 hover:bg-soil-100" />
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
