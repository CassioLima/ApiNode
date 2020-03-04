const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('mybd.db');

module.exports = bd;

bd.serialize(function() {
 
    bd.run("CREATE TABLE if not exists livro (descricao TEXT)");
    var stmt = bd.prepare("INSERT INTO livro VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
   
    bd.each("SELECT rowid AS id, descricao FROM livro", function(err, row) {
        console.log(row.id + ": " + row.descricao);
    });
}); 