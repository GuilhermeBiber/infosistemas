
const chai = require('chai')
    , expect = chai.expect
    , chaiHttp = require('chai-http')
    , server = require('../bin/www')
    , url = 'http://localhost:3000'
    , urlApi = url + '/api';
let renavam = makeRandomNumber(11),
    veiculoInserido;
chai.use(chaiHttp);
describe('Veiculos api:', ()=> {

    let veiculo = {
        placa: 'GUZ0263',
        modelo: 'Engesa 4x4 4.0 Diesel',
        renavam: renavam,
        marca: 'Engesa',
        chassi: '9BWSU19F08B302151',
        ano: '2019'
    };

    describe('inserindo:', () => {

        it('insere novo', done => {

            chai.request(urlApi)
                .post('/veiculos')
                .set('content-type', 'application/x-www-form-urlencoded')
                .type('form')
                .send(veiculo)
                .then(res => {
                    veiculoInserido = res.body;
                    expect(res).to.have.status(201);
                    done()
                })
                .catch(err => {
                    throw err;
                });
        });
        it('inserir o mesmo', done => {
            chai.request(urlApi)
                .post('/veiculos')
                .set('content-type', 'application/x-www-form-urlencoded')
                .type('form')
                .send(veiculo)
                .then(res => {
                    expect(res).to.have.status(400);
                    done()
                })
                .catch(err => {
                    throw err;
                });
        });
    });
    describe('update de veículos:', () => {
        it('update', done => {
            let veiculoUpdate = veiculo;
            veiculoUpdate.ano = 2012;
            veiculoUpdate.marca = 'Jipe';
            chai.request(urlApi)
                .put('/veiculos/' + veiculoInserido.id)
                .set('content-type', 'application/x-www-form-urlencoded')
                .type('form')
                .send(veiculoUpdate)
                .then(res => {
                    expect(res).to.have.status(200);
                    done()
                })
                .catch(err => {
                    throw err;
                });
        })
    });
    describe('get de veículos:', () => {
        it('get', done => {
            chai.request(urlApi)
                .get('/veiculos')
                .then(res => {
                    expect(res).to.have.status(200);
                    done()
                })
                .catch(err => {
                    throw err;
                });
        })
    });
    describe('delete de veículos:', () => {
        it('delete', done => {
            chai.request(urlApi)
                .delete('/veiculos/' + veiculoInserido.id)
                .then(res => {
                    expect(res).to.have.status(200);
                    done()
                    server.closeServer();
                })
                .catch(err => {
                    throw err;
                });
        })
    });
});



function makeRandomNumber(length) {
    let result           = '';
    let characters       = '0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}