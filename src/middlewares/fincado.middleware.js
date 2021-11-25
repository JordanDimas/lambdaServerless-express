'fincado strict'

let fincadoValidation = async (req,res,next) =>{
    let body = req.body;

    
    if(body.status == "true"){
        next();
    }else{
        res.status(403).json({message: "Error en postFincado",code: req.body.status})
    }

}
module.exports = {
    fincadoValidation
}