
import { Outlet } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <Navigation />
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 min-h-screen">
          <div className="container py-6">
            <SidebarTrigger className="mb-6" />
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
