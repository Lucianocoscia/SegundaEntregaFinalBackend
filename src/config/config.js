import dotenv from "dotenv";

dotenv.config(); // pra tener acceso a las variables de entorno

export const config = {
  dbUrl: process.env.DATABASE_URL,
  database: process.env.DATABASE,
};
