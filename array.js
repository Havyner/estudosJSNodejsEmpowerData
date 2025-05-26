/*
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

//determina um array
// ambos se de typeof, irão apresentar como objeto
const lista1 = []
const data = new Date()

console.log(Array.isArray(lista1))
console.log(Array.isArray(data))

//funções de navegação

const lista2 = ['a', 'b', 'c']

for (const item of lista2) { console.debug('for', item)}

lista2.forEach(
    function(item){
        console.debug('forEach', item)
    }
)

lista2.forEach(item => console.debug('forEach Arrow', item))

console.debug('resultado', lista2.map(item => '>' + item + '<'))
*/

const lista = ['a', 'b', 'c']

console.debug('filter',
    lista.filter(
        function(item){
            return true
        }
    )
)

console.debug('find',
    lista.find(
        function(item){
            return item == 'a' || item == 'c'
        }
    )
)

console.debug('findIndex',
    lista.findIndex(
        function(item){
            return item == 'a' || item == 'c'
        }
    )
)

// tirando os itens repitidos da lista

const listaRepetidos = [1, 2, 3, 4, 1, 2, 3, 4, 5]
console.debug('filter',
    listaRepetidos.filter(
        function(item1, posicao, listaOriginal){
            const posicaoNaListaOriginal = listaOriginal.findIndex(
                function(item2){
                    return item2 === item1
                }
            )
            return posicao === posicaoNaListaOriginal
        }
    )
)