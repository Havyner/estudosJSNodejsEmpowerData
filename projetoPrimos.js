//Faça um programa que teste se o número é primo, e mostre os numeros dentro do intervalo

const inicio = 100
const fim = 1000

function determinar_se_primo(numero){
    if (numero <= 1){
        return false
    }
    for (let i = 2; i < numero; i = i + 1){
        if (numero % i === 0){
            return false
        }
    }
    return true
}

function verificar_primos_intervalo(comeco, final){
    for (let i = comeco; i <= final; i = i + 1){
        const primo = determinar_se_primo(i)
        if (primo){
            console.info("É numero primo: ", i)
        }
    }

}

verificar_primos_intervalo(inicio, fim)