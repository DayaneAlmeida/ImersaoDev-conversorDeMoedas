var valorEmDolarTexto = prompt("Qual o valor que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmRealDecimal)
