// break = interrompe um loop
// continue = faz com que volte a condição do loop

for (let i = 0; i <= 10; i = i + 1) {
    if (i == 3) {
        break
    }
    console.log(i)
}
// ele para o loop quando chega ao 3

console.info('----------------------------')

for (let i = 0; i <= 10; i = i + 1) {
    if (i == 3) {
        continue
    }
    console.log(i)
}
// ele pula a condição (3) e continua o loop até o final