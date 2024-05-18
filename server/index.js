const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express()


app.use(cors())
app.use(express.json())
const PORTS=process.env.PORTS || 8080


//schema
const schemadata=mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String,
    address:String,
    date_of_birth:String,
    city:String,
    country:String,
},{
    timestamps:true//it shows time when data entered and altered
})


//MODEL
const usermodel=mongoose.model("user",schemadata)
//this is read api
app.get("/",async(req,res)=>{
    const data=await usermodel.find({})


     res.json({success:true, data : data})
})


//create or save data in mongodb
app.post("/create",async(req,res)=>{
    console.log(req.body);
    const data=new usermodel(req.body)
    await data.save();
    res.send({success:true, message:"data successfully saved in database"})
})

//update data
app.put("/update",async(req,res)=>{
    console.log(req.body);
    await usermodel.updateOne({_id: req.body.id},{name: "fahad12345"})
    res.send({success:true, message:"data updated successfully"})
})


mongoose.connect("mongodb://localhost:27017/crudapplication")
.then(()=>{
 console.log("database is connected")
 app.listen(PORTS,()=>{return console.log("server is running")})
})




.catch((err)=>{return console.log(err)})