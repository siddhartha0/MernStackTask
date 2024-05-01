import express from "express";
import env from "dotenv";
import cors from "cors";
import { connection } from "./src/utils/DbConnect";
import UserRoutes from "./src/routes/UserRoutes";

const app = express();
app.use(express.json());
app.use(cors());
env.config();

app.use("/v1", UserRoutes);

connection.then(() => {
  console.log("Connected to Database");
});

app.listen(process.env.PORT, () => {
  console.log("Listening");
});
