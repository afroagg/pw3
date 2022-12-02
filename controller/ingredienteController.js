const express = require('express');

const router = express.Router();

const modelIngrediente = require('../model/ingredienteModel');

router.get('/listarIngrediente', (req, res)=>{

    modelIngrediente.findAll()
        .then(
            (ingrediente)=>{
                return res.status(200).json(ingrediente);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do ingrediente :(',
                    erroBancoDados: erro
                });
            }
        );
});

router.get('/listarIngrediente/:id',(req, res)=>{

    let {id} = req.params;

    modelIngrediente.findByPk(id)
        .then(
            (ingrediente)=>{
                res.status(200).json(ingrediente);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do ingrediente :(',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirIngrediente', (req, res)=>{
    let {nome_ingrediente} = req.body;

    modelIngrediente.create(
        {nome_ingrediente}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Ingrediente inserido!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar o ingrediente :(',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarIngrediente', (req, res)=>{
    let {id,nome_ingrediente} = req.body;;

    modelIngrediente.update(
        {nome_ingrediente},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Ingrediente alterado!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar o ingrediente :(',
                        erroBancoDados: erro
                    });
        }
    );
});

router.delete('/excluirIngrediente', (req, res)=>{
    let {id} = req.params;

    modelIngrediente.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Ingrediente excluido!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir o ingrediente :(',
                        erroBancoDados: erro
                    });
        }
    );
});

module.exports = router;