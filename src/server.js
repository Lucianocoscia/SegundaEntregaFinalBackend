// levantamos el servidor

import express, { json } from "express";
import routes from "./routes/index.js";
import { db } from "./db/db.js";
import { config } from "./config/config.js";
// import mongoose from "mongoose";

const app = express();

app.use(json());
//mandamos a escuchar las rutas
app.use("/api", routes);

db.connectDb(config.dbUrl).then(() => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
});

// apunte viejo

// mongoose.connect(config.dbUrl).then(() => {
//   console.log("Database connected");
//   app.listen(3000, () => {
//     console.log("Server listening on port 3000");
//   });
// });
