"use client"

import { Home, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const mainNav = [{ label: "الصفحة الرئيسية", icon: Home, active: true }]

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [active, setActive] = useState("الصفحة الرئيسية")

  const selectItem = (label: string) => {
    setActive(label)
    onClose()
  }

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-dvh w-[min(88vw,18rem)] shrink-0 flex-col gap-5 overflow-y-auto border-s border-border bg-sidebar p-5 shadow-2xl transition-transform duration-300 lg:static lg:z-auto lg:h-screen lg:w-72 lg:translate-x-0 lg:gap-6 lg:shadow-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">القوات المشتركة</h2>
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={onClose}
          className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground lg:hidden"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        {mainNav.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => selectItem(item.label)}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "border border-primary/40 bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <span className="flex items-center gap-3">
                <Icon className="size-[18px]" />
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>

      </aside>
    </>
  )
}
