import express, { Express, Request, Response } from "express";
const cors = require("cors");

import items from "./routes/items";
import { logInfo } from "./utils/logger";

const PORT = 3000;
const app: Express = express();
app.use(express.json()); // middleware que transforma la req.body a un json
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_req: Request, res: Response) => {
  logInfo("GET: http:/localhost:8000/api");
  res.send({ title: "Ecommerce API" });
});

app.use("/api/items", items);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
