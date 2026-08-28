import { MessageSquare, TriangleAlert, ChevronLeft } from "lucide-react"

const secondaryCtas = [
  {
    title: "الدسكورد الأساسي",
    sub: "المجتمع الرئيسي للمدينة",
    icon: MessageSquare,
    gradient: "from-[#1e1f3a] to-[#111225]",
    href: "https://discord.gg/ep",
  },
  {
    title: "دسكورد القطاعات",
    sub: "البوابة العسكرية للعمل",
    icon: MessageSquare,
    gradient: "from-[#132433] to-[#0b1620]",
    href: "https://discord.gg/XGRZ3UySf5",
  },
  {
    title: "تعميمات القوات المشتركة",
    sub: "غرفة الـ الرسمية تعميمات",
    icon: TriangleAlert,
    gradient: "from-[#33160f] to-[#1c0d0a]",
    href: "https://discord.com/channels/1223677404157972501/1511890543934705694",
  },
]

export function CtaCards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryCtas.map((cta) => {
          const Icon = cta.icon
          const external = cta.href.startsWith("http")
          return (
            <a
              key={cta.title}
              href={cta.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`flex items-center justify-between rounded-2xl border border-border bg-gradient-to-l ${cta.gradient} p-4 text-end transition-transform hover:-translate-y-0.5`}
            >
              <span className="flex size-8 items-center justify-center rounded-full border border-border bg-background/40 text-muted-foreground">
                <ChevronLeft className="size-3.5" />
              </span>
              <span className="flex flex-1 items-center justify-end gap-3">
                <span className="flex flex-col text-end">
                  <span className="text-sm font-bold text-foreground">{cta.title}</span>
                  <span className="text-[11px] text-muted-foreground">{cta.sub}</span>
                </span>
                <Icon className="size-[18px] text-foreground/70" />
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
