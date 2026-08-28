"use client"

import { Menu, Search, Sun } from "lucide-react"

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex flex-wrap items-center gap-3 border-b border-border bg-sidebar/60 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4">
      <button
        type="button"
        aria-label="فتح القائمة"
        onClick={onMenuClick}
        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary lg:hidden"
      >
        <Menu className="size-5" />
      </button>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-medium text-muted-foreground">Empire Rp |</span>
        <span className="text-base font-bold text-foreground">النظام الإداري العسكري</span>
      </div>

      <div className="relative order-3 w-full lg:order-none lg:mx-auto lg:max-w-xl">
        <Search className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="ابحث في القوانين، الأقسام أو القطاعات..."
          className="w-full rounded-lg border border-border bg-secondary/60 py-2.5 pe-10 ps-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
        />
      </div>

      <div className="ms-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm sm:flex">
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
