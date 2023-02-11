import express from "express";
import dotenv from "dotenv";
import route from "./routes/bill.js";

// Use dotenv to retrieve information from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define the entry point of server and usage of routing middleware
app.use("/", route);

// Run the server and listen on assigned port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
