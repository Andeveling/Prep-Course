{
    //--.reduce--//
    //ejemplo de uso de reduce.
    let a = [1, 2, 3, 4, 5, 6];
    let initialValue = 0;
    const sumValue = a.reduce(
        (previousV, currentV) => previousV + currentV,
        initialValue); // nos tomara el valor en la posicion 0 y el siguiente y hara algo, en este caso sumar, y guardar el resultado en la variable

    console.log(sumValue);
}
//--.map--//
//Se usa para cambiar cada elemento de una matriz de una misma manera ejm:
{
    let tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function multiplicarPorTres(elemento) {
        return elemento * 3;
    }

    const doble = tabla.map(function(elemento) {
        return elemento * 2;
    });

    const triple = tabla.map(multiplicarPorTres);

    console.log(triple);
    /*
    [3,  6,  9, 12, 15, 18, 21, 24, 27, 30]
    */

    console.log(doble);
    /*
    [2,  4,  6,  8, 10,  12, 14, 16, 18, 20]
    */
}

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

function convertir(obj) {
    return Object.entries(obj);
}

console.log(convertir(obj));


let a = ["adsjfdsfsfjsdjfhacabcsbajda"];
a.reduce(function(target, key, index) {
    target[index] = key;
    return target;
}, {})


{
    let numero = 32621;

    function capicua(numero) {
        numero = '' + numero;
        let a = numero.split("").reverse().join("");

        if (a === numero) {
            return "Es capicua";
        } else {
            return "No es capicua";
        }
    }

    console.log(capicua(numero));
}

{
    let cadena = "abcaAndres";

    function Dabc(n) {

        let a = [];

        a = n.split("");

        for (let i = 0; i < a.length; i++) {
            if (a[i] === "a" || a[i] === "b" || a[i] === "c") {
                delete a[i];
            }
        }

        a = a.join("");

        return a;
    }

    console.log(Dabc(cadena));
}

{
    let a = ["You", "are", "beautiful", "looking"];

    function sortArray(arr) {
        //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
        //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
        //Escribe tu código aquí

        arr.sort();

        return arr;
    }

    console.log(sortArray(a));

}


// el array a ordenar
var list = ['Delta', 'alph', 'CHARLIEs', 'bravosss'];

// array temporal contiene objetos con posición y valor de ordenamiento
var mapped = list.map(function(el, i) {
    return { index: i, value: el.length };
})

// ordenando el array mapeado que contiene los valores reducidos
mapped.sort(function(a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    return 0;
});

// contenedor para el orden resultante
var result = mapped.map(function(el) {
    return list[el.index];
});

console.log(result);