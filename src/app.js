import express from "express";
import config from "./config";
import productsRouter from "./routes/productsRouter";
import userRouter from "./routes/userRouter";

const app = express();

//settings
app.set("port", config.port);

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productsRouter);
app.use(userRouter);

export default app;
