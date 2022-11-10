const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser")

const app = express();
const productsRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/products", productsRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 400;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
