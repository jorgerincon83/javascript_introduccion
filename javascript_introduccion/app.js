
/*Uso de variables
var nombre ='Jorge';
console.log(nombre);
var edad = 34;
console.log(edad);

var sueldo = 3.500;
console.log(sueldo);

var tienetrabajo = false;
console.log(tienetrabajo);
console.log(typeof(tienetrabajo));*/

/* operadores Matematicos +,-,*,/
*/
/*var edadAna, edadMaria, edadTatiana;
var sumaEdad, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
edadTatiana = 14;

diferenciaEdad = edadAna - edadMaria;
sumaEdad = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdad);
console.log('año en que nacio Ana');
console.log('año en que nacio Maria');
console.log(yearActual * 5 )
console.log(yearActual / 2);*/

/* Operadores Logicos unarios y de asignacion
logicos < > <= >= ==
*/
/*var edadAna, edadMaria, edadTatiana;
edadAna = 34;
edadMaria = 28;
 var mayorAna = edadAna > edadMaria;
 console.log(mayorAna);
 /*Unarios,++ incremento, --decremento
 ejemplo edadAna++; 
 
 */
/*console.log(edadAna++);
console.log(edadAna);
/* Operadores de asignacion
+= -= *= /= %= */
/*var a = 11;
var b = 5;
var c = a % 5; // residuo o resto de la division
console.log(c);*/

/*var nombre = 'Jorge';
var esCasado = true;
if(esCasado == true){
    console.log(nombre + ' Es Casado.');
}else {
    console.log(nombre + 'Es Soltero');
}*/

var nombre = 'jorge';
var edad = 8

if(edad < 12){
    console.log(nombre + 'es un niño.');
}else if ((edad > 11 && edad < 18)){
    console.log(nombre + ' es un adolecente');
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + 'es un adulto.');

}else{
    console.log(nombre + 'es un anciano.');
}







