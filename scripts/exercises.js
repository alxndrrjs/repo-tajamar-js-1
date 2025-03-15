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
        code: `let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--; // Disminuir el contador en 1 en cada iteración
}
` },

    { title: "Ejercicio 17", 
        code: `function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4));  // true` },

    { title: "Ejercicio 18", 
        code: "let nombre = 'Alexander';\nlet edad = 21;\nlet mensaje = ´Hola, ${nombre}, tienes ${edad} años.´;\nconsole.log(mensaje);" },

    { title: "Ejercicio 19", 
        code: `const suma = (a, b) => a + b;

console.log(suma(3, 5)); // 8` },

    { title: "Ejercicio 20", 
        code: `const numeros = [1, 2, 3];

numeros.forEach(numero => console.log(numero));` },

    { title: "Ejercicio 21", 
        code: `const frutas_ex21 = ["manzana", "banana", "pera"];

const posicion = frutas_ex21.indexOf("banana");

console.log("La posición de 'banana' es:", posicion);` },

    { title: "Ejercicio 22", 
        code: `const numeros_ex22 = [5, 1, 3];

numeros_ex22.sort((a, b) => a - b);

console.log(numeros_ex22);` },

    { title: "Ejercicio 23", 
        code: `const valores = [1, 2, 3, 4];

const numerosPares = valores.filter(valor => valor % 2 === 0);

console.log(numerosPares); // [2, 4]` },

    { title: "Ejercicio 24", 
        code: `const numeros_ex25 = [1, 2, 3];
const cuadrados = numeros_ex25.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9]` },

    { title: "Ejercicio 25", 
        code: `function Persona(nombre) {
    this.nombre = nombre;
}
  
const persona1 = new Persona('Alexander');
console.log(persona1.nombre); // "Alexander"` },

    { title: "Ejercicio 26", 
        code: "const fecha = new Date();\nconst hora = fecha.getHours().toString().padStart(2, '0');\nconst minutos = fecha.getMinutes().toString().padStart(2, '0');\nconst segundos = fecha.getSeconds().toString().padStart(2, '0');\nconsole.log(`${hora}:${minutos}:${segundos}`);" },

    { title: "Ejercicio 27", 
        code: `const numero = 3.1415;
const redondeado = numero.toFixed(2);

console.log(redondeado); // "3.14"` },

    { title: "Ejercicio 28", 
        code: `const saludo = "¡Hola Mundo!";
const contieneHola = saludo.toLowerCase().includes("hola");

console.log(contieneHola); // true` },

    { title: "Ejercicio 29", 
        code: `const frutas_ex29 = "manzana,banana,pera";
const arrayFrutas = frutas_ex29.split(",");

console.log(arrayFrutas); // ["manzana", "banana", "pera"]

const nuevoString = arrayFrutas.join("-");

console.log(nuevoString); // "manzana-banana-pera"` },

    { title: "Ejercicio 30", 
        code: `const array = [10, 20, 30];
const [primerElemento, , tercerElemento] = array;

console.log(primerElemento); // 10
console.log(tercerElemento); // 30` },

    { title: "Ejercicio 31", 
        code: `const persona_ex31 = { nombre_ex31: "Ana", edad_ex31: 30 };
const { nombre_ex31, edad_ex31 } = persona_ex31;

console.log(nombre_ex31); // "Ana"
console.log(edad_ex31); // 30` },

    { title: "Ejercicio 32", 
        code: `function crearContador() {
    let contador_ex32 = 0;
    return function() {
        contador_ex32++;
        return contador_ex32;
    };
}
  
const contador_ex32 = crearContador();
console.log(contador_ex32()); // 1
console.log(contador_ex32()); // 2
console.log(contador_ex32()); // 3` },

    { title: "Ejercicio 33", 
        code: `const coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log(this.marca);
    }
};

coche.mostrarMarca(); // "Toyota"` },

    { title: "Ejercicio 34", 
        code: `class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    area() {
        return this.ancho * this.alto;
    }
}
  
const rectangulo1 = new Rectangulo(5, 10);
console.log(rectangulo1.area()); // 50` },

    { title: "Ejercicio 35", 
        code: `const objeto = { nombre: "Ale", edad: 21 };
const objetoJSON = JSON.stringify(objeto);

console.log(objetoJSON); // '{"nombre":"Ale","edad":21}'

const objetoParseado = JSON.parse(objetoJSON);
console.log(objetoParseado); // { nombre: "Ale", edad: 21 }` },

];