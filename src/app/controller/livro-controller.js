
const LivroDao = require('../dao/livro-dao'); //constante tem que ter mesmo nome!!

module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.send(
            '<h1>Servidor express em execução!</h1>'
        );
    });

    app.get('/livros', (req, res) => {

        const dao = new LivroDao();

        dao.listar()
        .then(livros => res.send(livros))
        .catch(erro => console.log(erro));
    })
};
