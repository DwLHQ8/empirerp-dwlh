import Link from "next/link"
import { ArrowLeft, BookOpen, Gavel, Radio, Search, Shield, TriangleAlert } from "lucide-react"
import { ProtocolTabs } from "@/components/protocol-tabs"

const sections = [
  { title: "بنود الدرجة الأولى", code: "1", items: [
    ["إهمال المركبة", "1"], ["عدم الالتزام بالقواعد المرورية", "1"], ["التوجه بدورية مشتركة بدون إذن", "1"], ["تفتيش المواطنين بغير إذن منه", "1"], ["عدم الالتزام بالمكافآت المحددة", "1"], ["الخروج كمواطن وعدم أخذ إجازة", "1"], ["استخدام السخال بغير سبب", "1"], ["أخذ غفوة بدون إذن أو تسجيل الخروج بدون إذن", "1"], ["إبقاء المجرم في الدورية والتوجه لحالات أخرى وعدم التوجه به للمركز", "1"], ["استلام منطقة بدون إذن من العمليات", "1"], ["عدم حضور الاجتماع", "1"], ["إهمال مصادرة المركبات", "1"], ["مباشرة حالة دون إذن مركز العمليات", "1"], ["عدم الالتزام بالنماذج", "1"], ["سياقة مركبة مواطن", "1"], ["إعداد تفتيش برتبة أقل من المسموح وعدم أخذ إذن", "1"], ["استخدام سلاح الجوي دون إذن", "1"], ["عدم تقديم المواطن", "1"], ["سحب العساكر بدون إذن رتب عليا", "1"], ["كليشة عسكري", "1"], ["السباحة في الزوجات", "1"], ["عدم حضور الاستدعاء", "1"],
  ]},
  { title: "بنود الدرجة الثانية", code: "2", items: [
    ["تخفيف على المواطنين والتساهل بدون إذن أو تسجيل قضية بدون ملاحظات", "2"], ["إعلان الاستنفار الأمني", "2"], ["مباشرة الميدان وعدم التواجد بمركز العمليات", "2"], ["المداهمة بدون إذن", "2"], ["سوء التعامل مع الحادث", "2"], ["القبض على مجرم دون ذكر التهم", "2"], ["تسجيل خروج والتواجد في المركز بدون سبب", "2", "8"], ["عدم الالتزام بصبغ السجن", "2", "9"], ["عدم التقيد بقواعد المطاردات", "2", "10"], ["عدم الالتزام ببروتوكولات الراديو", "2", "11"], ["تفتيش شخص بدون سبب", "2", "12"], ["رؤية شخص من رتبة أقل منك وعدم تبليغه", "2", "13"], ["إعطاء رتبة لغير مخصصة", "2", "14"], ["مرافقة مواطن بملك بسبب غير العسكرية", "2", "15"],
  ]},
  { title: "بنود الدرجة الثالثة", code: "3", items: [
    ["تفتيش العساكر بغير إذن", "3"], ["عدم احترام المواطنين", "3"], ["عدم الجدية أثناء الدوام كعسكري", "3"], ["عدم الالتزام بالقواعد العسكرية", "3"], ["عدم الالتزام بأولويات العسكري عند حدوث بلاغ", "3"], ["سجن مواطن بدون أدلة", "3"], ["التهرب من استلام مركز العمليات", "3"], ["سوء استعمال المركبة", "3"], ["سجن مواطن بدون تبرير", "3"], ["سجن مواطن بدون وجه حق", "3"], ["عدم تقدير حياة الرهائن", "3"], ["إهمال الميدان", "3"], ["عدم الالتزام بالقيادة العسكرية", "3"], ["استخدام إعلان القطاع بشكل خاطئ", "3"], ["إفشال التفاوض بدون وجه حق", "3"], ["استخدام مركبة غير مخصصة لك بغير إذن", "3", "17"], ["إهمال المسؤولية", "3", "18"], ["عدم الالتزام بدستور الدولة", "3", "19"], ["شكوى بدون وجه حق", "3", "20"], ["التلاعب بآلية التحضير", "3", "21"], ["الأعذار غير المقنعة", "3", "22"], ["عدم أخذ موافقة الطبيب الملكي", "3", "23"], ["عدم طلب معطى أو محامي للمواطن", "3", "24"], ["مخالفات الشؤون الإدارية", "3", "25"], ["الادعاء بالمظلومية بغير وجه حق", "3", "26"],
  ]},
  { title: "بنود الدرجة الرابعة", code: "4", items: [
    ["عدم احترام العساكر", "4"], ["كشف مهمة خاصة لأي شخص أو كشف هوية أمن دولة", "4"], ["رفض أمر رتبة عليا", "4"], ["التدخل في شؤون العسكرية", "4"], ["تسريب معلومات أو تعميمات بأي شكل من الأشكال", "4"], ["استخدام رتبة أو لبس بالمدينة غير مخصص له", "4"], ["التهاون في الصف العسكري", "4"], ["فرض السلطة بغير حق", "4"], ["الكذب على مسؤول", "4"], ["تهريب شخص مطلوب", "4"], ["الإساءة للقطاعات العسكرية بشكل خاص والسلك العسكري بشكل عام", "4"], ["رد الغلط بالغلط", "4"], ["الأسلوب السيئ", "4"], ["طلب ترقية", "4"], ["استخدام الرتبة أو المنصب بشكل خاطئ", "4"], ["تخطي مراجع", "4"], ["الذهاب إلى الأماكن غير المخصصة", "4"], ["التدخل في شؤون مكافحة الفساد", "4"], ["التدخل في شؤون رئاسة الوزراء", "4"], ["التلميح بالترقية", "4"], ["استخدام خواص إدارة", "4"],
  ]},
  { title: "بنود الدرجة الخامسة", code: "5", items: [
    ["خيانة الدولة", "5"], ["التخريب بشتى أنواعه وزراعة الفتن", "5"], ["العنصرية", "5"], ["تكرار مخالفات البنود السابقة", "5"], ["اعتراض على ترقيات الآخرين", "5"], ["الإزعاج والاستهبال في التردد", "5"], ["تذييل المخالفات", "5"], ["التزوير والتخريب", "5"],
  ]},
  { title: "بنود الدرجة السادسة", code: "6", items: [
    ["التلفظ بالقذف", "6"], ["الترصد والشخصنة", "6"], ["تسحيب العساكر إلى قطاع آخر أو لعصابة", "6"], ["استخدام الإعلانات بشكل غير لائق", "6"], ["تشكيل أحزاب", "6"],
  ]},
]

