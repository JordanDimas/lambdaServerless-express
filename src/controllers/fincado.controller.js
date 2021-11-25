"use strict";

class fincadoController{


    async getFincado(req, res){

        console.log("in fincado controller get fincado");
        console.log("request params:",req.params);
        console.log("request query:",req.query);
        console.log("request body:",req.body);
        console.log("request originalUrl:",req.originalUrl);
        console.log("Request: ",req);
      
            try{
                res.json({message: "Invocaste el metodo getFincado"});
            }catch(err){
                res.status(403).json({message: "Error en getFincado",code: err});
            }

    }

    async postFincado(req, res){

        console.log("in fincado controller get fincado");
        console.log("request params:",req.params);
        console.log("request query:",req.query);
        console.log("request body:",req.body);
        console.log("request originalUrl:",req.originalUrl);
        console.log("Request: ",req);
        try{
            res.json({message: "Invocaste el metodo postFincado"});
        }catch(err){
            res.status(403).json({message: "Error en postFincado",code: err});
        }
    }

}

exports.FincadoController = new fincadoController();