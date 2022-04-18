const express=require('express')
const router=express.Router()
const SearchModule=require('./SearchModule')


router.post('/',async(req,res)=>{
    const _id=req.body._id
    const findData=await SearchModule.findById(_id).exec()

    if(findData){
        res.send(findData.items)
    }
    else{
        res.send([{id:1,searchItem:''}])
    }
})

module.exports=router