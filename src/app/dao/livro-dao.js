const db = require('../../config/database');

class LivroDao{
    constructor(){
        //console.log('chamou o contrutor dao');
    }

    listar = function () {
    
        return new Promise((resolve, reject)=>{

            db.all('select * from livro', (error, data) =>{
                
                if(error) 
                    return reject(error);

                return resolve(data);

            } );
        })
    }      
}

module.exports = LivroDao;