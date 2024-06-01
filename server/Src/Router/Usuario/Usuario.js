const express = require("express");
const router = express.Router(); 
const z = require ('zod');

//registra usuario
const usuarioEsquema = z.object({
    email: z.string().email(),
    funcao: z.string(),
    estado: z.string().min(2),
    senha: z.string().trim().min(6)
})

router.post("/registro",(req,res)=>{
    try {
        const user = usuarioEsquema.parse(req.body);
        console.log(user)
        res.status(201).send(req.body);
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(422).json({'Error':error.errors.message})   
        }
        res.status(400).send(error);
    }
    
    
    
});












//update altera usuario
router.put("/",(req,res)=>{
    
    console.log("chamou rota");
    res.send("chamou rota");
});
//apaga usuario
router.delete("/",(req,res)=>{
    
    console.log("chamou rota");
    res.send("chamou rota");
});
//lista todos usuarios
router.get("/",(req,res)=>{
    
    console.log("chamou rota");
    res.send("chamou rota");
});


module.exports ={
    router
}