const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/register",{

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true


}).then(()=>{

console.log("done db");


}).catch((e)=>{
throw new Error(e)
})
