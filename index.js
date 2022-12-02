const express = require('express');
const ingrediente = require('./controller/ingredienteController')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', ingrediente);

/*app.get('/', (req, res)=>{

    console.log('ROTA RAIZ DE VERBO HTTP GET!');
    res.send('teste 1!');

});

app.get('/teste', (req, res)=>{

    console.log('ROTA DE TESTE DE VERBO HTTP GET!');
    res.send('teste 2!');

});
*/

app.listen(3000, ()=>{
    console.log('rodando neste link: http://localhost:3000');
});