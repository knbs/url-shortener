import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import Home from "./controllers/home.controller";
import {ShortUrl} from "./models/ShortUrlModel"

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://mongo:27017/express-mongo', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get("/api/url", (new Home(ShortUrl)).getAll);

app.post("/api/url", (new Home(ShortUrl)).create);


if (env === 'production') {
  app.use(express.static('dist/client'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/../client', 'index.html'));
  });
}

app.listen(port, () => {
  console.log("App is running at http://localhost:%d in %s mode", port, env);
  console.log("Press CTRL-C to stop\n");
});

export default app;