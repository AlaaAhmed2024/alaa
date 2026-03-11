import { Card, CardContent, TextField, Typography, Grid, Button, MenuItem, Select, Box, Autocomplete, Tooltip , Switch } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Step2Identity({ data, setData, onNext, onBack }) {
  const [errors, setErrors] = useState({});

 const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark

  const handleNext = () => {
    let newErrors = {};
    if (!data.netSalary) newErrors.netSalary = "مطلوب الراتب الصافي";
    if (Number(data.netSalary) < 3000) {
  newErrors.netSalary = "الراتب الصافي لا يقل عن 3000 ريال";
}
        if (!data.baseSalary) newErrors.baseSalary = "مطلوب الراتب الاساسي";

            if (Number(data.baseSalary) < 1000) {
  newErrors.baseSalary = "الراتب الصافي لا يقل عن 1000 ريال";
}

               if (!data.monthBirth) newErrors.monthBirth = "مطلوب شهر الميلاد";
                      if (!data.monthStartWork) newErrors.monthStartWork = "مطلوب شهر التعيين";

                                    if (!data.yearBirth) newErrors.yearBirth = "مطلوب سنة الميلاد";
              if (!data.yearStartWork) newErrors.yearStartWork = "مطلوب سنة التعيين";

                if(data.employmentSector === "private" ||data.employmentSector === "noneGovernment"){
                  if (!data.govDuration) newErrors.govDuration = "مطلوب مدة الاشتراك";

              }

    // if (!data.birthDate) newErrors.birthDate = "مطلوب";
    // if (!data.maritalStatus) newErrors.maritalStatus = "مطلوب";
    // if (data.dependents === undefined || data.dependents === "") newErrors.dependents = "مطلوب";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onNext();
  };

const [typeCalender,setTypeCalender]=useState("Hijri")

const monthsHijri = [
  { value: 1, label: "محرم (1)" },
  { value: 2, label: "صفر (2)" },
  { value: 3, label: "ربيع الأول (3)" },
  { value: 4, label: "ربيع الآخر (4)" },
  { value: 5, label: "جمادى الأولى (5)" },
  { value: 6, label: "جمادى الآخرة (6)" },
  { value: 7, label: "رجب (7)" },
  { value: 8, label: "شعبان (8)" },
  { value: 9, label: "رمضان (9)" },
  { value: 10, label: "شوال (10)" },
  { value: 11, label: "ذو القعدة (11)" },
  { value: 12, label: "ذو الحجة (12)" },
];

const monthsM = [
  { value: 1, label: "يناير (1)" },
  { value: 2, label: "فبراير (2)" },
  { value: 3, label: " مارس (3)" },
  { value: 4, label: " ابريل (4)" },
  { value: 5, label: " مايو (5)" },
  { value: 6, label: " يونيو (6)" },
  { value: 7, label: "يوليو (7)" },
  { value: 8, label: "اغسطس (8)" },
  { value: 9, label: "سبتمبر (9)" },
  { value: 10, label: "اكتوبر (10)" },
  { value: 11, label: " نوفمبر (11)" },
  { value: 12, label: " ديسمبر (12)" },
];



// قائمة السنوات الهجرية من 1370 إلى 1447
const hijriYears = Array.from({ length: 1447 - 1370 + 1 }, (_, i) => {
  const year = 1370 + i;
  return year.toString();
});


// قائمة السنوات الهجرية من 1370 إلى 1447
const Yearsm = Array.from({ length: 2026 - 1950 + 1 }, (_, i) => {
  const year = 1950 + i;
  return year.toString();
});




  const toggleTypeClander = () => {
    setTypeCalender((prev) => {
      const next = prev === "Hijri" ? "m" : "Hijri";
      return next;
    });
  };


//   if(typeCalender==="Hijri"){
// var year =
// var month=
//   }else{
// var year =
// var month=
//   }

// قائمة مدة الاشتراك  التامينات  1 إلى 500
const gov = Array.from({ length: 500 - 1 + 1 }, (_, i) => {
  const duration = 1 + i;
  return duration.toString();
});

if(data.employmentSector === "private" ||data.employmentSector === "noneGovernment"){
  var showGov=true
}else{
  showGov=false
}


const grid47 = {
  flexBasis: { sm: "47%" },
  maxWidth: { sm: "47%" },
};





if (typeCalender === "Hijri") {
  const hijriDate = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
    year: "numeric",
    month: "numeric",
  }).formatToParts(new Date());

  data.yearDay = hijriDate.find(p => p.type === "year")?.value;
  data.monthDay = hijriDate.find(p => p.type === "month")?.value;

} else {
  const today = new Date();
  data.yearDay = today.getFullYear();
  data.monthDay = today.getMonth() + 1; // الأشهر تبدأ من 0
}




  return (

    <Card sx={{ maxWidth: 650, mx: "auto", p: 3, borderRadius: 3, boxShadow: 4 }} className="w-50-input">
      <CardContent>
     <div style={{display:"flex" , justifyContent:"space-between"}} className="tow-inpt-3">
        <Typography variant="h5" fontWeight="bold" mb={3}>
          الرواتب و التواريخ  
        </Typography>

  <Tooltip title={typeCalender === "Hijri" ? "التواريخ الميلادي" : "التواريخ  الهجري"}
    sx={{
    "& .MuiTooltip-tooltip": {
      height: 40,
         position: "relative",
    },
  }}
  
  >
    <Box
      onClick={toggleTypeClander}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 1,
        borderRadius: "999px",
        cursor: "pointer",
      position: { xs: "absolute", md: "relative" },
    left: { xs: 8, md: "auto" },
        backgroundColor: mode === "dark"
          // ? "rgba(0,0,0,0.08)"
         ? "rgb(0 0 0 / 60%)"
          // : "#8f8e93ff",
           : "rgb(233 231 238)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor:
            mode === "dark"
              ? "rgba(255,255,255,0.15)"
              : "rgba(97, 97, 97, 0.6)",
        },
      }}
    >
      
      {typeCalender === "Hijri" ? (
          // <LightModeIcon fontSize="small" />
        <p style={{marginBottom:"0.0rem"}}>
        هجري
        </p>
      ) : (
        // <DarkModeIcon fontSize="small" />
      <p style={{marginBottom:"0.0rem"}}>
    
          ميلادي


        </p>
      )}

      <Switch
        checked={typeCalender === "Hijri"}
        size="small"
        sx={{ pointerEvents: "none" }}
      />
    </Box>
  </Tooltip>
