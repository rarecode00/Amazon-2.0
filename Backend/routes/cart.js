const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart')
const fetchuser = require('../middleware/fetchuser')

// Router 1: Add items to the cart

router.post('/add-cart/:id' ,fetchuser, async (req , res) =>{
    try {
        const {cartItem , total} = req.body;
        console.log(req.params.id)
        const findProduct = await Cart.find({
            cartItem:{
                $elemMatch:{
                    productId: req.params.id
                }
            }
        })

        if(findProduct.length > 0){
            return res.json({success: "false" , message: "already exists"});
        }
        
        const cart = new Cart({
            user: req.user.id,
            total,
            cartItem: [{
              productId: req.params.id,
              quantity: cartItem.quantity
            }]
          });
          

        const saveCart = await cart.save();

        res.json({success: true , message: "Cart Added Successfully"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false , message: error})
    }
})

module.exports = router