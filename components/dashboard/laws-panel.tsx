"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Shield, Building2, MessageSquare, Scale, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = ["القوانين", "وصول سريع", "الدورات العسكرية"]

const laws = [
  { title: "القوانين العسكرية العامة", sub: "عرض مباشر", icon: Shield },
  { title: "قوانين المدينة", sub: "عرض مباشر", icon: Building2 },
  { title: "قوانين الدسكورد", sub: "عرض مباشر", icon: MessageSquare },
  { title: "البنود العسكرية وقانون العقوبات", sub: "فتح الصفحة", icon: Scale },
]

const courses = [
  { title: "دورة القيادة والأركان", meta: "مشتركة | إدارية | 25-30 سؤال", schedule: "45 دقيقة · كل 10 أيام", color: "text-amber-300", dot: "bg-amber-300" },
  { title: "دورة الضباط", meta: "مشتركة | ميدانية - إدارية", schedule: "60 دقيقة · كل 10 أيام", color: "text-teal-300", dot: "bg-teal-300" },
  { title: "دورة الطيران الأمني", meta: "مشتركة | ميدانية - إدارية", schedule: "35 دقيقة · كل 15 يوم", color: "text-indigo-300", dot: "bg-indigo-300" },
  { title: "دورة مفاوض معتمد", meta: "مشتركة | ميدانية - إدارية", schedule: "35 دقيقة · كل 7 أيام", color: "text-orange-300", dot: "bg-orange-300" },
  { title: "دورة الصاعقة", meta: "مشتركة | ميدانية", schedule: "5 ساعات · كل 14 يوم", color: "text-rose-300", dot: "bg-rose-300" },
  { title: "دورة مركز العمليات", meta: "مشتركة | ميدانية - إدارية", schedule: "40 دقيقة · كل 8 أيام", color: "text-cyan-300", dot: "bg-cyan-300" },
  { title: "الدورة التأسيسية", meta: "مشتركة | ميدانية - إدارية", schedule: "تأهيل ضباط 25د · أسس قيادية 60د · كل 6 أيام", color: "text-yellow-300", dot: "bg-yellow-300" },
]

const militaryLaws = [
  "الالتزام الكامل بالقيادة العسكرية أثناء الدوام.",
  "لضمان حقك، يجب أن يكون لديك توثيق وتصوير مستمر أثناء أداء المهام.",
  "يمنع تخطي المراجع أو تجاوز التسلسل العسكري.",
  "يجب احترام الرتب الأعلى وعدم تجاوز التعليمات الصادرة.",
  "التحية العسكرية تؤدى للرتب العليا في المقرات الرسمية فقط، ولا تؤدى في الميدان.",
  "يمنع على أي قطاع تأدية مهام تابعة لقطاع آخر.",
  "يمنع على جميع القطاعات، ما عدا وزارة الدفاع، التوجه إلى المناطق غير الآمنة دون إذن مسبق من وزارة الدفاع، إلا في حال عدم تواجد القيادات.",
  "عند القبض على مجرم، يُسلّم لرئاسة أمن الدولة للتحقيق، وعلى أمن الدولة إبلاغ القطاع المُسلِّم بالمستجدات.",
  "الإجازة العسكرية لا تمنح إلا بعد خدمة لا تقل عن ثلاث ساعات، وتكون مدتها بحد أقصى ساعتين.",
  "يمنع استخدام خواص الإدارة أثناء المباشرة كعسكري.",
  "الالتزام بصيغ السجن الرسمية وعدم الاجتهاد الفردي فيها.",
  "تقديم الاستقالات في يوم السبت يؤدي إلى الفصل المباشر.",
  "في حال أخذ رتبة غير مخصصة لك، ستتم محاسبتك فوراً.",
  "في حال استخراج مركبة غير مخصصة لك دون إذن، ستتم محاسبتك.",
  "عند التعرض للظلم أو وجود شكوى، التزم بالتسلسل العسكري ولا تتسرع بتقديم الاستقالة.",
  "إذا ارتكبت تصرفاً خاطئاً بسيطاً، أبلغ مسؤوليك عنه لتجنب المحاسبة لاحقاً.",
  "أوقات الاصطفاف العسكري تكون كل 3 ساعات.",
]

