// switch é semelhante ao if

const input = 4

switch (input){
    case 1:
        console.log('Muito baixo')
        break
    case 2:
        console.log('Quase lá')
        break
    case 3:
    case 4:
    case 5:
        console.log('Na média')
        break
    case 6:
        console.log('Acima da média')
        break
    case 7:
        console.log('Muito acima')
        break
    default: //como se fosse o else
        console.log('Passou demais')
}



/*
if (input == 1){
    console.log('Muito pouco')
}else if (input == 2){
    console.log('Na média')
}else if (input == 3){
    console.log('Acima da média')
}else if (input == 4){
    console.log('Muito')
}else {
    console.log('Ficou muito acima')
}
*/