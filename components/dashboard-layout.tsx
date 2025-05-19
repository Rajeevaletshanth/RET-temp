"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Building2, Home, LayoutDashboard, LogOut, Settings, User, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  // Determine if user is in builder or investor dashboard
  const isBuilder = pathname?.includes("/dashboard/builder")

  const builderNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/builder",
      icon: LayoutDashboard,
    },
    {
      title: "My Properties",
      href: "/dashboard/builder/properties",
      icon: Building2,
    },
    {
      title: "Add Property",
      href: "/dashboard/builder/add-property",
      icon: Building2,
    },
    {
      title: "Withdraw Funds",
      href: "/dashboard/builder/withdraw",
      icon: Wallet,
    },
    {
      title: "Analytics",
      href: "/dashboard/builder/analytics",
      icon: BarChart3,
    },
  ]

  const investorNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/investor",
      icon: LayoutDashboard,
    },
    {
      title: "My Investments",
      href: "/dashboard/investor/investments",
      icon: Building2,
    },
    {
      title: "Available Properties",
      href: "/dashboard/investor/properties",
      icon: Building2,
    },
    {
      title: "Portfolio",
      href: "/dashboard/investor/portfolio",
      icon: BarChart3,
    },
    {
      title: "Wallet",
      href: "/dashboard/investor/wallet",
      icon: Wallet,
    },
  ]

  const navItems = isBuilder ? builderNavItems : investorNavItems

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Building2 className="h-6 w-6" />
              <span>RealTokens</span>
            </Link>
            <SidebarTrigger className="ml-auto md:hidden" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="grid gap-4">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/settings">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/profile">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button className="w-full">
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Connected Wallet</p>
                  <p className="text-xs text-muted-foreground">0x1a2...3b4c</p>
                </div>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <div className="container mx-auto p-6">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  )
}
