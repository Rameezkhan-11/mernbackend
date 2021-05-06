const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path")
require("./db/conn");
const Register = require("./models/resgisters");
const port = process.env.PORT || 5000;

const staticPath = path.join(__dirname ,"../public")

app.use(express.static(staticPath))
const template_path = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
app.set("view engine", "hbs")
app.set("views", template_path)
app.use(express.json());
app.use(express.urlencoded({extended: false}))
hbs.registerPartials(partialsPath)
app.get("/", (req,res)=>{
   


       res.render("index")



    




})


app.get("/login",(req,res)=>{

res.render("login")



})


app.get("/register",(req,res)=>{

       res.render("register")


})

app.post("/register", async(req,res)=>{

try{

const password = req.body.password;
const cpassword = req.body.confirmpassword;


if(password === cpassword){

const data = new Register({

firstname : req.body.firstname,
email : req.body.email,
phnumber: req.body.phnumber,
password: password,
confirmpassword : cpassword






})

const dataSave = await data.save()
res.status(201).render("index")
}

else{

       res.status(404).send("Password not match")



}


}
catch(e){ 
res.status(404).send(e)




}



})


app.listen(port,()=>{
console.log(`listning on ${port}`);



})