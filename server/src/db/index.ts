import mongoose, { mongo } from "mongoose";
import * as models from "./models";

const URI = "mongodb://localhost:27017";
mongoose
  .connect(URI, { dbName: "social-network" })
  .then((v) => {
    console.log("Connected to MongoDB");
  })
  .catch(console.error);

export { models };

export default null;
