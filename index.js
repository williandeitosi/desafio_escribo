

function somatorio (numero) {
  if (numero < 0 || !Number.isInteger(numero)) {
    return console.log("Insira um número inteiro e positivo por favor!")
  } else {
    
    let soma = 0
    let numerosSomados = []
  
    for(let i = 0; i < numero; i++) {
      if (i % 3 ===0 || i % 5 === 0) {
        soma += i
        numerosSomados.push(i)
      }
    }
    return {soma, numerosSomados}
  }


}
const {soma, numerosSomados} = somatorio(/* NUMERO AQUI */)
console.log( `o Resultado da soma dos números é: ${soma}, os numeros somados foram: ${numerosSomados}`)