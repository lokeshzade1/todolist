let mongoose=require('mongoose')
let dot=require('dotenv')
dot.config()
let app=require('./Routes/routes')
let url=process.env.ID
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>console.log('connected.....'))

app.listen(5000,()=>console.log('connected...'))
