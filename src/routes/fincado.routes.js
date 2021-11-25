const express = require('express');
const { FincadoController } = require('../controllers/fincado.controller');
const { fincadoValidation } = require('../middlewares/fincado.middleware');
const router = express.Router();


router.get('/get',FincadoController.getFincado);
router.post('/post',fincadoValidation,FincadoController.postFincado);



module.exports = router;

