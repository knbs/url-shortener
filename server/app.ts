import express from "express";
import bodyParser from "body-parser";
import * as home from "./controllers/home.controller";

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/url", home.getAll);

app.post("/api/url", home.create);


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