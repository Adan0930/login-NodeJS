const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hola developers estamos en una prueba')
})

module.exports = router;