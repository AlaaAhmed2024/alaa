import { Card, CardContent, Typography, Grid, Button, RadioGroup, FormControlLabel, Radio, TextField, Box, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

export default function Step4CurrentFinance({ data, setData, onNext, onBack }) {
  const [errors, setErrors] = useState({});





  useEffect(() => {
  if (data.sauidyYesNo === "no") {
    setData((prev) => ({
      ...prev,
      firstHouse: "",
    }));
  }
}, [data.sauidyYesNo]);

useEffect(() => {
  if (data.houseSuuportYesNo === "no") {
    setData((prev) => ({
      ...prev,
      houseSuuport: "",
    }));
  }
}, [data.houseSuuportYesNo]);


  const handleNext = () => {
    let newErrors = {};

 if (!data.financingTypeYesNo) newErrors.financingTypeYesNo = "مطلوب اختيار  قبل التقاعد فقط او قبل و بعد ";
  if (!data.sauidyYesNo) newErrors.sauidyYesNo = "مطلوب اختيار سعودي و لا مقيم";
  if(data.houseSuuportYesNo=="yes"&&data.employmentSector==="military"&&data.militaryMinistry===
  "وزارة الدفاع"){

      if (!data.ministryDefenseSelect) newErrors.ministryDefenseSelect = "مطلوب اختيار حاله دعم الدفاع   ";
  }

if(data.sauidyYesNo === "yes"){
   if (!data.firstHouse) newErrors.firstHouse = " مطلوب اختيار حاله الشهادة";
    if (!data.houseSuuportYesNo) newErrors.houseSuuportYesNo = "الدعم السكني";

           if(data.houseSuuportYesNo === "yes"){
           if (!data.houseSuuport) newErrors.houseSuuport = " مطلوب اختيار حاله الدعم";
         }
  }







    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onNext();
  };

  return (
    <Card sx={{ maxWidth: 650, mx: "auto", p: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={3}> الجنسية و الدعم</Typography>
        <Grid container spacing={2}>


          <Grid item xs={12}>
            <Typography  sx={{display:"inline-block"}}>هل تريد بعد التقاعد؟</Typography>
            <RadioGroup
             sx={{display:"inline-block"}}
              row
              value={data.financingTypeYesNo }
              onChange={(e) => setData({ ...data, financingTypeYesNo: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="نعم" />
              <FormControlLabel value="no" control={<Radio />} label="لا" />
            </RadioGroup>
              {errors.financingTypeYesNo && <Typography color="error">{errors.financingTypeYesNo}</Typography>}
          </Grid>


          <Grid item xs={12}>
            <Typography  sx={{display:"inline-block"}}>هل انت  سعودي؟</Typography>
            <RadioGroup
             sx={{display:"inline-block"}}
              row
              value={data.sauidyYesNo }
              onChange={(e) => setData({ ...data, sauidyYesNo: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="نعم" />
              <FormControlLabel value="no" control={<Radio />} label="لا" />
            </RadioGroup>
              {errors.sauidyYesNo && <Typography color="error">{errors.sauidyYesNo}</Typography>}
          </Grid>
          {data.sauidyYesNo === "yes" && (
            <>



            <Grid item xs={12}>
            <Typography sx={{display:"inline-block"}}>هل أنت مدعوم  من الاسكان؟</Typography>
            <RadioGroup
              row
              value={data.houseSuuportYesNo }
              onChange={(e) => setData({ ...data, houseSuuportYesNo: e.target.value })}
               sx={{display:"inline-block"}}
            >
              <FormControlLabel value="yes" control={<Radio />} label="نعم" />
              <FormControlLabel value="no" control={<Radio />} label="لا" />
            </RadioGroup>
                    {errors.houseSuuportYesNo && <Typography color="error">{errors.houseSuuportYesNo}</Typography>}
          </Grid>

 {data.houseSuuportYesNo=="yes"&&(<>
          
          
   <Grid item xs={12} md={6}>
  <Select
    fullWidth
    value={data.houseSuuport || ""}
    onChange={(e) =>
      setData({ ...data, houseSuuport: e.target.value })
    }
    displayEmpty
    error={!!errors.houseSuuport}
  >
    <MenuItem value="" disabled>
      اختر نوع الدعم السكني
    </MenuItem>

    <MenuItem value="yesMontly">
       نظام قسط شهري
    </MenuItem>

    <MenuItem value="yesBaqa">
      نظام مبلغ باقة
    </MenuItem>




  </Select>

  {errors.houseSuuport && (
    <Typography color="error" variant="caption">
      {errors.houseSuuport}
    </Typography>
  )}


</Grid>
          
          </>)}








 {data.houseSuuportYesNo=="yes"&&data.employmentSector==="military"&&data.militaryMinistry===
  "وزارة الدفاع"&&(<>
          
          
   <Grid item xs={12} md={6}>
  <Select
    fullWidth
    value={data.ministryDefenseSelect || ""}
    onChange={(e) =>
      setData({ ...data, ministryDefenseSelect: e.target.value })
    }
    displayEmpty
    error={!!errors.ministryDefenseSelect}
  >
    <MenuItem value="" disabled>
    مستحق دعم الدفاع
    </MenuItem>

    <MenuItem value="yes">
      نعم مستحق
    </MenuItem>

    <MenuItem value="no">
     غير مستحق
    </MenuItem>




  </Select>

  {errors.ministryDefenseSelect && (
    <Typography color="error" variant="caption">
      {errors.ministryDefenseSelect}
    </Typography>
  )}


</Grid>
          
          </>)}

















                        <Grid item xs={12}>
                          <Typography sx={{display:"inline-block"}}>هل تمتلك شهادة اعفاء الضريبة؟</Typography>
                          <RadioGroup
                            row
                            value={data.firstHouse }
                            onChange={(e) => setData({ ...data, firstHouse: e.target.value })}
                             sx={{display:"inline-block"}}
                          >
                            <FormControlLabel value="yes" control={<Radio />} label="نعم" />
                            <FormControlLabel value="no" control={<Radio />} label="لا" />
                          </RadioGroup>
                                      {errors.firstHouse && <Typography color="error">{errors.firstHouse}</Typography>}
                        </Grid>
            </>
          )}


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
