const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser")

const app = express();
const productsRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  if(req.method === "OPTIONS"){
    res.header("Access-Control-Methods", "POST, PUT, PATCH, DELETE, GET")
  }
})

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
