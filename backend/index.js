import express from "express";
import dotenv from "dotenv";
import data from "./Model/dataModel.js";
import hotelRouters from "./Routers/hotelRouters.js";

dotenv.config();
const app = express();

// migrate db otomatis
(async () => {
    await data.sync();
})();

app.use(express.json());
app.use(hotelRouters);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
