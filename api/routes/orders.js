const express = require("express")

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests to /orders",
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;

  res.status(200).json({
    message: `handling GET requests for order with id: ${id}`,
  });
});

router.post("/", (req, res, next) => {

    const newOrder = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    
  res.status(201).json({
    message: "handling POST requests to /orders",
    newOrder
  });
});

router.delete("/:orderId", (req, res, next) => {
  const id = req.params.orderId;

  res.status(200).json({
    message: `deleted order with id: ${id}`,
  });
});

module.exports = router;
