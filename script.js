let nota1 = parseFloat(prompt("Ingrese la nota del primer período:"));
let nota2 = parseFloat(prompt("Ingrese la nota del segundo período:"));
let nota3 = parseFloat(prompt("Ingrese la nota del tercer período:"));

let promedio = (nota1 + nota2 + nota3) / 3;

console.log("El promedio de las tres notas es: " + promedio.toFixed(2));
