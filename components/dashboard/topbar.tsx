"use client"

import { Search, Sun } from "lucide-react"

export function Topbar() {
  return (
    <header className="flex items-center gap-4 border-b border-border bg-sidebar/60 px-6 py-4">
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-medium text-muted-foreground">Empire Rp |</span>
        <span className="text-base font-bold text-foreground">النظام الإداري العسكري</span>
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        <Search className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="ابحث في القوانين، الأقسام أو القطاعات..."
          className="w-full rounded-lg border border-border bg-secondary/60 py-2.5 pe-10 ps-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm">
          <span className="text-emerald-400">متصل</span>
          <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/70" />
          <span className="text-foreground">حالة السيرفر</span>
        </div>
        <button
          aria-label="تبديل السمة"
          className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary transition-colors hover:bg-secondary"
        >
          <Sun className="size-[18px]" />
        </button>
      </div>
    </header>
  )
}
