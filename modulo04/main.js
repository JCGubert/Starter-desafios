/* Exercício 1 mod. 4 */
var promise = new Promise((resolve, reject) =>{
    let idade = 20;
        if (idade >= 18){
            resolve ('Maior que 18') 
        } else {
            reject ('Menor que 18')
        }
});
       promise.then( resultado => {
           console.log(resultado);
       }, erro => {
           console.log(erro);
})