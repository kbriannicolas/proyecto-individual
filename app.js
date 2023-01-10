const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(path.resolve(__dirname,'./public')));

const port= process.env.PORT || 3001;
app.listen(port,()=>console.log(`servidor corriendo en el puerto ${port}`));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'./views/home.html')));
app.get('/creatucuenta',(req,res)=>res.sendFile(path.join(__dirname,'./views/register.html')));
app.get('/ingresa',(req,res)=>res.sendFile(path.join(__dirname,'./views/login.html')));