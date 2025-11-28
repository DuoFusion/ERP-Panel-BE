// import express from "express";
// import mongoose from "mongoose";
// import { config } from "../../../config";

import mongoose from "mongoose";
import { config } from "../../../config";

// const DBUrl: string = config.DB_URL;

// const mongooseConnection = express();

// mongoose.set("strictQuery", false);

// mongoose
//   .connect(DBUrl)
//   .then(() => console.log("Database Successfully Connected"))
//   .catch((err) => console.log(err));

// export { mongooseConnection };

export const ConnectDb = async () => {
  if (!config.DB_URL) {
    console.error("❌ DB_URL is missing! Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(config.DB_URL);
    console.log("Database Connected successfully");
  } catch (error) {
    console.error("DB Connection Failed", error);
    process.exit(1);
  }
};
