const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/user")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
      type: String,
      required: true
    }
})
const User = mongoose.model("User", userSchema)
app.post('/form', (req,res) => {
    User.create(req.body)
    .then((e) => console.log(e))
    .catch((err)=>console.log(err))
})
app.listen(3000)