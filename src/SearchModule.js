const mongoose=require('mongoose')
const {Schema}=mongoose

const searchDataStructure={
    items: Array
}

const SearchSchema=new Schema(searchDataStructure)

const SearchModel=new mongoose.model("search",SearchSchema)
module.exports=SearchModel