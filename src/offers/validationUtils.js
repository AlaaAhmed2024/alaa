// validationUtils.js

export function validateOfferInputs(inputs) {
  const errors = [];

  const {
    contractNumber,
ownerType,
plotNumber,
planNumber,
contractDuration,
hasAgency,
ownerName,
companyName,
companyRegistry,
ownerID,
ownerPhone,
ownerBirthDate,
agencyNumber,
agentName,
agentID,
agentPhone,
agentBirthDate, 

    selectedName,
    numberOffers,
    aqarType,
    price,
    area,
    selectedCity,
    selectedDistricts,
    locationCoordinates,
    roomsCountMastar,
    roomsCount,
    bathroomsCount,
    majlesCount,
    hallsCount,
    kitchenCount,
    aqarFacade,
    streetsWidth,
    featureCarEntrance,
    featureYard,
    featureStorage,
    featureAnnex,
    featureMaid,
    featureGuard,
    featureDriver,
    featureElevator,
    featureRoof,
    featureNearServices,
    featureLaundryRoom,
    featureBalcony,
    featureParking,
    image ,
    imageContract,
    imageAgent,
    typeOffers,
  } = inputs;

  // ✅ تبويب 1: بيانات العقار الأساسية



 if (!selectedName || selectedName.trim() === "") {
    errors.push("يرجى اختيار اسم الموظف");
  }
  if (!aqarType || aqarType.trim() === "") {
    errors.push("يرجى اختيار نوع العقار");
  }

  if (!price || price < 100000) {
    errors.push("يرجى التأكد من سعر العقار");
  }

  if (!area || area < 60) {
    errors.push("يرجى التأكد من مساحة العقار");
  }

  if (!selectedCity) {
    errors.push("يرجى اختيار المدينة");
  }

  if (!selectedDistricts) {
    errors.push("يرجى اختيار الحي");
  }

  if (!locationCoordinates || locationCoordinates === "") {
    errors.push("يرجى تحديد موقع العقار على الخريطة");
  }

  // ✅ تبويب 2: بيانات داخلية
  if (!roomsCount || roomsCount < 1) {
    errors.push("يرجى إدخال عدد الغرف");
  }

    // ✅ تبويب 2: بيانات داخلية
  if (!roomsCountMastar || roomsCountMastar < 1) {
    errors.push("يرجى إدخال عدد الغرف الماستر");
  }

  if (!bathroomsCount || bathroomsCount < 1) {
    errors.push("يرجى إدخال عدد دورات المياه");
  }

  if (!majlesCount || majlesCount < 0) {
    errors.push("يرجى إدخال عدد المجالس");
  }

  if (!hallsCount || hallsCount < 0) {
    errors.push("يرجى إدخال عدد الصالات");
  }

  if (!kitchenCount || kitchenCount < 1) {
    errors.push("يرجى إدخال عدد المطابخ");
  }

  if (!aqarFacade || aqarFacade.length === 0) {
    errors.push("يرجى تحديد الواجهة أو الواجهات");
  }

  // ✅ صورة رئيسية مطلوبة
  if (!image) {
    errors.push("يجب إضافة الصورة الرئيسية للعقار");
  }









if(typeOffers=="yesOffers"){




  // ✅ التحقق من رقم الصك (إجباري + طول لا يقل عن 10)
if (!contractNumber || contractNumber.trim() === "") {
  errors.push("يرجى إدخال رقم الصك");
} else if (contractNumber.trim().length < 10) {
  errors.push("رقم الصك يجب أن لا يقل عن 10 أرقام");
}

// ✅ نوع المالك
if (!ownerType || ownerType.trim() === "") {
  errors.push("يرجى اختيار نوع المالك");
}

// ✅ رقم القطعة
if (!plotNumber || plotNumber.trim() === "") {
  errors.push("يرجى إدخال رقم القطعة");
}

// ✅ رقم المخطط
if (!planNumber || planNumber.trim() === "") {
  errors.push("يرجى إدخال رقم المخطط");
}

// ✅ مدة العقد
if (!contractDuration || contractDuration.toString().trim() === "") {
  errors.push("يرجى إدخال مدة العقد");
}

// ✅ هل يوجد وكالة
// if (!hasAgency || hasAgency.trim() === "") {
//   errors.push("يرجى تحديد ما إذا كان هناك وكالة");
// }

// ✅ اسم المالك
if (!ownerName || ownerName.trim() === "") {
  errors.push("يرجى إدخال اسم المالك");
}

// ✅ هوية المالك (10 أرقام)
if (!ownerID || ownerID.trim() === "") {
  errors.push("يرجى إدخال هوية المالك");
} else if (!/^\d{10}$/.test(ownerID.trim())) {
  errors.push("هوية المالك يجب أن تكون 10 أرقام");
}

// ✅ رقم جوال المالك
if (!ownerPhone || ownerPhone.trim() === "") {
  errors.push("يرجى إدخال رقم جوال المالك");
}

// ✅ تاريخ ميلاد المالك
// if (!ownerBirthDate ) {
//   errors.push("يرجى إدخال تاريخ ميلاد المالك");
// }

// ✅ تاريخ ميلاد المالك
if (
  !ownerBirthDate || 
  !(ownerBirthDate instanceof Date) || 
  isNaN(ownerBirthDate.getTime())
) {
  errors.push("يرجى إدخال تاريخ ميلاد المالك");
}

// ✅ تحقق إضافي على حسب نوع المالك (لو مؤسسة)
if (ownerType != "مالك"||ownerType!="مالكان") {
  if (!companyName || companyName.trim() === "") {
    errors.push("يرجى إدخال اسم الموسسة/الشركة");
  }

  if (!companyRegistry || companyRegistry.trim() === "") {
    errors.push("يرجى إدخال سجل المؤسسة /الشركة");
  } else if (!/^\d{10}$/.test(companyRegistry.trim())) {
    errors.push("سجل المؤسسة يجب أن يكون 10 أرقام");
  }
}

// ✅ تحقق من بيانات الوكيل فقط إذا فيه وكالة
if (hasAgency === "نعم") {
  if (!agencyNumber || agencyNumber.trim() === "") {
    errors.push("يرجى إدخال رقم الوكالة");
  }

  if (!agentName || agentName.trim() === "") {
    errors.push("يرجى إدخال اسم الوكيل");
  }

  if (!agentID || agentID.trim() === "") {
    errors.push("يرجى إدخال هوية الوكيل");
  } else if (!/^\d{10}$/.test(agentID.trim())) {
    errors.push("هوية الوكيل يجب أن تكون 10 أرقام");
  }

  if (!agentPhone || agentPhone.trim() === "") {
    errors.push("يرجى إدخال جوال الوكيل");
  }


  // if (!agentBirthDate ) {
  //   errors.push("يرجى إدخال تاريخ ميلاد الوكيل");
  // }


  // ✅ تاريخ ميلاد المالك
if (
  !agentBirthDate || 
  !(agentBirthDate instanceof Date) || 
  isNaN(agentBirthDate.getTime())
) {
  errors.push("يرجى إدخال تاريخ ميلاد الوكيل");
}
}




  // ✅ صورة رئيسية مطلوبة
  if (!imageContract) {
    errors.push("يجب إضافة صورة الصك ");
  }

  // ✅ صورة رئيسية مطلوبة

  if (hasAgency == "نعم") {
  if (!imageAgent) {
    errors.push("يجب إضافة صورة  الوكاله");
    }
  }



  // ✅ تبويب 3: المميزات
  if (
    !featureCarEntrance &&
    !featureYard &&
    !featureStorage &&
    !featureAnnex &&
    !featureMaid &&
    !featureGuard &&
    !featureDriver &&
    !featureElevator &&
    !featureRoof &&
    !featureNearServices &&
    !featureLaundryRoom &&
    !featureBalcony &&
    !featureParking
  ) {
    errors.push("يرجى اختيار ميزة واحدة على الأقل من مميزات العقار");
  }

}

  return errors;
}
