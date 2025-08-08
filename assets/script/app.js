// 1.- Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n.


// const sumatoria = ( numero ) => {
//     if( numero > 0 && numero < 100 ) {
//         let n = 1
//         let suma = 0
//         while (n <= numero) {
//             suma += n
//             n ++
//         } 
//         return suma
//     } else {
//             console.log('Ingresa un numero valido de 1 a 100')
//     }
// }

// console.log(sumatoria(10));


// 2.- Construya una función que imprima si un número es primo o no. Los números primos son aquellos que son divisibles solo por 1 y por sí mismos. 

// const numeroPrimo = ( numero ) => {
//     if (numero !== 1 && numero % numero === 0 && numero % 2 !== 0 || numero === 2 ) {
//         console.log(`El numero ${numero} es primo`);
//     } else {
//         console.log(`El numero ${numero} NO es primo`);
//     }
// } 


// const esPrimo = (numero) => {
//     // Casos especiales
//     if (numero <= 1) {
//         return false; // Los números menores o iguales a 1 no son primos
//     }
//     if (numero === 2) {
//         return true; // 2 es el único número par primo
//     }
//     if (numero % 2 === 0) {
//         return false; // Descartamos todos los pares mayores que 2
//     }

//     // Verificamos divisores impares hasta la raíz cuadrada del número
//     for (let i = 3; i <= Math.sqrt(numero); i += 2) {
//         if (numero % i === 0) {
//             return false; // Si encontramos un divisor, no es primo
//         }
//     }
    
//     return true; // Si no encontramos divisores, es primo
// };

// // Función que imprime si un número es primo o no
// const imprimirSiEsPrimo = (numero) => {
//     if (esPrimo(numero)) {
//         console.log(`El número ${numero} ES primo`);
//     } else {
//         console.log(`El número ${numero} NO es primo`);
//     }
// };

// imprimirSiEsPrimo(901513)


// 3.- Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva, es decir si n es 5 deberá imprimir 5,4,3,2,1. 


// const cuentaRegresiva = ( numero ) => {
//     if( numero < 100 ) {
//         while (numero > 0) {
//             console.log(`${numero}`)
//             numero --
//         } 
//     } else {
//             console.log('Ingresa un numero valido, debe ser mayor que 0 y menor que 100')
//     }
// }

// console.log(cuentaRegresiva(99));


// 4.- Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule la sumatoria de todos los números pares contenidos en el rango. 


// const sumatoria = ( numero ) => {
//     if ( numero > 1 && numero < 10 ) {
//         let suma = 0

//         while (numero < 10) {

//             if ( numero % 2 === 0 ) {
//                 suma += numero 
//             } 

//             numero ++
//         }
//             return suma
//     }
// }

// console.log(sumatoria(8));








// Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho número hasta el 12.

// const tablaMultiplicar = ( numero ) => {

//     while(numero < 12) {

//         const factor01 = numero + 1;
//         numero++
        
//         for ( let i = 0; i <= 12; i++){
//             const resultado = factor01 * i
//             console.log(` ${factor01} X ${i} = ${resultado}`);

//         }
//     }
// }

// tablaMultiplicar(4)





// Cree un programa que dado un arreglo de números desordenados los ordene ascendentemente

const ordenaNumeros = ( array ) => {
    
    array = [34,98,76,54,32,1,65,432,67,4]
    return array.sort( (a,b) => a - b )

}

console.log(ordenaNumeros())




