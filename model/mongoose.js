let mongoose=require('mongoose')

let schema= new mongoose.Schema({
    item:String
})

let data=mongoose.model('op',schema)
module.exports=data