import express, { Express, Request, Response } from "express";
const cors = require("cors");

import items from "./routes/items";

const PORT = 3000;
const app: Express = express();
app.use(express.json()); // middleware que transforma la req.body a un json
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_req: Request, res: Response) => {
  res.send({ title: "Express" });
});

app.use("/api/items", items);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
