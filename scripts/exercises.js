// Mostrar los ejercicios
export const exercises = [
    { title: "Ejercicio 1", 
        code: `console.log("Hola mundo");` },

    { title: "Ejercicio 2", 
        code: `let number_ex2 = 5;
const string_ex2 = 'Hola';

console.log(number_ex2, string_ex2);` },

    { title: "Ejercicio 3", 
        code: `let num = 42;
let str = "JavaScript";
let bool = true;

console.log(typeof num, typeof str, typeof bool);` },

    { title: "Ejercicio 4", 
        code: `let resultado_ex4 = (15 + 3) * (8 / 2);

console.log(resultado_ex4);` },

    { title: "Ejercicio 5", 
        code: `function sumar_ex5(numero1, numero2) {
    return numero1 + numero2;
}

let resultado_ex5 = sumar_ex5(5, 8);

console.log(resultado_ex5);` },

    { title: "Ejercicio 6", 
        code: `function verificarNumero_ex6(numero) {
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
verificarNumero_ex6(0);    // El número es cero.` },

    { title: "Ejercicio 7", 
        code: `for (let i = 1; i <= 5; i++) {
    console.log(i);
}` },

    { title: "Ejercicio 8", 
        code: `let texto = "hola mundo";
let resultado = texto.toUpperCase() + " desde JS";

console.log(resultado);` },

    { title: "Ejercicio 9", 
        code: `let frutas_ex9 = ["manzana", "banana", "pera"];

console.log(frutas_ex9[1]);` },

    { title: "Ejercicio 10", 
        code: `let frutas_ex10 = ["manzana"];

console.log("Antes de usar push:", frutas_ex10);

// Usar push para añadir "naranja" al array
frutas.push("naranja");
console.log("Después de usar push:", frutas_ex10);

// Usar pop para eliminar el último elemento
frutas.pop();
console.log("Después de usar pop:", frutas_ex10);` },

    { title: "Ejercicio 11", 
        code: `let usuario_ex11 = {
    nombre: "Juan",
    edad: 30
};

console.log("Nombre:", usuario_ex11.nombre);
console.log("Edad:", usuario_ex11.edad);` },

    { title: "Ejercicio 12", 
        code: `let usuario = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola");
    }
};

// Llamar al método saludar
usuario.saludar();` },

    { title: "Ejercicio 13", 
        code: `const currentDate = new Date();

// Obtener el año de la fecha actual
const currentYear = currentDate.getFullYear();

console.log("Año actual:", currentYear);` },

    { title: "Ejercicio 14", 
        code: `const randomNumber = Math.random();

// Multiplicar por 10 para obtener un valor entre 0 y 10 (sin incluir 10)
const randomBetween1and10 = Math.floor(randomNumber * 10) + 1;

console.log("Número aleatorio entre 1 y 10:", randomBetween1and10);` },

    { title: "Ejercicio 15", 
        code: `function mostrarDia(numero) {
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
mostrarDia(7);  // Error: El número debe estar entre 0 y 6` },

    { title: "Ejercicio 16", 
        code: `` },

    { title: "Ejercicio 17", 
        code: `` },

    { title: "Ejercicio 18", 
        code: `` },

    { title: "Ejercicio 19", 
        code: `` },

    { title: "Ejercicio 20", 
        code: `` },

    { title: "Ejercicio 21", 
        code: `` },

    { title: "Ejercicio 22", 
        code: `` },

    { title: "Ejercicio 23", 
        code: `` },

    { title: "Ejercicio 24", 
        code: `` },

    { title: "Ejercicio 25", 
        code: `` },

    { title: "Ejercicio 26", 
        code: `` },

    { title: "Ejercicio 27", 
        code: `` },

    { title: "Ejercicio 28", 
        code: `` },

    { title: "Ejercicio 29", 
        code: `` },

    { title: "Ejercicio 30", 
        code: `` },

    { title: "Ejercicio 31", 
        code: `` },

    { title: "Ejercicio 32", 
        code: `` },

];