const discipline = [
  { title: "لفت النظر", text: "تنبيه رسمي للمخالفة الأولى البسيطة، ويسجل في ملف العسكري." },
  { title: "الإنذار الأول", text: "يصدر عند تكرار المخالفة أو ارتكاب مخالفة متوسطة." },
  { title: "الإنذار النهائي", text: "آخر إجراء قبل الفصل، ويستوجب مراجعة القيادة." },
  { title: "الفصل العسكري", text: "إنهاء الخدمة بقرار من القيادة بعد ثبوت المخالفة الجسيمة." },
]

const salaryFines = [
  ["سلم الأفراد", "مخالفة بنود الدرجة الأولى", "$500,000", "1-6 / 1-11 / 1-22", "$700,000"],
  ["سلم الأفراد", "مخالفة بنود الدرجة الثانية", "$800,000", "2-5 / 2-13", "$1,000,000"],
  ["سلم الأفراد", "مخالفة بنود الدرجة الثالثة", "$1,200,000", "3-3 / 3-4 / 3-12 / 3-13", "$1,500,000"],
  ["سلم الضباط", "مخالفة بنود الدرجة الأولى", "$750,000", "1-6 / 1-11 / 1-22", "$900,000"],
  ["سلم الضباط", "مخالفة بنود الدرجة الثانية", "$1,200,000", "2-5 / 2-13", "$1,500,000"],
  ["سلم الضباط", "مخالفة بنود الدرجة الثالثة", "$1,800,000", "3-3 / 3-4 / 3-12 / 3-13", "$2,000,000"],
  ["سلم القيادات", "مخالفة بنود الدرجة الأولى", "$800,000", "1-6 / 1-11 / 1-22", "$1,000,000"],
  ["سلم القيادات", "مخالفة بنود الدرجة الثانية", "$1,000,000", "2-5 / 2-13", "$1,300,000"],
  ["سلم القيادات", "مخالفة بنود الدرجة الثالثة", "$1,500,000", "3-3 / 3-4 / 3-12 / 3-13", "$1,800,000"],
]

