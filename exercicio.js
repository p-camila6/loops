//let condição = true
//while(condição) {
    //enquando a condição for verdadeira
    //as linhas de codigo dentro desse bloco
    //serão executadas

    //assim que a condção ficar falsa 
    //o loop irá parar
//}

let i = 0
while(i < 10) {
    console.log(i) 

    i++    
    //imprime os numeros de 0 a 9
}

//i++
//mesmo que i = i + 1 

let estomago = 0 
while(estomago < 100) {
    console.log('Quero comer mais coxinhas');
    estomago = estomago + 10; 
}
/////------------------exercicio---------------------
let soma = 0;
let numero = Number(prompt('digite a soma que deseja, quando terminar de inserir os numeros DIGITE ZERO'));

while(numero !== 0){
   soma = soma + numero;
   numero = Number(prompt('digite a soma que deseja, quando terminar de inserir os numeros DIGITE ZERO'));
}
console.log('a soma dos numeros inseridas é: ' + soma);


//for
//for(let b = 0; i>0; b++) {
//    console.log(b)
//}


//para b zero, rnquanto b menor que dez, acrescenta mais um 

const numeros = [14, 67, 89, 15, 23]
for(let i = 0; i < 5; i++) {
    const elemento = numeros[i]
    console.log(elemento)
}

//exercicio

function encontrarMaiorNumero(arr) {
    let maior = arr[0];
    for(let i = 0; i < arr.lenght; i++){
    if arr[i] > maior {
        maior = arr[i];
    }
    }
}

return'maior numero é' + maior;

const numero = [1, 5, 55, 11, 12]
console.log(encontrarMaiorNumero(numero))

//------------------for of--------------
const numbers = [14, 67, 89, 15, 23]; 
    for (let num of numbers){
    console.log(numbers)
    }

numbers.forEach(num => {
    console.log(numbers)
})


//exercicio

const lista = ['camila', 'arthur', 'gabriel'];

function palavras() {
    console.log(lista.join(' '));
}

palavras();
