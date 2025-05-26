const lista = ['Havyner', 12, 'H', 21]
console.debug(lista)

// mostra o tamanho da lista/array
console.debug(lista.length)

// add item no final
lista.push('final') //pode add mais de 1 item...
console.debug(lista)

// remove o ultimo item do array
lista.pop()
console.debug(lista)

// mostrar item pela posição
console.log(lista[2])

// atribuindo valor por posição
lista[2] = 321
console.log(lista)

// add o item no começo
lista.unshift('começo')
console.log(lista)

//removendo do começo da lista
lista.shift()
console.log(lista)