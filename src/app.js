import express from "express";
import config from "./config";
import productsRouter from "./routes/productsRouter";

const app = express();

//settings
app.set("port", config.port);

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productsRouter);

export default app;
