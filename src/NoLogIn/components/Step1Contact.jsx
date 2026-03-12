import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Step1Contact({ data, setData, onNext }) {
  const [errors, setErrors] = useState({});

const ministries = [
  "وزارة التعليم",
  "وزارة الصحة",
  "وزارة الداخلية",
  "وزارة الدفاع",
  "وزارة العدل",
  "وزارة المالية",
  "وزارة الموارد البشرية",
];

const militaryRanks = [
  "جندي",
  "جندي أول",
  "عريف",
  "وكيل رقيب",
  "رقيب",
  "رقيب أول",
  "رئيس رقباء",
  "ملازم",
  "ملازم أول",
  "نقيب",
  "رائد",
  "مقدم",
  "عقيد",
  "عميد",
  "لواء",
];

const militaryMinistries = [
  "وزارة الدفاع",
  "وزارة الداخلية",
  "الحرس الوطني",
  "رئاسة أمن الدولة",
  "الدفاع المدني",
  "قوات أمن المنشآت",
  "المديرية العامة لحرس الحدود",
];


const civilianMinistries = [
  "وزارة التعليم",
  "وزارة الصحة",
  "وزارة العدل",
  "وزارة المالية",
  "وزارة الموارد البشرية والتنمية الاجتماعية",
  "وزارة الشؤون البلدية والقروية والإسكان",
  "وزارة التجارة",
  "وزارة النقل والخدمات اللوجستية",
  "وزارة الاتصالات وتقنية المعلومات",
  "وزارة البيئة والمياه والزراعة",
];

const saudiBanks = [
  "البنك الأهلي ",
  "مصرف الراجحي",
  "بنك الرياض",
  "البنك الفرنسي",
  "البنك العربي ",
  "بنك ساب",
  "بنك البلاد",
  "بنك الجزيرة",
  "البنك السعودي للاستثمار",
  "بنك الخليج ",
  "بنك الإنماء",
  "مسار النمو"

];


const companyOptions = [
  "شركة أرامكو",
  "شركة سابك",
  "شركة الاتصالات السعودية",
  "شركة المراعي",
  "شركة عبد اللطيف جميل",
  // أضف باقي الشركات هنا
];

useEffect(() => {
  setData((prev) => ({
    ...prev,
    civilianMinistry: "",
    companyName: "",
    militaryRank: "",
    militaryMinistry: "",
  }));
}, [data.employmentSector]);





useEffect(() => {
  setErrors({});
}, [data.employmentSector]);

  const handleNext = () => {
    let newErrors = {};
    // if (!data.name) newErrors.name = "مطلوب";
    // if (!data.phone) newErrors.phone = "مطلوب";
    // if (!data.city) newErrors.city = "مطلوب";
    if (!data.loanType) newErrors.loanType = "مطلوب اختيار نوع المنتج ";
    if (!data.employmentSector) newErrors.employmentSector = "مطلوب اختيار القطاع";

    
  // تحقق حسب جهة العمل
  if (data.employmentSector === "government") {
    if (!data.civilianMinistry)
      newErrors.civilianMinistry = "مطلوب اختيار جهه العمل ";
  }

  if (data.employmentSector === "private"||data.employmentSector === "noneGovernment") {
    if (!data.companyName)
      newErrors.companyName = "اسم جهة العمل مطلوب";
  }

    if (data.employmentSector === "privateHight") {
    if (!data.companyNameHight)
      newErrors.companyNameHight = "اسم جهة العمل مطلوب";
  }

  if (data.employmentSector === "military") {
    if (!data.militaryRank)
      newErrors.militaryRank = " مطلوب اختيار الرتبة العسكرية";

    if (!data.militaryMinistry)
      newErrors.militaryMinistry = "الجهة العسكرية مطلوبة";
  }

   

  if (!data.saudiBanks) newErrors.saudiBanks = " مطلوب اختيار البنك الحالي";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onNext();
  };










  const employmentSectorLabels = {
  government: "قطاع حكومي مدني",
   noneGovernment:"شبة حكومي",
   military: "قطاع عسكري",
   privateHight: "شركات كبري",
  private: "قطاع خاص",
  retired: "متقاعد",
};





const sendWhatsApp = () => {
  const message = `
السلام عليكم،
بخصوص حسبة تمويل عقاري:

البنك: ${data.saudiBanks|| "غير محدد"}
الوظيفة: ${employmentSectorLabels[data.employmentSector] || "غير محدد"}

`;

  const url = `https://wa.me/966508417587?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};







  return (
    <Card sx={{ maxWidth: 650, mx: "auto", p: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          الوظيفه و البنك 
        </Typography>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6} >
            <Select
              fullWidth
               sx={{ width: "100%" }}
              value={data.loanType || ""}
              onChange={(e) => setData({ ...data, loanType: e.target.value })}
              displayEmpty
              error={!!errors.loanType}
            >
              <MenuItem value="" disabled>اختر نوع المنتج </MenuItem>
              <MenuItem value="unit1">وحدة جاهزة من السوق</MenuItem>
              <MenuItem value="private">وحدة جاهزة من الاسكان </MenuItem>
              <MenuItem value="military">شراء الارض و قرض للبناء</MenuItem>
              <MenuItem value="1"> بناء ذاتي امتلك الارض قرض للبناء</MenuItem>
                <MenuItem value="454"> البيع علي الخارطه </MenuItem>
                  <MenuItem value="retir43343ed"> رهن  </MenuItem>
            </Select>
            {errors.loanType && <Typography color="error">{errors.loanType}</Typography>}
          </Grid>


<Grid item xs={12} md={6}>
  <Select
    fullWidth
    value={data.employmentSector || ""}
    onChange={(e) =>
      setData({ ...data, employmentSector: e.target.value })
    }
    displayEmpty
    error={!!errors.employmentSector}
  >
    <MenuItem value="" disabled>
      اختر جهة العمل
    </MenuItem>

    <MenuItem value="government">
      قطاع حكومي مدني
    </MenuItem>

      <MenuItem value="military">
      قطاع عسكري
      </MenuItem>

       <MenuItem value="noneGovernment">
      قطاع شبة حكومي
     </MenuItem>

    <MenuItem value="retired">
      متقاعد
    </MenuItem>

     <MenuItem value="privateHight">
      شركات كبري
    </MenuItem>

    <MenuItem value="private">
      قطاع خاص
    </MenuItem>

  
  </Select>

  {errors.employmentSector && (
    <Typography color="error" variant="caption">
      {errors.employmentSector}
    </Typography>
  )}
</Grid>

{data.employmentSector === "government" && (
  <Grid item xs={12} md={6}>
    <Select
      fullWidth
      value={data.civilianMinistry || ""}
      onChange={(e) =>
        setData({ ...data, civilianMinistry: e.target.value })
      }
      displayEmpty
       error={!!errors.civilianMinistry}
    >
      <MenuItem value="" disabled>اختر الوزارة</MenuItem>
      {civilianMinistries.map((min) => (
        <MenuItem key={min} value={min}>{min}</MenuItem>
      ))}
    </Select>
      {errors.civilianMinistry && <Typography color="error">{errors.civilianMinistry}</Typography>}
  </Grid>
)}


{data.employmentSector === "private" && (
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="اسم جهة العمل"
      value={data.companyName || ""}
      onChange={(e) =>
        setData({ ...data, companyName: e.target.value })
      }
         error={!!errors.companyName}
    />
      {errors.companyName && <Typography color="error">{errors.companyName}</Typography>}
  </Grid>
)}

{data.employmentSector === "privateHight" && (
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="اسم جهة العمل"
      value={data.companyNameHight || ""}
      onChange={(e) =>
        setData({ ...data, companyNameHight: e.target.value })
      }
         error={!!errors.companyNameHight}
    />
      {errors.companyNameHight && <Typography color="error">{errors.companyNameHight}</Typography>}
  </Grid>
)}


{data.employmentSector === "noneGovernment" && (
  <Grid item xs={12} md={6}>
    <Autocomplete
      freeSolo // يسمح بالكتابة وإضافة قيمة جديدة
      options={companyOptions}
      value={data.companyName || ""}
      onChange={(event, newValue) =>
        setData({ ...data, companyName: newValue })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="اسم جهة العمل"
          variant="outlined"
          error={!!errors.companyName}
          // helperText={errors.companyName}
        />
      )}
    />
      {errors.companyName && <Typography color="error">{errors.companyName}</Typography>}
  </Grid>
)}


{data.employmentSector === "military" && (
  <>
    <Grid item xs={12} md={6}>
      <Select
        fullWidth
        value={data.militaryRank || ""}
        onChange={(e) =>
          setData({ ...data, militaryRank: e.target.value })
        }
        displayEmpty
            error={!!errors.militaryRank}
      >
        <MenuItem value="" disabled>اختر الرتبة</MenuItem>
        {militaryRanks.map((rank) => (
          <MenuItem key={rank} value={rank}>{rank}</MenuItem>
        ))}
      </Select>
        {errors.militaryRank && <Typography color="error">{errors.militaryRank}</Typography>}
    </Grid>

    <Grid item xs={12} md={6}>
      <Select
        fullWidth
        value={data.militaryMinistry || ""}
        onChange={(e) =>
          setData({ ...data, militaryMinistry: e.target.value })
        }
        displayEmpty
          error={!!errors.militaryMinistry}
      >
        <MenuItem value="" disabled>اختر الوزارة</MenuItem>
        {militaryMinistries.map((sector) => (
          <MenuItem key={sector} value={sector}>{sector}</MenuItem>
        ))}
      </Select>
        {errors.militaryMinistry && <Typography color="error">{errors.militaryMinistry}</Typography>}
    </Grid>
  </>
)}


{data.employmentSector === "retired" && null}






  <Grid item xs={12} md={6}>
    <Select
      fullWidth
      value={data.saudiBanks || ""}
      onChange={(e) =>
        setData({ ...data, saudiBanks: e.target.value })
      }
      displayEmpty
          error={!!errors.saudiBanks}
    >
      <MenuItem value="" disabled>اختر البنك</MenuItem>
      {saudiBanks.map((min) => (
        <MenuItem key={min} value={min}>{min}</MenuItem>
      ))}
    </Select>
      {errors.saudiBanks && <Typography color="error">{errors.saudiBanks}</Typography>}
  </Grid>









 <Grid item xs={12} sx={ {width: "100%"}}>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      mt: 4,
   
    }}
  >

    
    <Button
      // variant="outlined"
      variant="contained"
      color="success"
       onClick={sendWhatsApp}
      sx={{ minWidth: 140 }}
    >
      التواصل
    </Button>

    <Button
      variant="contained"
      onClick={handleNext}
      sx={{ minWidth: 140 }}
    >
      التالي
    </Button>
  </Box>
</Grid>


        
        </Grid>
      </CardContent>
    </Card>
  );
}



