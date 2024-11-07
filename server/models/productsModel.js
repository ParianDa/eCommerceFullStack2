const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    product_id:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:String,
        trim:true,
        unique:true
    },
    description:{
        type:String,
        trim:true,
        unique:true
    },
    content: {
        type:String,
        trim:true,
        unique:true
    },
    images: {
        type:Object,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    checked: {
        type: Boolean,
        default: false
    },
    Sold: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', productsSchema)