const rankDiscipline = [
  ["فرد", "تحذير شفهي أول أو تحذير ثاني", "إنذار ثاني + ثالث", "إنذار ثاني + ثالث أو شفهي", "كسر رتبة", "مفصول وزاري", "بلاك لست"],
  ["ضابط", "تحذير شفهي أول أو تحذير ثاني", "إنذار ثاني + ثالث", "إنذار أول + ثاني أو شفهي", "كسر رتبة", "مفصول وزاري", "بلاك لست"],
  ["قيادة", "تحذير شفهي أول أو تحذير ثاني", "إنذار ثاني + ثالث", "إنذار أول + ثاني أو شفهي", "كسر رتبة", "مفصول وزاري", "بلاك لست"],
  ["منصب قوات مشتركة", "تحذير شفهي أول أو تحذير ثاني", "إنذار ثاني + ثالث", "إنذار أول + ثاني أو شفهي", "كسر رتبة", "مفصول وزاري", "بلاك لست"],
  ["أعضاء مجلس الوزراء", "تحذير شفهي أول أو تحذير ثاني", "إنذار ثاني + ثالث", "إنذار أول + ثاني أو شفهي", "كسر رتبة", "مفصول وزاري", "بلاك لست"],
]

export default function MilitaryPenaltiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-20 border-b border-primary/20 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary"><Shield className="size-5" /></span>
            <div><strong className="block tracking-[0.18em] text-primary">MILREF</strong><span className="text-xs text-muted-foreground">مرجع عسكري موحد</span></div>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <a href="#items" className="rounded-lg border border-border px-4 py-2 hover:border-primary/50">البنود <span className="text-primary">96</span></a>
            <a href="#discipline" className="rounded-lg border border-border px-4 py-2 hover:border-primary/50">التأديب <span className="text-primary">4</span></a>
            <a href="#protocols" className="rounded-lg border border-border px-4 py-2 hover:border-primary/50">البروتوكولات <span className="text-primary">36</span></a>
          </div>
          <Link href="/" className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">العودة للرئيسية <ArrowLeft className="size-4" /></Link>
        </div>
      </nav>

      <div className="mx-auto flex max-w-5xl flex-col gap-14 px-5 py-12 md:py-16">
        <header className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4"><p className="text-xs font-bold tracking-[0.3em] text-primary">MILITARY PENALTIES / OPERATIONS</p><h1 className="text-balance text-4xl font-black leading-tight md:text-6xl">البنود العسكرية وقانون العقوبات</h1><p className="max-w-3xl leading-7 text-muted-foreground">مرجع موحّد يجمع البنود العسكرية، مسارات التأديب، والغرامات والبروتوكولات التشغيلية ضمن تجربة أقرب للدليل الميداني الرسمي.</p></div>
          <div className="grid w-full gap-4 sm:grid-cols-3"><Stat n="96" label="إجمالي البنود" /><Stat n="4" label="لوحات التأديب" /><Stat n="36" label="البروتوكولات" /></div>
        </header>

        <section id="items" className="scroll-mt-28">
          <SectionTitle icon={BookOpen} kicker="VIOLATIONS" title="البنود والمخالفات" text="تصنيف واضح للمخالفات والعقوبات المقررة." />
          <div className="mt-6 flex flex-col gap-5">{sections.map((section) => <PenaltySection key={section.code} {...section} />)}</div>
        </section>

        <section id="discipline" className="scroll-mt-28">
          <SectionTitle icon={Gavel} kicker="02" title="التأديب والعقوبات" text="شبكة مرجعية موحدة تجمع الغرامات حسب السلم، العقوبات حسب الرتبة، والإنذارات الوظيفية." />
          <div className="mt-6 flex flex-col gap-8">
            <ReferenceTable caption="الغرامات المالية حسب السلم الوظيفي" headers={["السلم", "الدرجة", "قيمة الغرامة", "البنود المستثناة", "قيمة المستثناة"]} rows={salaryFines} />
            <ReferenceTable caption="العقوبات حسب الرتبة والدرجة" headers={["الفئة", "الدرجة الأولى", "الدرجة الثانية", "الدرجة الثالثة", "الدرجة الرابعة", "الدرجة الخامسة", "الدرجة السادسة"]} rows={rankDiscipline} />
            <div className="grid gap-5 md:grid-cols-2">
              <ReferenceTable caption="ملاحظات التكرار والمحاسبة" headers={["الملاحظة", "الفئة", "الأول", "الثاني", "الثالث"]} rows={[["في حال تكرار المخالفة يتم تبديل العقوبة", "فرد", "تحذير شفهي أول 3 أيام", "تحذير ثاني 4 أيام", "إنذار ثالث 6 أيام"], ["يحق للقائد ولنائبيه تبديل العقوبة عند وجود ملاحظات على العسكري", "ضابط", "تحذير شفهي أول 3 أيام", "تحذير ثاني 5 أيام", "إنذار ثالث 7 أيام"], ["البنود قابلة للتعديل ويرجى مراجعتها بشكل مستمر", "قيادة", "تحذير شفهي أول 3 أيام", "تحذير ثاني 7 أيام", "إنذار ثالث 10 أيام"], ["جهلك بالأنظمة والقوانين لا يعفيك من المحاسبة", "منصب قوات مشتركة", "تحذير شفهي أول 3 أيام", "تحذير ثاني 7 أيام", "إنذار ثالث 10 أيام"], ["تأخير ترقية الشخص حسب المنصب أو الرتبة", "أعضاء مجلس الوزراء", "تحذير شفهي أول 3 أيام", "تحذير ثاني 10 أيام", "إنذار ثالث 13 أيام"]]} />
              <ReferenceTable caption="الإنذارات الوظيفية" headers={["الفئة", "تفصيل الإنذار"]} rows={[["فرد", "إنذار وظيفي أول تأخير 3 أيام، إنذار ثانٍ تأخير أسبوع"], ["ضابط", "إنذار وظيفي أول تأخير أسبوع، إنذار ثانٍ تأخير 10 أيام"], ["قيادة", "إنذار وظيفي أول تأخير 10 أيام، إنذار ثانٍ تأخير 14 يوم"]]} />
            </div>
          </div>
        </section>

        <section id="protocols" className="scroll-mt-28">
          <SectionTitle icon={Radio} kicker="03" title="البروتوكولات التشغيلية والراديوية" text="تقسيم البروتوكولات إلى مجموعات تشغيلية واضحة مع معنى البلاغ وطريقة النطق ومثال الاستخدام." />
          <div className="mt-6"><ProtocolTabs /></div>
        </section>

        <aside className="flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/10 p-5"><TriangleAlert className="size-5 shrink-0 text-primary" /><p className="text-sm leading-7 text-foreground/80">جميع العقوبات تخضع لتقدير القيادة العسكرية وفق الأدلة والملابسات، ولا يعتمد أي إجراء دون توثيق رسمي.</p></aside>
      </div>
    </main>
  )
}

