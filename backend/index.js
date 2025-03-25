import express from "express";
import dotenv from "dotenv";

import hotelRouters from "./Routers/hotelRouters.js";
import cors from "cors";

dotenv.config();
const app = express();

// migrate db otomatis
// (async () => {
//     await data.sync();
// })();

app.use(cors());
app.use(express.json());
app.use(hotelRouters);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
