const mongoose=require('mongoose')
const {Schema}=mongoose

const searchDataStructure={
    _id: String,
    items: Array
}

const SearchSchema=new Schema(searchDataStructure)

const SearchModel=new mongoose.model("search",SearchSchema)
module.exports=SearchModel