const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//
// map com thisArg
//

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    //return arr.map((item) => item * this.value, thisArg);
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

console.log('mapThis -> maca', mapComThis(nums, maca));
console.log('mapThis -> laranja', mapComThis(nums, laranja));

//
// map sem thisArg
//

function mapSemThis(arr) {
    return arr.map((item) => item * 2);
}

console.log('map', mapSemThis(nums));

//
// filter
//

function filtraPares(arr) {
    return arr.filter((item) => item % 2 === 0);
}

console.log('filter', filtraPares(nums));

//
// reduce
//

function somaItens(arr) {
    return arr.reduce((prev, current) => prev + current);
}

console.log('reduce', somaItens(nums));

// Crie uma função que recebe uma lista de preços
// e um número representando o saldo disponível.
// Calcule qual será o saldo final após subtrair
// todos os preços da lista enviada.

const carrinho = [10, 5, 3, 15, 7, 50];
const saldoDisponivel = 100;

function compraProdutos(saldo, valores) {
    return valores.reduce(function(prev,current) {
        return prev - current;
    }, saldo);
}

console.log('saldo final', compraProdutos(saldoDisponivel, carrinho));