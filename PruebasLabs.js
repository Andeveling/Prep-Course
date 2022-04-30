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