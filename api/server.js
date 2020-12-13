const express = require ('express');
const cors = require('cors');
const faker = require('faker');

const port = 3000;
const hostname = 'localhost';

const app = express();
app.use(cors());


const gerarPessoaAleatoria = () => {

    let pessoa = {
        nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        position: {
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude()
       }        
    }
    return(pessoa);
}


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');    
    res.end(JSON.stringify(gerarPessoaAleatoria()));    
})


app.listen(port, hostname, () => {
    console.log(`servidor rodando no endereço http://${hostname}:${port}`)
})