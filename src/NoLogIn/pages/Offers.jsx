import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useContext ,  useEffect, useState} from "react";
import { ColorModeContext } from "../context/ThemeContext";




function Offers({ propertyId }) {
 

  const { mode } = useContext(ColorModeContext);

  // ألوان الخلفية والنصوص حسب الوضع
  const bgColor = mode === "light" ? "#f4f6fa" : "#182237";
  const cardBg = mode === "light" ? "#ffffff" : "#1f2a3b";
  const textColor = mode === "light" ? "text.primary" : "#f4f6fa";


  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/property/${propertyId}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch(console.error);
  }, [propertyId]);

  if (!property) return <p>Loading...</p>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease", // ✅ الانتقال السلس للخلفية
        p: 4,
      }}
    >

    <Card sx={{ maxWidth: 400, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        // image={property.image}
        alt="Property"
      />
      <CardContent>
        <Typography variant="h6">{property.typeAndCity}</Typography>
        <Typography>رقم العرض: {property.number}</Typography>
        <Typography>السعر: {property.price}</Typography>
        <Typography>تاريخ الإعلان: {property.date}</Typography>
        <Grid container spacing={1} mt={1}>
          <Grid item>المساحة: {property.area}</Grid>
          <Grid item>الحمامات: {property.bathrooms}</Grid>
          <Grid item>الغرف: {property.rooms}</Grid>
          <Grid item>الحالة: {property.status}</Grid>
        </Grid>
      </CardContent>
    </Card>

    
    </Box>
  );
}














export default Offers;

