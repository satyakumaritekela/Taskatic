const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const routes = require('./routes/routes');
const cors = require("cors");
dotenv.config({path: './config/config.env'});
const connectDB = require('./config/db');
connectDB();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/routes', routes);


const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "build")));

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));