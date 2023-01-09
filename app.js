const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(path.resolve(__dirname,'./public')));
app.listen(3000,()=>console.log("listening on port 3000"));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'./views/home.html')));
app.get('/creatucuenta',(req,res)=>res.sendFile(path.join(__dirname,'./views/register.html')));
app.get('/ingresa',(req,res)=>res.sendFile(path.join(__dirname,'./views/login.html')));