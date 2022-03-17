import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
  next();
});

app.listen(5000);