function Stat({ n, label }: { n: string; label: string }) { return <div className="border border-border bg-card px-6 py-5 text-right"><span className="block text-xs text-muted-foreground">{label}</span><strong className="mt-3 block text-2xl text-primary">{n}</strong><span className="mt-3 block text-xs text-muted-foreground">عرض مرجعي موحّد</span></div> }

function SectionTitle({ icon: Icon, kicker, title, text }: { icon: typeof Search; kicker: string; title: string; text: string }) { return <div className="flex items-start justify-between gap-4 border-b border-border pb-5"><div><p className="text-xs font-bold tracking-[0.18em] text-primary">{kicker}</p><h2 className="mt-2 text-2xl font-black">{title}</h2><p className="mt-3 text-sm text-muted-foreground">{text}</p></div><Icon className="size-5 shrink-0 text-primary" /></div> }

function PenaltySection({ title, code, items }: { title: string; code: string; items: string[][] }) { return <article className="overflow-hidden border border-primary/30 bg-card"><header className="flex items-center justify-between border-b border-primary/20 px-5 py-4"><h3 className="font-bold">{title}</h3><span className="font-mono text-xs text-primary">SECTION {code}</span></header><div className="overflow-x-auto"><table className="w-full min-w-[560px] text-sm"><thead className="text-muted-foreground"><tr className="border-b border-border"><th className="p-4 text-right">رقم البند</th><th className="p-4 text-right">وصف المخالفة</th><th className="p-4 text-right">الدرجة</th></tr></thead><tbody>{items.map((row, i) => <tr key={row[0]} className="border-b border-border/60 bg-primary/[0.025] last:border-0 hover:bg-primary/[0.06]"><td className="p-4 font-mono text-foreground">{code}-{row[2] ?? i + 1}</td><td className="p-4 font-semibold">{row[0]}</td><td className="p-4 font-bold text-foreground"><span className="ml-2 inline-block size-2 rounded-full bg-primary" />{row[1]} درجة</td></tr>)}</tbody></table></div></article> }

function ReferenceTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: string[][] }) {
  return <div className="overflow-hidden border border-border bg-card"><div className="border-b border-primary/40 px-5 py-3 text-sm text-muted-foreground">{caption}</div><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-sm"><thead><tr className="border-b border-border bg-secondary/30">{headers.map((header) => <th key={header} className="p-4 text-right font-semibold text-muted-foreground">{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`${caption}-${rowIndex}`} className="border-b border-border/70 bg-primary/[0.025] last:border-0 hover:bg-primary/[0.06]">{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className={`p-4 leading-7 ${cellIndex === 0 ? "font-bold" : ""}`}>{cell}</td>)}</tr>)}</tbody></table></div></div>
}
