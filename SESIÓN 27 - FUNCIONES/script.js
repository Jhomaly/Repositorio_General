function suma(num1, num2) {
    resultado = num1 + num2
    return resultado;
}

var resultado = (4 + 4)
console.log(resultado)

//Ejercicio 2

function descontar(precio, descuento) {
    var descontado = precio * descuento / 100
    var resultado = precio - descontado
    return resultado;
}


var menta = descontar(100, 80)
console.log(menta)

