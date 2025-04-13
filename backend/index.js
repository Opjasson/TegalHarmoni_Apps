import express from "express";
import dotenv from "dotenv";
import kuliner from "./Model/kulinerModel.js";
import hotelRouters from "./Routers/hotelRouters.js";
import wisataRouters from "./Routers/wisataRouters.js";
import kulinerRouters from "./Routers/kulinerRouter.js";
import cors from "cors";

dotenv.config();
const app = express();

// migrate db otomatis
// (async () => {
//     await kuliner.sync();
// })();

app.use(cors());
app.use(express.json());
app.use(hotelRouters);
app.use(wisataRouters);
app.use(kulinerRouters);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
