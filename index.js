/* 25/11/2025 retorno ao estudo de jS
Início
Faça A valer 5
Faça B valer 1
Faça B valer A x B
A é > do que 1? 
se sim: Faça A valer A - 1 e volte ao "Faça B valer A x B"
se não: Imprima o valor de B
 */

// Comentário de js em documentação /** */

console.info("TESTE")

console.info("+------------+")
console.info("| FLUXOGRAMA |")
console.info("+------------+")

let A = 5
let B = 1

do {
    B = A * B

    if (A > 1){
        A = A - 1
    } else {
        console.info(B)
        break
    }
} while(true)