import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookierParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookierParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running on http://localhost:8080/");
});
