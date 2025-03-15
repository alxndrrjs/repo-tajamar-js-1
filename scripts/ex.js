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

// 16. Bucle while
let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--; // Disminuir el contador en 1 en cada iteración
}

// 17. Función con return
function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4));  // true

// 18. Template Strings
let nombre = "Alexander";
let edad = 21;

let mensaje = `Hola, ${nombre}, tienes ${edad} años.`;

console.log(mensaje);

// 19. Arrow function
const suma = (a, b) => a + b;

console.log(suma(3, 5)); // 8

// 20. forEach
const numeros = [1, 2, 3];

numeros.forEach(numero => console.log(numero));

// 21. indexOf
const frutas_ex21 = ["manzana", "banana", "pera"];

const posicion = frutas_ex21.indexOf("banana");

console.log("La posición de 'banana' es:", posicion);

// 22. Ordenar números son sort
const numeros_ex22 = [5, 1, 3];

numeros_ex22.sort((a, b) => a - b);

console.log(numeros_ex22);

// 23. Filtrar con filter
const valores = [1, 2, 3, 4];

const numerosPares = valores.filter(valor => valor % 2 === 0);

console.log(numerosPares); // [2, 4]

// 24. Transformar con map
const numeros_ex25 = [1, 2, 3];
const cuadrados = numeros_ex25.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9]


// 25. Constructor de objetos
function Persona(nombre) {
    this.nombre = nombre;
}
  
const persona1 = new Persona('Alexander');
console.log(persona1.nombre); // "Alexander"  

// 26. Métodos de fecha avanzados
const fecha = new Date();
const hora = fecha.getHours().toString().padStart(2, '0');
const minutos = fecha.getMinutes().toString().padStart(2, '0');
const segundos = fecha.getSeconds().toString().padStart(2, '0');

console.log(`${hora}:${minutos}:${segundos}`);

// 27. Redondeo con toFixed
const numero = 3.1415;
const redondeado = numero.toFixed(2);

console.log(redondeado); // "3.14"

// 28. Buscar substrings con includes
const saludo = "¡Hola Mundo!";
const contieneHola = saludo.toLowerCase().includes("hola");

console.log(contieneHola); // true

// 29. Convertir strings con split y join
const frutas_ex29 = "manzana,banana,pera";
const arrayFrutas = frutas_ex29.split(",");

console.log(arrayFrutas); // ["manzana", "banana", "pera"]

const nuevoString = arrayFrutas.join("-");

console.log(nuevoString); // "manzana-banana-pera"

// 30. Destructuring de arrays
const array = [10, 20, 30];
const [primerElemento, , tercerElemento] = array;

console.log(primerElemento); // 10
console.log(tercerElemento); // 30

// 31. Destructuring de objetos
const persona_ex31 = { nombre_ex31: "Ana", edad_ex31: 30 };
const { nombre_ex31, edad_ex31 } = persona_ex31;

console.log(nombre_ex31); // "Ana"
console.log(edad_ex31); // 30

// 32. Closure
function crearContador() {
    let contador_ex32 = 0;
    return function() {
        contador_ex32++;
        return contador_ex32;
    };
}
  
const contador_ex32 = crearContador();
console.log(contador_ex32()); // 1
console.log(contador_ex32()); // 2
console.log(contador_ex32()); // 3
  
// 33. this en métodos de objeto
const coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log(this.marca);
    }
};

coche.mostrarMarca(); // "Toyota"
  
// 34. Clases
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    area() {
        return this.ancho * this.alto;
    }
}
  
const rectangulo1 = new Rectangulo(5, 10);
console.log(rectangulo1.area()); // 50
  
// 35. JSON
const objeto = { nombre: "Ale", edad: 21 };
const objetoJSON = JSON.stringify(objeto);

console.log(objetoJSON); // '{"nombre":"Ale","edad":21}'

const objetoParseado = JSON.parse(objetoJSON);
console.log(objetoParseado); // { nombre: "Ale", edad: 21 }





