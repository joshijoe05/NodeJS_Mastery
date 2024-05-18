import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// cross origin
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// to access json body from the request
app.use(express.json({
    limit: "16kb"
}));

// type of body parser and also for encoding url
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

// when dealing with files
app.use(express.static("public"));

// when dealing with secure cookies
app.use(cookieParser());

export { app }