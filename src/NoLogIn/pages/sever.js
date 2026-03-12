// server.js
const express = require("express");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/property/:id", async (req, res) => {
  const id = req.params.id;
  const url = `https://crm.eskansalman.com/listing/${id}/5`;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    // استخراج البيانات
    const number = $("p:contains('رقم العرض') span").text().trim();
    const price = $("p:contains('سعر العرض') span").text().trim();
    const date = $("p:contains('تاريخ الإعلان') span").text().trim();
    const typeAndCity = $(".MuiTypography-alignCenter").first().text().trim();
    const area = $("div[data-testid='AspectRatioIcon'] p").text().trim();
    const bathrooms = $("div[data-testid='BathtubIcon'] p").text().trim();
    const rooms = $("div[data-testid='MeetingRoomIcon'] p").text().trim();
    const status = $("div[data-testid='DateRangeIcon'] p").text().trim();
    const image = $(".swiper-slide img").first().attr("src");

    res.json({
      number,
      price,
      date,
      typeAndCity,
      area,
      bathrooms,
      rooms,
      status,
      image,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch property" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
