import express from "express";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = 8000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send({ test: "hello"});
});

app.use("/users",userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});