const cityLaws = [
  "الحياة الواقعية هي أن تلعب وتتكلم بطريقة تتقمص العالم الحقيقي.",
  "الرول بلاي هي طريقة لتقمص شخصية وهمية داخل اللعبة.",
  "يمنع القتل العشوائي، ويسمح خارج المنطقة الآمنة فقط.",
  "يمنع القتل في المناطق الآمنة أو التهديد بالسلاح.",
  "يمنع الصدم العشوائي.",
  "يمنع التحدث عن الأمور السياسية والدينية.",
  "يمنع استخدام الهاك أو الملفات الممنوعة، والعقوبة حظر نهائي.",
  "يمنع استخدام الثغرات والقلتشات.",
  "يمنع وضع اسم بذيء أو غير لائق.",
  "يمنع نشر سيرفرات أخرى أو الحسابات الشخصية داخل السيرفر أو رسائل الدسكورد الخاصة.",
  "يمنع الإساءة لأي شخص بالقذف أو الشتم، ويجب احترام الجميع مهما كانت رتبهم.",
  "الشات مخصص لمواضيع الرول بلاي، ويمنع طلب إداري عن طريق الشات.",
  "إذا ركب معك شخص في المنطقة الآمنة يسمح بخطفه بعد مرور 15 ثانية، مع استخدام الكلمات كاملة مثل: أبواب السيارة مغلقة.",
  "لا يسمح بتحريك أي ميت على الأرض إلا بقصد إنقاذه.",
  "يمنع تشغيل الأغاني إلا في بارتي أو حفلة، ومخالفة ذلك تعرضك للسجن.",
  "السيارات المدرعة من الخلف مسموحة خارج المنطقة الآمنة فقط.",
  "يمنع إطلاق النار على التفتيش من فوق الجبل أثناء المداهمات أو على مقرات العصابات.",
  "يمنع قتل وتفتيش المسعفين في جميع الأماكن منعاً باتاً.",
  "تُكتب الاقتراحات في روم اقتراحاتكم.",
  "لا يحق دخول كراج التعديل أو مقرات العصابات أثناء مطاردة العصابات والحكومة لكم.",
]

const discordLaws = [
  "يمنع إعطاء ديسكوردك إلا في الحالات الاضطرارية، وأي ديسكورد عشوائي مهما كان عدده يعتبر مخالفة.",
  "أي تحرك عشوائي بين رومات الديسكورد أكثر من مرة يعتبر مخالفة.",
  "إعطاء ميوت أو بَن بدون سبب يعتبر مخالفة ويعرضك لإنذار ديسكورد.",
  "يمنع الكتابة في روم الصور أو الفيديوهات، وكذلك وضع صور مكان الفيديوهات.",
  "يمنع أي نشر أو تسريب حتى لو كان في الخاص.",
  "يمنع أي كلام بذيء سواء في شاتات الديسكورد أو الرومات.",
  "تشغيل الساوندات بشكل متكرر يعتبر مخالفة ويؤدي إلى إنذار ديسكورد فوري.",
  "يمنع السبام في الشاتات بجميع أنواعه: كتابة متكررة أو إيموجيات أو منشن.",
  "الأسلوب السيئ أو الاستفزاز أو التحريض سواء في الرومات أو الشاتات يعتبر مخالفة.",
  "أي مخالفة لقوانين ديسكورد من جانبك تعتبر إزعاجاً أو مضايقة للمداهمة.",
  "يمنع إزعاج الإدارة أو منشنهم بدون سبب واضح ويعتبر مخالفة.",
  "يمنع الخروج والدخول المتكرر للرومات الصوتية بقصد الإزعاج.",
  "يمنع اتصال شخصية بأي إداري أو عضو داخل الديسكورد.",
  "يمنع استخدام أسماء أو صور غير لائقة.",
  "يمنع إرسال روابط أو ملفات داخل الديسكورد.",
  "يمنع تسجيل أو تصوير أي محادثة صوتية أو كتابية دون إذن الأطراف واستغلالها.",
  "يمنع فتح نقاشات سياسية أو قبلية أو مواضيع تثير الفتن داخل الديسكورد.",
  "يمنع استخدام البوتات أو الأوامر الخاصة بها بطريقة مزعجة أو مخالفة.",
  "فك الشير على سيرفرات أخرى أو نشر أي محتوى غير لائق يعرضك للباند.",
  "أي شكل من أشكال العنصرية يؤدي إلى الباند الفوري في الرومات أو الشاتات.",
  "منشن everyone أو here في غير رومات التعليمات مخالف ويعرضك لإنذار وتايم أوت.",
  "يمنع وضع رياكشنات أو التفاعل مع الرسائل أو الحسابات التي تحمل أسماء مخلة.",
]

