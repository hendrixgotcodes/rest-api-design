const express = require("express")
const router = express.Router()

router.get("/", (req, res, next)=>{
    res.status(200).json({
        message: "handling GET requests to /products"
    })
})

router.get("/:productId", (req, res, next)=>{

    const id = req.params.productId
    
    res.status(200).json({
        message: `handling GET requests for product with id: ${id}`
    })
})

router.post("/", (req, res, next)=>{
    res.status(200).json({
        message: "handling POST requests to /products"
    })
})

router.patch("/:productId", (req, res, next)=>{

    const id = req.params.productId
    
    res.status(200).json({
        message: `updated product with id: ${id}`
    })
})

module.exports = router