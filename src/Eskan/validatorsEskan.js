export function validateClientInputs(data, clientPhoneIsValid) {
  const errors = [];

  // ✅ دالة مساعدة للتحقق من الاسم الرباعي بالعربية
  const isValidArabicName = (name) => {
    const onlyArabic = /^[\u0600-\u06FF\s]+$/;
    const wordCount = name.trim().split(/\s+/).length;
    return onlyArabic.test(name) && wordCount >= 4;
  };

  // ✅ التحقق من بيانات العميل
  if (!data.customerName?.trim()) {
    errors.push(" اسم العميل مطلوب");
  } else if (!isValidArabicName(data.customerName)) {
    errors.push(" اسم العميل يجب أن يكون رباعي وبالحروف العربية فقط");
  }

  if (!/^\d{10}$/.test(data.customerId || "")) {
    errors.push(" رقم هوية العميل يجب أن يتكون من 10 أرقام");
  }

  if (!data.customerCity?.trim()) {
    errors.push(" عنوان العميل مطلوب");
  }

  if (!/^\d{12}$/.test(data.phone || "") || !data.phone.startsWith("9665")) {
    errors.push(" رقم الجوال غير صالح (يجب أن يكون 12 رقمًا ويبدأ بـ 9665)");
  }

  if (typeof clientPhoneIsValid !== "undefined" && !clientPhoneIsValid) {
    errors.push(" رقم الجوال مستخدم من قبل أو غير صالح");
  }

  // ✅ التحقق من المبالغ
  if (data.number) {
    if (isNaN(data.number)) {
      errors.push(" مبلغ السداد غير صالح (يجب أن يكون رقمًا)");
    } else if (data.number.toString().length < 3 ||data.number.toString().length > 6) {
      errors.push(" التحقق من مبلغ السداد   ");
    }
  }

  if (data.number1) {
    if (isNaN(data.number1)) {
      errors.push(" مبلغ السعي غير صالح (يجب أن يكون رقمًا)");
    } else if (data.number1.toString().length < 3 || data.number1.toString().length > 5) {
      errors.push(" التحقق من مبلغ السعي    ");
    }
  }



  




  // ✅ الكفيل (إن وُجد)
  if (data.person === "yes") {
    if (!data.prsonName?.trim()) {
      errors.push(" اسم الكفيل مطلوب");
    } else if (!isValidArabicName(data.prsonName)) {
      errors.push(" اسم الكفيل يجب أن يكون رباعي وبالحروف العربية فقط");
    }

    if (!/^\d{10}$/.test(data.prsonId || "")) {
      errors.push(" رقم هوية الكفيل يجب أن يتكون من 10 أرقام");
    }

    if (!data.prsonCity?.trim()) {
      errors.push(" عنوان الكفيل مطلوب");
    }
  }

  // ✅ بيانات المالك (إن وُجد نوع)
  if ( data.documentType=="downPayment"){

   if( data.typeOwner !== "any"){

    if (!data.ownerName?.trim()) {
      errors.push(" اسم المالك مطلوب");
    } else if (!isValidArabicName(data.ownerName)) {
      errors.push(" اسم المالك يجب أن يكون رباعي وبالحروف العربية فقط");
    }

    if (!/^\d{10}$/.test(data.ownerId || "")) {
      errors.push(" رقم هوية المالك يجب أن يتكون من 10 أرقام");
    }


   }else if(data.typeOwner == "any"){


      if (!data.ownerName?.trim()) {
      errors.push(" اسم الموسسه مطلوب");
     } 
    
    if (!/^\d{10}$/.test(data.ownerId || "")) {
      errors.push(" رقم السجل للمؤسسة يجب أن يتكون من 10 أرقام");
    }


   }


    
    if (data.price) {
    if (isNaN(data.price)) {
      errors.push(" السعر السداد غير صالح (يجب أن يكون رقمًا)");
    } else if (data.price.toString().length < 3 ||data.price.toString().length > 6) {
      errors.push(" التحقق من السعر للعقار   ");
    }
   }


    if (data.cheq) {
    if (isNaN(data.cheq)) {
      errors.push(" مبلغ الشيك غير صالح (يجب أن يكون رقمًا)");
    } else if (data.cheq.toString().length < 3 ||data.cheq.toString().length > 6) {
      errors.push(" التحقق من شيك المالك   ");
    }
    }

   

  }
    
    


   



  
   

  // ✅ بيانات الوكيل (إن وُجد)
  if (data.ownerPrson == "yes") {
    if (!data.ownerNameAdd?.trim()) {
      errors.push(" اسم الوكيل مطلوب");
    } else if (!isValidArabicName(data.ownerNameAdd)) {
      errors.push(" اسم الوكيل يجب أن يكون رباعي وبالحروف العربية فقط");
    }

    if (!/^\d{10}$/.test(data.ownerIdAdd || "")) {
      errors.push(" رقم هوية الوكيل يجب أن يتكون من 10 أرقام");
    }

    if (!/^\d{10}$/.test(data.ownerAdd || "")) {
      errors.push(" رقم الوكالة يجب أن يتكون من 10 أرقام");
    }
  }

  // ✅ التاريخ (ميلادي وهجري)
  if (!data.nowDay || !data.nowMonth || !data.nowYear) {
    errors.push(" تاريخ اليوم (ميلادي) غير مكتمل");
  }

  if (!data.nowDayH || !data.nowMonthH || !data.nowYearH) {
    errors.push(" تاريخ اليوم (هجري) غير مكتمل");
  }

  // ✅ تاريخ الإضافة (إن وُجد جزء منه يجب أن يكتمل)
  const addDateFilled = data.addDay || data.addMonth || data.addYear;
  const addDateComplete = data.addDay && data.addMonth && data.addYear;
  if (addDateFilled && !addDateComplete) {
    errors.push(" تاريخ الاستحقاق غير مكتمل");
  }

  // ✅ مدينة العقار
  if (!data.aqarCity?.trim()) {
    errors.push(" مدينة العقار مطلوبة");
  }

  return errors;
}