</div>

        <Grid container spacing={2} className="mobile-lagre" id="v-large-row">
          <Grid item xs={12} sm={6} >
            {/* <TextField
              label="الراتب الصافي/الصراف"
              fullWidth
              error={!!errors.netSalary}
              helperText={errors.netSalary}
              value={data.netSalary || ""}
              onChange={(e) => setData({ ...data, netSalary: e.target.value })}
            />
        */}

        <TextField
  label="الراتب الصافي/الصراف"
  fullWidth
  type="number"
  inputProps={{
    min: 3000,
    step: 1,
  }}
  error={!!errors.netSalary}
  helperText={errors.netSalary}
  value={data.netSalary || ""}
  onChange={(e) => {
    const value = e.target.value;

    // منع القيم السالبة
    if (value < 0) return;

    setData({ ...data, netSalary: value });
  }}
  onKeyDown={(e) => {
  if (
    !/[0-9]/.test(e.key) &&
    !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
  ) {
    e.preventDefault();
  }
}}

/>

          </Grid>


          

                    <Grid item xs={12} sm={6}>
            {/* <TextField
              label="الراتب الاساسي"
              fullWidth
              error={!!errors.baseSalary}
              helperText={errors.baseSalary}
              value={data.baseSalary || ""}
              onChange={(e) => setData({ ...data, baseSalary: e.target.value })}
            /> */}
 <TextField
  label="الراتب الاساسي "
  fullWidth
  type="number"
  inputProps={{
    min: 1000,
    step: 1,
  }}
  error={!!errors.baseSalary}
  helperText={errors.baseSalary}
  value={data.baseSalary || ""}
  onChange={(e) => {
    const value = e.target.value;

    // منع القيم السالبة
    if (value < 0) return;

    setData({ ...data, baseSalary: value });
  }}
  onKeyDown={(e) => {
  if (
    !/[0-9]/.test(e.key) &&
    !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
  ) {
    e.preventDefault();
  }
}}

