"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Topbar } from "@/components/dashboard/topbar"
import { StatsBar } from "@/components/dashboard/stats-bar"
import { Ministries } from "@/components/dashboard/ministries"
import { LawsPanel } from "@/components/dashboard/laws-panel"
import { CtaCards } from "@/components/dashboard/cta-cards"

export function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full max-w-full overflow-x-hidden bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden p-3 sm:gap-6 sm:p-6">
          <StatsBar />

          <div className="grid min-w-0 gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <LawsPanel />
            <Ministries />
          </div>

          <CtaCards />

          <footer className="mt-2 flex flex-col items-center gap-1 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            <p>
              جميع الحقوق محفوظة لسيرفر{" "}
              <span className="font-bold text-primary">Empire Rp</span>
            </p>
            <p>
              تحت إشراف الحاكم <span className="font-semibold text-foreground">Raymond</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
