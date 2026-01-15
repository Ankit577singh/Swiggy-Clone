import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();


app.use(
  cors({
  })
);


app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Swiggy API blocked" });
  }
});


app.get("/api/menu/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9843304&lng=77.7326944&restaurantId=${id}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Menu fetch failed" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
