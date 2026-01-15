import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

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
    // console.log(response);


    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Menu fetch failed" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});