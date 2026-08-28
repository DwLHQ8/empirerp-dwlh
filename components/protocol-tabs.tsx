'use client'

import { useState } from 'react'

const groups = {
  Codes: [
    ['Code 0', 'عموم الوحدات توجه للحالة (استنفار أمني)', 'code zero', 'من يونت إلى مركز العمليات آخر 10-10 كود زيرو بأسرع وقت ممكن'],
    ['Code 1', 'سير بدون صوت', 'code one', 'من مركز العمليات إلى عموم الوحدات كود 1'],
    ['Code 2', 'سير فقط', 'code two', 'من مركز العمليات إلى عموم الوحدات كود 2'],
    ['Code 3', 'سير طوارئ', 'code three', 'من مركز العمليات إلى عموم الوحدات كود 3'],
    ['Code 4', 'المكان خالي وآمن', 'code four', 'من يونت إلى مركز العمليات آخر 10-6 كود 4'],
    ['Code 5', 'جاري التحقق من المكان او الحالة', 'code five', 'من يونت إلى مركز العمليات كود 5 حاليا في آخر 10-6'],
    ['Code 6', 'مسح البصمات وتصوير مسرح الجريمة', 'code six', 'من يونت إلى مركز العمليات آخر 10-5 كود 4 وجاري العمل على كود 6'],
    ['Code 7', 'مفتش - سحر أسود', 'code seven', 'من يونت إلى مركز العمليات كود 7'],
  ],
  Zero: [
    ['0 - 1', 'استراحة أو تسجيل خروج مؤقت', 'zero one', 'من يونت إلى مركز العمليات 0-1 مع ذكر المدة'],
    ['0 - 2', 'الإشارة واضحة', 'zero two', 'من يونت إلى مركز العمليات 0-2'],
    ['0 - 3', 'التأكد من الإشارة', 'zero three', 'من يونت إلى مركز العمليات 0-3'],
    ['0 - 4', 'إلغاء بلاغ', 'zero four', 'من مركز العمليات أمامي 10-3 أحتاج دعم - آخر طلب دعم 0-4'],
    ['0 - 5', 'عندي حالة - العسكري مشغول', 'zero five', 'من يونت إلى مركز العمليات 0-5 حاليا'],
    ['0 - 6', 'كرر البلاغ', 'zero six', 'من يونت إلى مركز العمليات 0-6 آخر بلاغ'],
    ['0 - 7', 'تسجيل خروج', 'zero seven', 'من يونت إلى مركز العمليات 0-7'],
    ['0 - 8', 'تسجيل دخول', 'zero eight', 'من يونت إلى مركز العمليات 0-8 توجيهاتك مركز العمليات'],
    ['0 - 9', 'التوجه للقسم', 'zero nine', 'من مركز العمليات إلى عموم الوحدات 0-9 حاليا'],
    ['0 - 10', 'اقطع بلاغك', 'zero ten', 'من مركز العمليات إلى عموم الوحدات 0-10 جميع البلاغات'],
  ],
  Ten: [
    ['10 - 0', 'الشرطي بحاجة إلى مسعف', 'ten zero', 'من يونت إلى مركز العمليات 10-0'],
    ['10 - 1', 'مطاردة مركبة', 'ten one', 'من يونت إلى مركز العمليات أمامي الحالة 10-1'],
    ['10 - 2', 'غير صحيح', 'ten two', 'من مركز العمليات إلى يونت عندك حالة؟ يونت 10-2'],
    ['10 - 3', 'استيقاف مروري', 'ten three', 'من يونت إلى مركز العمليات أمامي الحالة 10-3'],
    ['10 - 4', 'صحيح / استلمت', 'ten four', 'من مركز العمليات إلى يونت توجه لآخر حالة - يونت 10-4'],
    ['10 - 5', 'سرقة بقالة', 'ten five', 'من يونت إلى مركز العمليات هل تسمح لي بالتوجه لآخر حالة 10-5'],
    ['10 - 6', 'سرقة مجوهرات', 'ten six', 'من يونت إلى مركز العمليات هل تسمح لي بالتوجه لآخر حالة 10-6'],
    ['10 - 7', 'سرقة بنك بوليتو', 'ten seven', 'من يونت إلى مركز العمليات هل تسمح لي بالتوجه لآخر حالة 10-7'],
    ['10 - 8', 'تهريب سجين', 'ten eight', 'من يونت إلى مركز العمليات هل تسمح لي بالتوجه لآخر حالة 10-8'],
    ['10 - 9', 'سرقة سيارة', 'ten nine', 'من يونت إلى مركز العمليات هل تسمح لي بالتوجه لآخر حالة 10-9'],
    ['10 - 10', 'سرقة بنك', 'ten ten', 'من يونت إلى مركز العمليات هل تسمح لي بالتوجه لآخر حالة 10-10'],
    ['10 - 11', 'سرقة محل أسلحة', 'ten eleven', 'من يونت إلى مركز العمليات هل تسمح لي بالتوجه لآخر حالة 10-11'],
    ['10 - 16', 'خروج من الراديو', 'ten sixteen', 'من يونت إلى مركز العمليات 10-16'],
    ['10 - 19', 'هروب على الأقدام', 'ten nineteen', 'من يونت إلى مركز العمليات آخر حالة 10-1 تحولت إلى 10-19'],
    ['10 - 20', 'موقعك', 'ten twenty', 'من مركز العمليات إلى يونت 10-20'],
  ],
  Twenty: [
    ['20 - 1', 'تجمع عصابات', 'twenty one', 'من يونت إلى مركز العمليات أمامي 20-1'],
    ['20 - 2', 'تبادل إطلاق نار', 'twenty two', 'من يونت إلى مركز العمليات أمامي 20-2'],
    ['20 - 3', 'أحتاج دعم', 'twenty three', 'من يونت إلى مركز العمليات أحتاج 20-3'],
  ],
} as const

type Group = keyof typeof groups
const tabs: Group[] = ['Codes', 'Zero', 'Ten', 'Twenty']

export function ProtocolTabs() {
  const [active, setActive] = useState<Group>('Codes')

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-end border-b border-primary/40" role="tablist" aria-label="مجموعات البروتوكولات">
        {tabs.map((tab) => (
          <button key={tab} type="button" role="tab" aria-selected={active === tab} onClick={() => setActive(tab)} className={`flex min-w-20 items-center justify-center gap-2 border-b px-4 py-3 text-xs transition-colors ${active === tab ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>
            <span>{groups[tab].length}</span><span>{tab}</span>
          </button>
        ))}
      </div>
      <div className="overflow-hidden border border-primary/40 bg-card" role="tabpanel">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead><tr className="border-b border-border bg-secondary/30">{['الاختصار', 'البلاغ', 'طريقة النطق', 'مثال الاستخدام'].map((header) => <th key={header} className="p-4 text-right font-semibold text-muted-foreground">{header}</th>)}</tr></thead>
            <tbody>{groups[active].map((row, rowIndex) => <tr key={`${active}-${row[0]}`} className="border-b border-border/70 bg-primary/[0.025] last:border-0 hover:bg-primary/[0.06]">{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className={`p-4 leading-7 ${cellIndex === 0 ? 'font-bold' : ''}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
