import express, { Response } from "express";
import { DatabaseConfiguration } from "./db/config";
import { readdirSync } from "fs";
import cors from "cors";

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res: Response) => {
    res.send("Hello World!");
});

readdirSync('./routes')
    .map((route) => app.use('/api/v1', require('./routes/' + route)));

function Server() 
{
    DatabaseConfiguration();    
    app.listen(PORT, () => {
        console.log("Listening on port: ", PORT);
    });
}

Server();