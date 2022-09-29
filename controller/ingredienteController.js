const express = require('express');

/*CONFIGURAÇÃO DAS ROTAS DE CATEGORIA*/
const router = express.Router();

/* IMPORT DA MODEL DE CATEGORIA */
const modelIngrediente = require('../model/ingredienteModel');

/* PARAMETROS DE ROTAS (QUALQUER VERBO):
1 - NOME DA ROTA - REPRESENTADO POR UMA STRING
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/
/*ROTAS DE CRUD DE CATEGORIAS:*/
router.get('/listarIngrediente', (req, res)=>{

    console.log('teste rota get ingrediente');
    res.send('teste rota get ingrediente2');
});

router.post('/inserirIngrediente', (req, res)=>{
    let{nome_ingredientes} = req.body;
    console.log(nome_ingredientes);
    res.send('OK!')
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