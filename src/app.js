const express=require('express')
const app=express()
const cors=require('cors')
const parser=require('body-parser')
const database = require('./DB_connect')
const SearchModule=require('./SearchModule')

app.use(cors())
app.use(parser.json())

app.post('/',async(req,res)=>{
    const _id='625c7dac9283dc017fe66dcd'
    const findData=await SearchModule.findById(_id)
    findData.items.push(req.body)
    await SearchModule.findByIdAndUpdate(_id, findData)

    res.json({success:true})
})

const PORT=9000
app.listen(PORT,()=>{
    console.log("Server started in port "+PORT)
    database()
})