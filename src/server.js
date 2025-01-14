import express from "express";
import bodyParser from "body-parser";
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

app.use('/v1')

const STATUS = {
    SUCCESS: "OK",
    FAILED: "NO INPUT!"
};

app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello, World!");
});

app.post('/add', (req, res) => {
    const data = [];
    const { body } = req;

    if (!body.name) {
        data.push(req.body);
    return res.status(StatusCodes.BAD_REQUEST).send( {
            status : STATUS.FAILED,
            data:"A name is required!"
        });
    }
    data.push(req.body);
    return res.status(StatusCodes.CREATED).send( {
        status : STATUS.SUCCESS,
        data: data

    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
