import express, { Router } from "express";
import cors from "cors";
import compression from "compression";
import authRoutes from "./routes/auth.routes";
import "./db";
import exploreRoutes from "./routes/explore.route";
const app = express();
app.use(compression());
app.use(cors({}));
app.use(express.json());

app.use("/api/auth", authRoutes(Router()));
app.use("/api/explore", exploreRoutes(Router()));
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
