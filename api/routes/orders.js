const express = require("express")

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests to /orders",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  res.status(200).json({
    message: `handling GET requests for order with id: ${id}`,
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "handling POST requests to /orders",
  });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;

  res.status(200).json({
    message: `updated order with id: ${id}`,
  });
});

module.exports = router;
