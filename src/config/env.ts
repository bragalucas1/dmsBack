import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const config = {
  api: {
    baseUrl: process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com",
  },
  server: {
    port: process.env.PORT || 3001,
  },
};
