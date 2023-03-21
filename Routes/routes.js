let express=require('express')
let app=express()
let cors=require('cors')
let data=require('../model/mongoose')
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.post('/',async (req,res)=>{
    try {
        let result=await data.create(req.body)
        console.log(result)
         res.json({
                val:result
         })
    } catch (error) {
        res.json({
            error
        })
    }
})
app.get('/get',async (req,res)=>{
    try {
        let result=await data.find()
        if(result){
            res.json({
                val:result
            })
        }
    } catch (error) {
        res.json({
            val:error
        })
    }
})
app.delete('/delete',async (req,res)=>{
    try{
        let result=await data.deleteOne({_id:req.body.id})
        if(result){
            res.json({
                val:result
            })
        }
    } catch (error) {
        res.json({
            val:error
        })
    }
})
app.put('/put',async (req,res)=>{
    try {
        let result=await data.updateOne({id:req.body.id,$set:{item:req.body.item}})
        if(result){
            res.json({
                val:result
            })
        }
    } catch (error) {
        res.json({
            val:error
        })
    }
})
module.exports=app
