//Exercício 01 - Manipulação Básica de Array

let numeros = [1,2,3,4,5,6,7,8,9,10]

function filtrarPares(numeros) {
    let pares = [];
    numeros.map(numero => {
        if (numero % 2 == 0) {
            pares.push(numero)
        }
    })
    return pares
}

console.log("Exercício 01 :", filtrarPares(numeros))


//Exercício 02 - Manipulação de Objetos

let pessoas = [
{ nome: 'Alice', idade: 17 },
{ nome: 'Bob', idade: 22 },
{ nome: 'Charlie', idade: 16 },
{ nome: 'David', idade: 19 }
];

function filtrarAdultos(pessoas) {

    let maiorIdade = [];
    pessoas.map(pessoa => {
        if (pessoa.idade >= 18) {
            maiorIdade.push(pessoa.nome)
        }
    })
    return maiorIdade
}

console.log("Exercício 02 :", filtrarAdultos(pessoas));