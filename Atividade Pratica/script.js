let num1 = Number(prompt('Insira o primeiro valor:'))
console.log(num1)
let num2 = Number(prompt('Insira o Segundo valor:'))
console.log(num2)
if (num1 == num2){ 
    var frase1 = (num1 + " e " + num2 + " são iguais")
    console.log(frase1)
}else{
    var frase2 = (num1+ " e " + num2 + " não são iguais")
    console.log(frase2)
}
if (num1 <= 10){
   var frase3 = (num1 + " é menor ou igual que 10.")
}else{
    if (num1 > 10){
    var frase4 = (num1 + " é maior que 10.")
    }
}