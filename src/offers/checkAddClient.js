// checkAddClient.js

export function CheckAddClient(data) {
  const errors = [];

  
  const {
       
        offerNumber,
        clientName,
        clientPhone,
        region,
         communicationType,
           cities , 
           districts , 
           propertyTypes, 
            platform ,
             notes ,
           addedByEmployee , 
            status , 
       
 
    
     

   
  } = data;

  if(communicationType=="عرض") {
  // تحقق من رقم العرض (رقم غير فارغ وعددي)
  if (!offerNumber || isNaN(offerNumber)) {
    errors.push(" رقم العرض يجب أن يكون رقمًا صحيحًا وغير فارغ");
  }


  }


  // تحقق من اسم العميل (غير فارغ)
  if (!clientName || clientName.trim().length === 0) {
    errors.push(" اسم العميل مطلوب");
  }

  // تحقق من رقم الجوال (رقم هاتف سعودي مثلاً 10 أو 11 رقم)
  if (!clientPhone || !/^05\d{8}$/.test(clientPhone)) {
    errors.push(" رقم الجوال غير صالح. يجب أن يبدأ بـ05 ويتكون من 10 أرقام");
  }

  // تحقق من المدن (يجب أن تحتوي على عنصر واحد على الأقل)
  if (!cities || cities.length === 0) {
    errors.push(" يرجى اختيار مدينة واحدة على الأقل");
  }

  // تحقق من نوع العقار (يجب أن يحتوي على عنصر واحد على الأقل)
  if (!propertyTypes || propertyTypes.length === 0) {
    errors.push(" يرجى اختيار نوع عقار واحد على الأقل");
  }


  return errors; // مصفوفة الأخطاء (فارغة إذا كانت البيانات صحيحة)
}