export function LawsPanel() {
  const router = useRouter()
  const [active, setActive] = useState("القوانين")
  const [openLaws, setOpenLaws] = useState<"military" | "city" | "discord" | null>(null)
  const displayedLaws = openLaws === "city" ? cityLaws : openLaws === "discord" ? discordLaws : militaryLaws
  const modalTitle =
    openLaws === "city"
      ? "قوانين المدينة"
      : openLaws === "discord"
        ? "قوانين الديسكورد"
        : "القوانين العامة للقطاعات العسكرية"

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-end gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm transition-colors",
              active === tab
                ? "bg-primary font-semibold text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === "الدورات العسكرية" ? (
        <div className="flex flex-col gap-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/30 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className={`w-fit rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold ${course.color}`}>
                {course.schedule}
              </span>
              <div className="flex items-start justify-end gap-3 text-end">
                <div>
                  <h3 className="text-sm font-bold text-foreground">{course.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">نوع الدورة: {course.meta}</p>
                </div>
                <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${course.dot} shadow-[0_0_8px_currentColor]`} />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {laws.map((law) => {
            const Icon = law.icon
            return (
              <button
                key={law.title}
                type="button"
                onClick={() => {
                  if (law.title === "القوانين العسكرية العامة") setOpenLaws("military")
                  if (law.title === "قوانين المدينة") setOpenLaws("city")
                  if (law.title === "قوانين الدسكورد") setOpenLaws("discord")
                  if (law.title === "البنود العسكرية وقانون العقوبات") router.push("/military-penalties")
                }}
                aria-expanded={
                  law.title === "القوانين العسكرية العامة"
                    ? openLaws === "military"
                    : law.title === "قوانين المدينة"
                      ? openLaws === "city"
                      : law.title === "قوانين الدسكورد"
                        ? openLaws === "discord"
                        : undefined
                }
                className={cn(
                  "flex items-center justify-between rounded-xl border bg-secondary/30 p-4 transition-all hover:border-primary/60 hover:bg-secondary",
                  (openLaws === "military" && law.title === "القوانين العسكرية العامة") ||
                    (openLaws === "city" && law.title === "قوانين المدينة") ||
                    (openLaws === "discord" && law.title === "قوانين الدسكورد")
                    ? "border-foreground shadow-[0_0_0_1px_var(--foreground)]"
                    : "border-border",
                )}
              >
                <ChevronLeft className="size-4 text-muted-foreground" />
                <span className="flex flex-1 items-center justify-end gap-4 text-end">
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{law.title}</span>
                    <span className="text-xs text-muted-foreground">{law.sub}</span>
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      )}

      {openLaws && (
        <div
          role="presentation"
          onClick={() => setOpenLaws(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="laws-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[calc(100vh-3rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-primary/50 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
          >
            <header className="relative flex shrink-0 items-center justify-center border-b border-primary/30 px-14 py-5">
              <button
                type="button"
                onClick={() => setOpenLaws(null)}
                aria-label="إغلاق القوانين"
                className="absolute left-6 flex size-9 items-center justify-center rounded-lg text-2xl font-light text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                ×
              </button>
              <h2 id="laws-modal-title" className="text-center text-xl font-bold text-foreground md:text-2xl">
                {modalTitle}
              </h2>
            </header>

            <ul className="flex flex-col gap-4 overflow-y-auto px-7 py-6 text-sm leading-7 text-foreground/90 md:px-10">
              {displayedLaws.map((law) => (
                <li key={law} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/90" />
                  <span>{law}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  )
}
