import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import productsRoutes from "./routes/products.routes.js";

const app = express();

app.use(express.json()); //Permite recibir los datos que envio desde el cliente.

app.use(indexRoutes);
app.use(productsRoutes);

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
