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

console.log(filtrarPares(numeros))