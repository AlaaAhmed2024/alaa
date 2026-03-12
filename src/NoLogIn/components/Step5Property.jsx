import { Card, CardContent, Typography, Grid, Button, RadioGroup, FormControlLabel, Radio, TextField, Slider, Select, MenuItem, Box, Autocomplete } from "@mui/material";
import { useState } from "react";

export default function Step5Property({ data, setData, onNext, onBack }) {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    let newErrors = {};
    if (!data.city) newErrors.city = "مطلوب المدينة";
    
      if (!data.name) newErrors.name = "مطلوب الاسم ";

        if (!data.phone) {
    newErrors.phone = "مطلوب رقم الجوال";
  } else if (!/^05\d{8}$/.test(data.phone)) {
    // ^05  => يبدأ بـ 05
    // \d{8} => بعدها 8 أرقام (المجموع 10)
    newErrors.phone = "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام";
  }


    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onNext();
  };

  const saudiCities = [
  "الرياض",
  "جدة",
  "مكة المكرمة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الظهران",
  "القطيف",
  "الأحساء",
  "الجبيل",
  "الطائف",
  "أبها",
  "خميس مشيط",
  "جازان",
  "نجران",
  "الباحة",
  "تبوك",
  "حائل",
  "عرعر",
  "سكاكا",
  "القريات",
  "ينبع",
  "العلا",
  "بريدة",
  "عنيزة",
  "الرس",
  "المجمعة",
  "الزلفي",
  "شقراء",
  "الدوادمي",
  "القنفذة",
  "بيشة",
  "محايل",
  "صبيا",
  "أملج",
  "الوجه",
  "رابغ",
  "الليث",
  "ضباء"
];


  return (
    <Card sx={{ maxWidth: 650, mx: "auto", p: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={3}>بيانات التواصل</Typography>
        <Grid container spacing={2}>


  

          <Grid item xs={12} sm={6}>
            <TextField
              label="الاسم الكامل"
              fullWidth
               sx={{ width: "100%" }}
              error={!!errors.name}
              helperText={errors.name}
              value={data.name || ""}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              label="رقم الجوال"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone}
              value={data.phone || ""}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            /> */}

            <TextField
  label="رقم الجوال"
  fullWidth
  error={!!errors.phone}
  helperText={errors.phone}
  value={data.phone || ""}
  inputProps={{ maxLength: 10 }}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    setData({ ...data, phone: value });
  }}
/>

          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              label="رمز الدولة"
              fullWidth
              value={data.countryCode || ""}
              onChange={(e) => setData({ ...data, countryCode: e.target.value })}
            />
          </Grid> */}


          {/* <Grid item xs={12} sm={6}>
            <TextField
              label="المدينة"
              fullWidth
              error={!!errors.city}
              helperText={errors.city}
              value={data.city || ""}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </Grid> */}

<Grid item xs={12} sm={6}>
  <Autocomplete
   
  freeSolo
  autoHighlight
  autoComplete
  includeInputInList



    options={saudiCities}
    value={data.city || ""}
    onChange={(event, newValue) => {
      setData({ ...data, city: newValue });
    }}
    onInputChange={(event, newInputValue) => {
      setData({ ...data, city: newInputValue });
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        label="المدينة"
        fullWidth
        error={!!errors.city}
        helperText={errors.city}
      />
    )}
  />
</Grid>

          {/* <Grid item xs={12}>
            <Typography sx={{display:"inline-block"}}>هل أنت مواطن؟</Typography>
            <RadioGroup
              row
              value={data.isCitizen || "yes"}
              onChange={(e) => setData({ ...data, isCitizen: e.target.value })}
               sx={{display:"inline-block"}}
            >
              <FormControlLabel value="yes" control={<Radio />} label="نعم" />
              <FormControlLabel value="no" control={<Radio />} label="لا" />
            </RadioGroup>
          </Grid> */}












          {/* <Grid item xs={6}>
            <Button variant="outlined" fullWidth onClick={onBack}>السابق</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth onClick={handleNext}>التالي</Button>
          </Grid> */}

  <Grid item xs={12} sx={ {width: "100%"}}>
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
      sx={{ minWidth: 140 }}
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
