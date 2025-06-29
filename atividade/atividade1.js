/*Implemente um programa que calcule a área de um círculo, a partir do raio informado pelo usuário */

let raio = prompt('Insira o raio do circulo: ')

raio = parseFloat(raio);

const area = Math.PI*Math.pow(raio, 2);

console.log('A área do circulo é: ', area);