/>


          </Grid>

  <Grid item   xs={12} sm={6}>
    <Select
      fullWidth
      value={data.monthBirth || ""}
      onChange={(e) =>
        setData({ ...data, monthBirth: e.target.value })
      }
      displayEmpty
    >
      <MenuItem value="" disabled>اختر شهر الميلاد</MenuItem>
      {/* {monthsHijri.map((min) => ( */}

      {(typeCalender==="Hijri"? monthsHijri:monthsM ).map((min) => (
        <MenuItem key={min.value} value={min.value}>{min.label}</MenuItem>
      ))}
    </Select>
      {errors.monthBirth && <Typography color="error">{errors.monthBirth}</Typography>}
  </Grid>


  <Grid item xs={12} sm={6}>
    <Autocomplete
  freeSolo // يسمح بالكتابة
  options={typeCalender==="Hijri"?  hijriYears :Yearsm} // القائمة
  value={data.yearBirth || ""}
  onChange={(event, newValue) => setData({ ...data, yearBirth: newValue })}
  renderInput={(params) => (
    <TextField {...params} label="اختر سنة الميلاد" variant="outlined" />
  )}
/>
 
      {errors.yearBirth && <Typography color="error">{errors.yearBirth}</Typography>}
  </Grid>







   <Grid item xs={12} sm={6}>
    <Select
      fullWidth
      value={data.monthStartWork || ""}
      onChange={(e) =>
        setData({ ...data, monthStartWork: e.target.value })
      }
      displayEmpty
    >
      <MenuItem value="" disabled>اختر شهر التعيين</MenuItem>
      {/* {monthsHijri.map((min) => ( */}
         {(typeCalender==="Hijri"? monthsHijri:monthsM ).map((min) => (
        <MenuItem key={min.value} value={min.value}>{min.label}</MenuItem>
      ))}
    </Select>
      {errors.monthStartWork && <Typography color="error">{errors.monthStartWork}</Typography>}
  </Grid>



    <Grid item xs={12} sm={6}>
    <Autocomplete
  freeSolo // يسمح بالكتابة
  // options={hijriYears} // القائمة
    options={typeCalender==="Hijri"?  hijriYears :Yearsm} // القائمة
  value={data.yearStartWork || ""}
  onChange={(event, newValue) => setData({ ...data, yearStartWork: newValue })}
  renderInput={(params) => (
    <TextField {...params} label="اختر سنة التعيين" variant="outlined" />
  )}
/>
 
      {errors.yearStartWork && <Typography color="error">{errors.yearStartWork}</Typography>}
  </Grid>


{showGov&&(<>
    <Grid item xs={12} sm={6}>
    <Autocomplete
  freeSolo // يسمح بالكتابة
  options={gov} // القائمة
  value={data.govDuration || ""}
  onChange={(event, newValue) => setData({ ...data, govDuration: newValue })}
  renderInput={(params) => (
    <TextField {...params} label="اختر مدة الاشتراك بالتامينات" variant="outlined" />
  )}
/>
 
      {errors.govDuration && <Typography color="error">{errors.govDuration}</Typography>}
  </Grid>

</>)



}


{/* 
          <Grid item xs={6} sm={3}>
            <TextField
              label="تاريخ الميلاد"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors.birthDate}
              helperText={errors.birthDate}
              value={data.birthDate || ""}
              onChange={(e) => setData({ ...data, birthDate: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              fullWidth
              value={data.maritalStatus || ""}
              onChange={(e) => setData({ ...data, maritalStatus: e.target.value })}
              displayEmpty
              error={!!errors.maritalStatus}
            >
              <MenuItem value="" disabled>اختر الحالة الاجتماعية</MenuItem>
              <MenuItem value="single">أعزب</MenuItem>
              <MenuItem value="married">متزوج</MenuItem>
              <MenuItem value="divorced">مطلق</MenuItem>
              <MenuItem value="widowed">أرمل</MenuItem>
            </Select>
            {errors.maritalStatus && <Typography color="error">{errors.maritalStatus}</Typography>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="عدد المعالين"
              type="number"
              fullWidth
              error={!!errors.dependents}
              helperText={errors.dependents}
              value={data.dependents || ""}
              onChange={(e) => setData({ ...data, dependents: e.target.value })}
            />
          </Grid> */}

  <Grid item xs={12} sx={ {width: "100%"}} className="w-100-vist" id="w-100-vist">
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      mt: 4,
     
    }}
  >
    <Button
      variant="outlined"
      onClick={onBack}
      sx={{ minWidth: 140  }}
      className="ml-mr-5"
    >
      السابق
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
