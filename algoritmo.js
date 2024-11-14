function suma(){

// 1. declarar variables necesarias para la funcion o algoritmo
let A = 0;
let B = 0;
let SUMA = 0;

// 2.Solicitar al usuario que ingrese los valores
// y estos se asignan a las variables

A = parseInt(prompt("Ingresa  el primer numero"))
B = parseInt(prompt("Ingrese el segundo numero"))

// 3. Realizar el procedimiento

SUMA = A + B;

// 4. Mostrar el Resultado
alert("Hola este es el resultado  " + SUMA)
}
    
const operaciones = () => {
    let a;
    let b;
    // let opcion;
    
    let suma;
    let resta;
    let multiplicacion;
    let division;

    a = parseInt(prompt("Porfavor ingrese el primer numero "));
    b = parseInt( prompt("Porfavor ingrese  el segundo numero"));
    // opcion = prompt("ingrese la operacion.");

    // if (opcion === "suma") {
    //     resultado = a + b;
    // } else if (opcion === "resta") {
    //     resultado = resta;
    // } else if(opcion === "multiplicacion") {
    //     resultado = a * b;
    // } else if(opcion === "division") {
    //     resultado = a / b;
    // } else {
    //     resultado = "ERROR"
    // }

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert(`Tu resultado es  ${a} + ${b} es: ${suma}`)
    alert(`Tu resultado es ${a} - ${b} es: ${resta}`)
    alert(`Tu resultado es ${a} x ${b} es: ${multiplicacion}`)
    alert(`Tu resultado es${a} / ${b} es: ${division}`)
    
}




const cuadrado = () => {
    let num = parseInt(prompt("Ingresa un Numero"));
    let resultado  = num ** 2;

    alert(`Total del cuadrado es ${resultado}`)
}

function areaTriangulo() {
    let base = parseInt(prompt("Valor de  la base del triangulo:"));
    let altura = parseInt(prompt("Valor de la  la altura del triangulo:"));

    let resultado = (base * altura ) / 2;

    console.log(`El resultado es para area de un  triangulo con  base: ${base} y altura: ${altura} = ${resultado}`);
    alert(`El resultado es para area de un  triangulo ${base} y altura: ${altura} = ${resultado}`);
    





}




const conversionUnidades = () => {

    let cmUser = parseInt(prompt("Porfavor de la medida en numeros "));

    let cmToMt = cmUser / 100;
    let cmToKm = cmUser * 0.00001;
    let cmToPg = cmUser / 100000;

    alert(`${cmUser} de Cm a ${cmToMt}Mt`)
    alert(`${cmUser} de Cm a ${cmToKm}Km`)
    alert(`${cmUser} de Cm a ${cmToPg}Pg`)

}


function mayorDos() {
    let  num1 =  parseInt(prompt("Digite el primer numero:"));
    let  num2 =  parseInt(prompt("Digite el segundo numero:"));

    if (num1 > num2) {
        console.log(` Para el numero ${num1} es mayor a el numero ${num2}`)
        alert(`EL numero ${num1} es mayor a el numero ${num2}`)
    } else if (num2 > num1) {
        console.log(` Para el numero ${num2} es mayor a el numero ${num1}`)
        alert(`Para el numero ${num2} es mayor a el numero ${num1}`)
    } else {
        alert("Ambos valores  son iguales xd ")
    }
}




function menorTres() {
    let num1 = parseInt(prompt("Valor del primer numero:"));
    let num2 = parseInt(prompt("Valor del segundo numero:"));
    let num3 = parseInt(prompt("Valor del tercero numero:"));

    if (num1 > num2 && num1 > num3) {
        console.log(`EL numero ${num1} es mayor que  el numero ${num2} y al numero ${num3}`)
        alert(`EL numero ${num1} es mayor que el numero ${num2} y al numero ${num3}`)
    } else if (num2 > num1 && num2 > num3) {
        console.log(`EL numero ${num2} es mayor que el numero ${num1} y al numero ${num3}`)
        alert(`EL numero ${num2} es mayor que el numero ${num1} y al numero ${num3}`)
    } else if (num3 > num1 && num3 > num2) {
        console.log(`EL numero ${num3} es mayor que el numero ${num1} y al numero ${num2}`)
        alert(`EL numero ${num3} es mayor que el numero ${num1} y al numero ${num2}`)
    }  else {
        alert("Todos son iguales xd ")
    }

}


function promedio() {
    let nombre = prompt("Porfavor ingrese el nombre  del estudiante: ");
    let materia = prompt("Indique la materia: ");

    let notas = [];
    

    for (let i = 1; i <= 8; i++) {
        let nota = parseFloat(prompt(`Nota #${i}: Ingrese una nota que este entre el 1 y el 10 :p `));
        notas.push(nota)
    }

    let sumaNotas = 0;

    notas.forEach(element => {
        sumaNotas+=element; 
    });
    
    let promedio = sumaNotas / notas.length;

    console.log(notas.length);
    

    if (promedio >= 6.2) {
        alert(` Señor/a Estudiante ${nombre} su promedio de ${materia} es: ${promedio} Aprobo  :D Felicidades !!!!!!!!!!!!!!!!!!!!!`)
    } else {
        alert(` Señor/a Estudiante ${nombre} su promedio de ${materia} es: ${promedio} Reprobo :c `)
    }






}



function verificarParImpar() {
    const num = parseInt(prompt("Ingresa un número:"));
  
    if (isNaN(num)) {
      alert("Por favor ingresa un número válido.");
    } else {
      if (num % 2 === 0) {
        alert(`${num} es  número par `);
      } else {
        alert(`${num} es  número impar`);
      }
    }
  }


  // 10. Un individuo desea invertir su capital en un banco, y requiere saber cuanto dinero ganara despues de n numero de años, teniendo en cuenta que le banco paga un interes mensual del 0.7%$


 const inversion = () => {

    let capital = parseInt(prompt("Porfavor ingrese  el capital a invetir "));
    let numeroAnios = parseInt(prompt("Ingrese la cantidad de años que durara su inversion: "))

    let interes = 1.007;
    let meses = numeroAnios * 12;
    console.log(meses);
    
    let montofinal = capital * Math.pow(interes, meses)

    alert(`Después de ${numeroAnios} años, su inversión crecerá a $${montoFinal}.`);

    


 }

  