// export function validateClientInputs(data, clientPhoneIsValid) {

//   const errors = [];

//   // 🟢 الاسم الكامل للعميل
//   if (!data.customerName || data.customerName.trim() === "") {
//     errors.push("❌ اسم العميل مطلوب");
//   }

//   // 🟢 رقم هوية العميل: 10 أرقام فقط
//   if (!data.customerId || !/^\d{10}$/.test(data.customerId)) {
//     errors.push("❌ رقم هوية العميل يجب أن يتكون من 10 أرقام");
//   }

//   // 🟢 مدينة العميل
//   if (!data.customerCity || data.customerCity.trim() === "") {
//     errors.push("❌ عنوان العميل مطلوبة");
//   }

//   // 🟢 رقم الجوال: 12 رقم يبدأ بـ 966
//   if (
//     !data.phone ||
//     !/^\d{12}$/.test(data.phone) ||
//     !data.phone.startsWith("966")
//   ) {
//     errors.push("❌ رقم الجوال غير صالح (يجب أن يكون 12 رقم ويبدأ بـ 966)");
//   }

//   // 🟢 تحقق من صلاحية الرقم (إذا كان متغير خارجي موجود)
//   if (typeof clientPhoneIsValid !== "undefined" && !clientPhoneIsValid) {
//     errors.push("❌ رقم الجوال مستخدم من قبل أو غير صالح");
//   }



//   // 🟢 مبلغ الدفع (اختياري لكنه رقم إن وُجد)
//   if (data.paymentAmount && isNaN(data.paymentAmount)  ) {
//     errors.push("❌ مبلغ الدفع غير صالح (يجب أن يكون رقمًا)");
//   }

//   // 🟢 اسم الشخص (مطلوب)
//   if (!data.prsonName || data.prsonName.trim() === "") {
//     errors.push("❌ اسم الشخص مطلوب");
//   }

//   // 🟢 رقم هوية الشخص
//   if (!data.prsonId || !/^\d{10}$/.test(data.prsonId)) {
//     errors.push("❌ رقم هوية الشخص يجب أن يتكون من 10 أرقام");
//   }

//   // 🟢 مدينة الشخص
//   if (!data.prsonCity || data.prsonCity.trim() === "") {
//     errors.push("❌ مدينة الشخص مطلوبة");
//   }

//   // 🟢 اسم المالك (إن وُجد نوع المالك)
//   if (data.typeOwner && (!data.ownerName || data.ownerName.trim() === "")) {
//     errors.push("❌ اسم المالك مطلوب");
//   }

//   // 🟢 رقم هوية المالك (إن وُجد نوع المالك)
//   if (data.typeOwner && (!data.ownerId || !/^\d{10}$/.test(data.ownerId))) {
//     errors.push("❌ رقم هوية المالك غير صحيح");
//   }

//   // 🟢 تاريخ اليوم (هجري و/أو ميلادي)
//   if (!data.nowDay || !data.nowMonth || !data.nowYear) {
//     errors.push("❌ تاريخ اليوم (ميلادي) غير مكتمل");
//   }

//   if (!data.nowDayH || !data.nowMonthH || !data.nowYearH) {
//     errors.push("❌ تاريخ اليوم (هجري) غير مكتمل");
//   }

//   // 🟢 التواريخ المضافة (إن وُجدت)
//   if ((data.addDay && (!data.addMonth || !data.addYear)) || 
//       (data.addMonth && (!data.addDay || !data.addYear)) || 
//       (data.addYear && (!data.addDay || !data.addMonth))) {
//     errors.push("❌ تاريخ الإضافة غير مكتمل");
//   }

//   // 🟢 مدينة العقار
//   if (!data.aqarCity || data.aqarCity.trim() === "") {
//     errors.push("❌ مدينة العقار مطلوبة");
//   }

//   return errors;
// }
