/* 1º exercício */

class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    isAdmin() {
        return this.admin === true;
    }

}
class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');



console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

/* 2º exercício*/

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/*  2.1 utilizando map */

const idadeUsuarios = usuarios.map(function(index){
    return index.idade;
});

console.log(idadeUsuarios);

/* 2.2 utilizando filter */

const filter = usuarios.filter(function(index){
    return index.idade > 18 && index.empresa === 'Rocketseat';
});

console.log(filter);

/* 2.3 utilizando find */

const find = usuarios.find(function(index){
    return index.empresa === 'Google';
});

console.log(find);

/* 2.4 unindo operações */

const idadeUsuarios = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50);
console.log(idadeUsuarios);

/* 3º exercício*/

/* 3.1 */

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

console.log(newArr);

/* 3.2 */

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = () => usuario.idade;

console.log(mostraIdade(usuario));

/* 3.3 */

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

/* 3.4 */

const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
};

const promise = () => new Promise(resolve, reject => resolve());

/* 4º exercício */

/* 4.1 */

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

/* 4.2 */

const usuario = {
    nome: 'Diego',
    idade: 23,
}
function mostraInfo({ nome, idade }) {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
}

   mostraInfo(usuario);

/* 5º exercício */

/* 5.1 REST */

const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log(x);
console.log(y);

function soma(...params) {
    return params.reduce((total, next) => total + next)
};

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

/* 5.2 SPREAD */

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel'};
const usuario3 = { ...usuario, endereco: {cidade: 'Lontras'}};

console.log(usuario2);
console.log(usuario3);

/* 6º exercício */

const usuario = 'Diego';
const idade = 23;

console.log(`O usuário ${usuario} possui ${idade} anos`);

/* 7º exercício */

const nome = 'Diego';
const idade = 23;
const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};
console.log(usuario);
