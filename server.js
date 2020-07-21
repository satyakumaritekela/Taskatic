const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors = require('colors');
const routes = require('./routes/routes');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/routes', routes);


const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, (err) => {
  if (err) throw err;
});
