const express = require('express');

const router = express.Router();

const modelIngrediente = require('../model/ingredienteModel');

router.get('/listarIngrediente', (req, res)=>{

    console.log('teste rota get ingrediente');
    res.send('teste rota get ingrediente2');
});

router.post('/inserirIngrediente', (req, res)=>{
    console.log('teste rota post ingrediente');
    res.send('teste rota get ingrediente2')
});

router.put('/alterarIngrediente', (req, res)=>{

    console.log('teste rota put ingrediente');
    res.send('teste rota put ingrediente2');
});

router.delete('/excluirIngrediente', (req, res)=>{

    console.log('teste rota delete ingrediente');
    res.send('teste rota delete ingrediente2');
});

module.exports = router;