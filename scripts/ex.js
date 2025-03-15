// 1. Hola Mundo
console.log('Hola Mundo');

// 2. Variables let y const
let number_ex2 = 5;
const string_ex2 = 'Hola';

console.log(number_ex2, string_ex2);

// 3. Tipo de dato con typeof
let num = 42;
let str = "JavaScript";
let bool = true;

console.log(typeof num, typeof str, typeof bool);

// 4. Operadores aritméticos
let resultado_ex4 = (15 + 3) * (8 / 2);

console.log(resultado_ex4);

// 5. Función básica
function sumar_ex5(numero1, numero2) {
    return numero1 + numero2;
}

let resultado_ex5 = sumar_ex5(5, 8);

console.log(resultado_ex5);

// 6. Condicional if-else
function verificarNumero_ex6(numero) {
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}

verificarNumero_ex6(5);    // El número es positivo.
verificarNumero_ex6(-3);   // El número es negativo.
verificarNumero_ex6(0);    // El número es cero.

// 7. Bucle for
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 8. Métodos de String
let texto = "hola mundo";
let resultado = texto.toUpperCase() + " desde JS";

console.log(resultado);

// 9. Array básico
let frutas_ex9 = ["manzana", "banana", "pera"];

console.log(frutas_ex9[1]);

// 10. Método push y pop
let frutas_ex10 = ["manzana"];

console.log("Antes de usar push:", frutas_ex10);

// Usar push para añadir "naranja" al array
frutas_ex10.push("naranja");
console.log("Después de usar push:", frutas_ex10);

// Usar pop para eliminar el último elemento
frutas_ex10.pop();
console.log("Después de usar pop:", frutas_ex10);

// 11. Objeto básico
let usuario_ex11 = {
    nombre: "Juan",
    edad: 30
};

console.log("Nombre:", usuario_ex11.nombre);
console.log("Edad:", usuario_ex11.edad);

// 12. Método en objeto
let usuario = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola");
    }
};

// Llamar al método saludar
usuario.saludar();

// 13. Fecha actual
const currentDate = new Date();

// Obtener el año de la fecha actual
const currentYear = currentDate.getFullYear();

console.log("Año actual:", currentYear);

// 14. Número aleatorio
const randomNumber = Math.random();

// Multiplicar por 10 para obtener un valor entre 0 y 10 (sin incluir 10)
const randomEntre1_10 = Math.floor(randomNumber * 10) + 1;

console.log("Número aleatorio entre 1 y 10:", randomEntre1_10);

// 15. Switch
function mostrarDia(numero) {
    switch (numero) {
        case 0:
            console.log("Domingo");
            break;
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        default:
            console.log("Error: El número debe estar entre 0 y 6");
    }
}

// Llamar a la función con un número
mostrarDia(2);  // Martes
mostrarDia(7);  // Error: El número debe estar entre 0 y 6



