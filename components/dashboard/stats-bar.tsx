const bars = [
  { label: "وزارة الداخلية", value: 240, total: 750, from: "#e0b84a", to: "#f0d27a" },
  { label: "وزارة الدفاع", value: 132, total: 750, from: "#3b6fd4", to: "#6f9bf0" },
]

function Gauge({
  value,
  max,
  label,
  color,
}: {
  value: number
  max: number
  label: string
  color: string
}) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const pct = max > 0 ? Math.min(value / max, 1) : 0
  const offset = circumference * (1 - pct)

  return (
    <div className="relative flex size-24 shrink-0 items-center justify-center">
      <svg className="size-full -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} fill="none" stroke="var(--border)" strokeWidth="5" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={value === 0 ? circumference : offset}
        />
      </svg>
      <div className="absolute flex flex-col items-center leading-tight">
        <span className="text-xl font-bold text-foreground">{value.toLocaleString("en-US")}</span>
        <span className="max-w-[70px] text-center text-[10px] text-muted-foreground">{label}</span>
      </div>
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 lg:flex-row lg:items-center">
      <div className="flex flex-1 flex-col gap-5">
        {bars.map((bar) => (
          <div key={bar.label} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-foreground">{bar.label}</span>
              <span className="text-muted-foreground">{bar.value}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(bar.value / bar.total) * 100}%`,
                  background: `linear-gradient(90deg, ${bar.from}, ${bar.to})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Gauge value={750} max={750} label="عدد القوات المشتركة" color="#e0b84a" />
      </div>
    </section>
  )
}
