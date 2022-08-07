//Tendra todas las rutas del login 
const express= require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    res.send('Esta es la etapa de la autentication')
})

module.exports=router;  