import express from "express";
import bodyParser from "body-parser";
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const STATUS = {
    SUCCESS: "OK",
    FAILED: "NO INPUT!"
};

app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello, World!");
});