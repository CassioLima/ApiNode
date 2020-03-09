
const LivroDao = require('../dao/livro-dao'); //constante tem que ter mesmo nome!!

module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.send(
            '<h1>Servidor express em execução!</h1>'
        );
    });


/**
 * @swagger
 * /livros:
 *    get:
 *      tags:
 *          - Livros
 *      summary: Retorna Todos os livros.
 *      description: This is where you can give some background as to why this route is being created or perhaps reference a ticket number.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              flavor:
 *                type: string
 *      responses:
 *        200:
 *          description: Receive back flavor and flavor Id.
 */    
    app.get('/livros', (req, res) => {

        const dao = new LivroDao();

        dao.listar()
        .then(livros => res.send(livros))
        .catch(erro => console.log(erro));
    })
};
