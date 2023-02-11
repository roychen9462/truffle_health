import express from "express";
import dotenv from "dotenv";
import route from "./routes/bill.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", route);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
