import React, { useState, useEffect } from "react";
import "./seoSection.css";

export default function SeoSection({ onHide }) {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // يبدأ يعمل fade-out
      setTimeout(() => {
        setVisible(false);
        if (onHide) onHide(); // ينادي على إظهار الفورم بعد ما يختفي
      }, 2000); // مدة الأنيميشـن 2 ثانية
    }, 5000); // يظهر 5 ثواني قبل الخروج
    return () => clearTimeout(timer);
  }, [onHide]);

  if (!visible) return null;

  return (
    <section className={`seo-section ${fade ? "fade-out" : ""}`}>
      <h2>حاسبة التمويل العقاري – قارن واختر الأفضل</h2>
      <p>
        مع <strong>حاسبة التمويل العقاري</strong> يمكنك حساب
        <strong> القسط الشهري</strong> بسهولة بناءً على
        <strong> سعر العقار</strong>، <strong>نسبة الفائدة</strong> و
        <strong>مدة التمويل</strong>. اكتشف أفضل
        <strong> بنك للتمويل العقاري</strong> وقارن بين البنوك حسب
        <strong> نسب الفوائد</strong> و<strong>هامش الربح</strong>.
      </p>
      <p>
        هذه الأداة تدعم برامج <strong>الدعم السكني</strong> وتساعدك على اختيار
        <strong> أقل نسبة فائدة</strong> مع مقارنة العروض المختلفة للوصول إلى
        <strong> التمويل العقاري الأنسب</strong>.
      </p>
    </section>
  );
}
