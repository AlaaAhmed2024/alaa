


import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Autocomplete
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Step3Job({ data, setData, onNext, onBack }) {
  const [errors, setErrors] = useState({});

  // قائمة أنواع القروض / الالتزامات
  const loanTypesOptions = [
    "شخصي",
    "عقاري",
    "سيارة",
    "امكان",
    "جسر مرن",
    "شركات أخرى",
  ];

  // تنظيف الالتزامات إذا اختر "لا"
  useEffect(() => {
    if (data.obligationsYesNo === "no") {
      setData((prev) => ({
        ...prev,
        obligations: [],
      }));
    }
  }, [data.obligationsYesNo]);

  
//   useEffect(() => {
//   if (data.newPrsonalYesNo === "no") {
//     setData((prev) => ({
//       ...prev,
//       newPrsonalYesNo: "",
//     }));
//   }
// }, [data.newPrsonalYesNo]);

  // التحقق قبل الانتقال
  const handleNext = () => {
    let newErrors = {};

    if (!data.obligationsYesNo) newErrors.obligationsYesNo = "هل يوجد التزامات؟";

    if (data.obligationsYesNo === "yes") {
      if (!data.obligations || data.obligations.length === 0)
        newErrors.obligations = "مطلوب اختيار الالتزامات";




      

      // تحقق لكل التزام من القسط والمتبقي ونوعه
      data.obligations?.forEach((ob, index) => {
        if (!ob.type) {
          newErrors[`type-${index}`] = "اختر نوع المتبقي";
        }
        if (!ob.value) {
          newErrors[`value-${index}`] = "ادخل القسط";
        }
        if (!ob.remaining) {
          newErrors[`remaining-${index}`] = "ادخل المبلغ أو المدة المتبقية";
        }
      });
    }


    
if(data.obligationsYesNo === "no"){
   if (!data.newPrsonalYesNo) newErrors.newPrsonalYesNo = "مطلوب اختيار هل تريد شخصي جديد او لا   ";

}

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) onNext();
  };



    // إذا لم يوجد obligations أصلاً، أنشئ مصفوفة فارغة
  if (!data.obligations) data.obligations = [];
  if (!data.obligationsYesNo) data.obligationsYesNo = "";

  return (
    <Card sx={{ maxWidth: 650, mx: "auto", p: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={3}>
            الالتزامات الحالية
        </Typography>
        <Grid container spacing={2}>

          {/* هل يوجد التزامات */}
          <Grid item xs={12}>
            <Typography sx={{ display: "inline-block" }}>هل يوجد التزامات؟</Typography>
            <RadioGroup
              row
              value={data.obligationsYesNo || ""}
              onChange={(e) => setData({ ...data, obligationsYesNo: e.target.value })}
              sx={{ display: "inline-block" }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="نعم" />
              <FormControlLabel value="no" control={<Radio />} label="لا" />
            </RadioGroup>
            {errors.obligationsYesNo && <Typography color="error">{errors.obligationsYesNo}</Typography>}
          </Grid>

          {/* اختيار الالتزامات إذا نعم */}
          {data.obligationsYesNo === "yes" && (


<>
  {/* اختيار الالتزامات */}
  <Grid item xs={12}>
    <Autocomplete
      multiple
      fullWidth
      options={loanTypesOptions}
      value={data.obligations.map((o) => o.name)}
      onChange={(event, newValues) => {
        const newObligations = newValues.map((name) => {
          const exist = data.obligations.find((o) => o.name === name);
          return (
            exist || {
              name,
              type: "",
              value: "",
              remaining: "",
            }
          );
        });
        setData({ ...data, obligations: newObligations });
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox sx={{ mr: 1 }} checked={selected} />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="اختر الالتزامات"
          error={!!errors.obligations}
          helperText={errors.obligations}
        />
      )}
    />
  </Grid>

  {/* بيانات كل التزام */}
  {data.obligations.map((ob, index) => (
    <Grid
      item
      xs={12}
      key={ob.name}
      sx={{
        mt: 2,
        border: "1px solid #333",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Grid container spacing={2}>
        {/* اسم الالتزام */}
        <Grid item xs={12}>
          <Typography fontWeight="bold">{ob.name}</Typography>
        </Grid>



  <Grid item xs={12} md={4}>
  <Typography sx={{ mb: 1 }}>نوع المتبقي</Typography>

  <RadioGroup
    row
    value={ob.type}
    onChange={(e) => {
      const newObs = [...data.obligations];
      newObs[index].type = e.target.value;
      newObs[index].remaining = "";
      setData({ ...data, obligations: newObs });
    }}
  >
    <FormControlLabel
      value="المدة المتبقية"
      control={<Radio />}
      label="المدة المتبقية"
    />

    <FormControlLabel
      value="المبلغ المتبقي"
      control={<Radio />}
      label="المبلغ المتبقي"
    />
  </RadioGroup>

  {errors[`type-${index}`] && (
    <Typography color="error" variant="caption">
      {errors[`type-${index}`]}
    </Typography>
  )}
</Grid>


        {/* القسط */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="القسط"
            type="number"
            value={ob.value}
            onChange={(e) => {
              const newObs = [...data.obligations];
              newObs[index].value = e.target.value;
              setData({ ...data, obligations: newObs });
            }}
            error={!!errors[`value-${index}`]}
            helperText={errors[`value-${index}`]}
          />
        </Grid>

        {/* المتبقي */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label={ob.type || "المتبقي"}
            type={ob.type === "المبلغ المتبقي" ? "number" : "text"}
            value={ob.remaining}
            onChange={(e) => {
              const newObs = [...data.obligations];
              newObs[index].remaining = e.target.value;
              setData({ ...data, obligations: newObs });
            }}
            error={!!errors[`remaining-${index}`]}
            helperText={errors[`remaining-${index}`]}
          />
        </Grid>
      </Grid>
    </Grid>
  ))}
</>

          )}


 {data.obligationsYesNo === "no" && (<>


           {/* هل يوجد التزامات */}
          <Grid item xs={12}>
            <Typography sx={{ display: "inline-block" }}>هل تريد شخصي جديد ؟</Typography>
            <RadioGroup
              row
              value={data.newPrsonalYesNo }
              onChange={(e) => setData({ ...data, newPrsonalYesNo: e.target.value })}
              sx={{ display: "inline-block" }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="نعم" />
              <FormControlLabel value="no" control={<Radio />} label="لا" />
            </RadioGroup>
            {errors.newPrsonalYesNo && <Typography color="error">{errors.newPrsonalYesNo}</Typography>}
          </Grid>
 
 
 
 </>)}
          {/* أزرار السابق والتالي */}
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button variant="outlined" onClick={onBack} sx={{ minWidth: 140 }} className="ml-mr-5">
                السابق
              </Button>
              <Button variant="contained" onClick={handleNext} sx={{ minWidth: 140 }}>
                التالي
              </Button>
            </Box>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
}



