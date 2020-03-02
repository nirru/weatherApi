import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import {errorHandler} from "./helpers/errorHandlers";
import {getWeahterByCityOrZip} from "./controllers/weather";
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.get('/api/weather/', getWeahterByCityOrZip);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 3001;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

module.exports = {server}