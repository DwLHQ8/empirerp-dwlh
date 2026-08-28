import Image from "next/image"

const ministries = [
  {
    name: "وزارة الداخلية",
    desc: "قطاعات الأمن الداخلي والاستجابة السريعة",
    emblem: "/images/kuwait-police-transparent.png",
  },
  {
    name: "وزارة الدفاع",
    desc: "قدرات عسكرية وعملياتية داخل المنظومة",
    emblem: "/images/kuwait-defense-transparent.png",
  },
]

export function Ministries() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="text-end">
        <h3 className="text-base font-bold text-primary">الوزارات</h3>
        <p className="text-xs text-muted-foreground">اختر الوزارة لفتح المسار مباشرة من نفس الصفحة.</p>
      </div>

      <div className="flex flex-col gap-3">
        {ministries.map((m) => (
          <button
            key={m.name}
            className="flex items-center gap-4 rounded-xl border border-border bg-secondary/40 p-4 text-end transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            <span className="flex size-12 shrink-0 items-center justify-center">
              <Image
                src={m.emblem}
                alt={`شعار ${m.name}`}
                width={48}
                height={48}
                className="size-12 object-contain"
              />
            </span>
            <span className="flex flex-1 flex-col">
              <span className="text-sm font-bold text-foreground">{m.name}</span>
              <span className="text-xs text-muted-foreground">{m.desc}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
