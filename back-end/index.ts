import express, { Response } from "express";
import cors from "cors";

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res: Response) => {
    res.send("Hello World!");
});

function Server() {
    app.listen(PORT, () => {
        console.log("Listening on port: ", PORT);
    });
}

Server();