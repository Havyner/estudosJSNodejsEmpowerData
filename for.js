/*
for (let i = 0; i <= 10; i = i + 1) {
    console.log(i)
}
*/

const lista = [1,2,3,4,5]

for (const listanum of lista){ //passa um elemento de lista e ele pega cada elemento e coloca dentro da variável
    console.log(listanum)
}


const objeto = {
    nome: "Havyner",
    nacionalidade: "Brasileiro"
}

for (const propriedade in objeto){ // utiliza-se para objetos
    console.log(propriedade)
}