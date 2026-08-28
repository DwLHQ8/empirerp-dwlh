"use client"

import {
  Home,
  FileText,
  UserPlus,
  Award,
  Users,
  Star,
  Layers,
  Zap,
  Wrench,
  LifeBuoy,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const mainNav = [
  { label: "الصفحة الرئيسية", icon: Home, active: true },
  { label: "نظام التقارير", icon: FileText },
  { label: "شؤون التجنيد", icon: UserPlus },
  { label: "التكريمات", icon: Award },
]

const leadership = [
  { label: "رئاسة الوزراء", icon: Users },
  { label: "القيادة العليا", icon: Star },
]

const leadershipSub = [
  "قائد القوات المشتركة",
  "هيئة الأركان العامة",
  "القائد العام للشؤون",
  "أعضاء مجلس الوزراء",
  "مناصب القوات المشتركة",
]

const otherNav = [
  { label: "الكلية الأمنية", icon: Layers },
  { label: "الخدمات السريعة", icon: Zap },
  { label: "هيئة التطوير العسكري", icon: Wrench },
]

export function Sidebar() {
  const [active, setActive] = useState("الصفحة الرئيسية")

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col gap-6 border-s border-border bg-sidebar p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">القوات المشتركة</h2>
      </div>

      <nav className="flex flex-col gap-1">
        {mainNav.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
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

      <div className="flex flex-col gap-1">
        <span className="px-3 pb-1 text-xs font-medium text-muted-foreground/70">القيادة</span>
        {leadership.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Icon className="size-[18px]" />
              {item.label}
            </button>
          )
        })}
        <ul className="me-4 mt-1 flex flex-col gap-2.5 border-e border-border pe-4">
          {leadershipSub.map((sub) => (
            <li key={sub}>
              <button className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                {sub}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <nav className="flex flex-col gap-1">
        {otherNav.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Icon className="size-[18px]" />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <LifeBuoy className="size-[18px]" />
          فريق الدعم
        </div>
        <button className="flex items-center justify-center rounded-lg border border-border bg-secondary/50 py-2.5 text-muted-foreground transition-colors hover:bg-secondary">
          <ChevronRight className="size-4" />
        </button>
      </div>
    </aside>
  )
}
