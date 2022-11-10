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

    const product = {
        name: req.body.name,
        price: req.body.price
    }
    
    res.status(201).json(product)
})

router.patch("/:productId", (req, res, next)=>{

    const id = req.params.productId
    
    res.status(200).json({
        message: `updated product with id: ${id}`
    })
})

router.patch("/:productId", (req, res, next)=>{

    const id = req.params.productId
    
    res.status(200).json({
        message: `updated product with id: ${id}`
    })
})

router.delete("/:productId", (req, res, next)=>{

    const id = req.params.productId
    
    res.status(200).json({
        message: `deleted product with id: ${id}`
    })
})

module.exports = router