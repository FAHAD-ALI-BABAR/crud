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
    mobile:String,
    pass:String,
    address:String,
    dob:String,
    city:String,
    country:String,
},{
    timestamps:true//it shows time when data entered and altered
})


//MODEL
const usermodel=mongoose.model("user",schemadata)

//this is read data

//http://localhost:8080/
app.get("/",async(req,res)=>{
    const data=await usermodel.find({})


     res.json({success:true, data : data})
})


//create or save data in mongodb
//http://localhost:8080/create
app.post("/create",async(req,res)=>{
    console.log(req.body);
    const data=new usermodel(req.body)
    await data.save();
    res.send({success:true, message:"data successfully saved in database", data : data})
})

//update data
//http://localhost:8080/update
app.put("/update",async(req,res)=>{
    console.log(req.body);
    const {id,...rest}=req.body;
    const data =await usermodel.updateOne({_id : id},rest)
    res.send({success:true, message:"data updated successfully", data : data })
})
//delete data
//http://localhost:8080/delete/id
app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id;
  console.log(id);
  const data=await usermodel.deleteOne({_id : id});
  res.send({success:true, message:"data deleted successfully", data : data })

})

mongoose.connect("mongodb://localhost:27017/crudapplication")
.then(()=>{
 console.log("database is connected")
 app.listen(PORTS,()=>{return console.log("server is running")})
})




.catch((err)=>{return console.log(err)})