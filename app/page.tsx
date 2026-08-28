import { Sidebar } from "@/components/dashboard/sidebar"
import { Topbar } from "@/components/dashboard/topbar"
import { StatsBar } from "@/components/dashboard/stats-bar"
import { Ministries } from "@/components/dashboard/ministries"
import { LawsPanel } from "@/components/dashboard/laws-panel"
import { CtaCards } from "@/components/dashboard/cta-cards"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
          <StatsBar />

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
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
