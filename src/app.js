const express=require('express')
const app=express()
const cors=require('cors')
const parser=require('body-parser')
const database = require('./DB_connect')
const SearchModule=require('./SearchModule')

app.use(cors())
app.use(parser.json())

app.post('/',async(req,res)=>{
    const _id=req.body._id
    const findData=await SearchModule.findById(_id)

    if(findData!==null){
        findData.items.push(req.body.sData)
        await SearchModule.findByIdAndUpdate(_id, findData)
    }
    else{
        const newUserData={_id:_id,items:[req.body.sData]}
        const doc=new SearchModule(newUserData)
        await doc.save()
    }

    res.json({success:true})
})

app.use('/history',require('./findSearchHistory'))

const PORT=9000
app.listen(PORT,()=>{
    console.log("Server started in port "+PORT)
    database()
})