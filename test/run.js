'use stricts'
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'https://xibwsiih87.execute-api.us-east-1.amazonaws.com/dev';
describe('Obtener planeta por id: ',() => {
        it('Planeta obtenido', (done) => {
        chai.request(url)
        .get('/planetas/1')
        .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
        });
    });
});
describe('Obtener pelicula por id: ',() => {
        it('Pelicula obtenido', (done) => {
        chai.request(url)
        .get('/peliculas/1')
        .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
        });
    });
});
describe('Obtener personas por id: ',()=>{
        it('Se obtuvo personas con el id', (done) => {
        chai.request(url)
        .get('/personas/1')
        .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
        });
    });
});
describe('Obtener listado de productos',()=>{
        it('Se obtuvo listado de productos', (done) => {
        chai.request(url)
        .get('/productos')
        .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
        });
    });
});
describe('Obtener listado de recursos',()=>{
        it('Se obtuvo listado de recursos', (done) => {
        chai.request(url)
        .get('/recursos')
        .end( function(err,res){
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
        });
    });
});