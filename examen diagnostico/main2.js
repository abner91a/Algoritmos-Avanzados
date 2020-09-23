/* 1.-Programa que encuentre si un número se encuentra repetido en un arreglo. 

Por ejemplo: 

Entrada:  

Num. A buscar: 7 

Arreglo: 21,5,8,13,6,9,22 

Salida: No se encuentra 

Entrada: 

Num. A buscar: 15 

Arreglo: 99,32,15,28,90,15,67 

Salida: El 15 se encuentra repetido  

Entrada: 

Num. A buscar: 30 

Arreglo: 54,10,44,30,12,89,17 

Salida: El 30 no se encuentra repetid 

  */



  /*    
  
  1) parte
  Num. A buscar: 7 

Arreglo: 21,5,8,13,6,9,22 

Salida: No se encuentra   */


/*   
Num. A buscar: 7 

Arreglo: 21,5,8,13,6,9,22 

Salida: No se encuentra    */



const buscandoNumero = (numero,arreglo) => {
 
  let sumador = 0;

  for ( let i = 0; i < arreglo.length ; i++){
     if(arreglo[i] === numero){

      return `Numero encontrado es: ${numero}` 

     // 
     }

     return `No esta`
  }

}

const buscandoNumero2 = (numero,arreglo) => {
 
  let sumador = 0;

  for ( let i = 0; i < arreglo.length ; i++){
     if(arreglo[i] === numero){

      sumador ++; 


     // 
     }
  }


  if(sumador > 1){
    return `Numero que se repiten son: ${sumador} y el numero es ${numero}`
  }else {
    return 'El Numero no esta en el arreglo: ' + numero
  }


}





const arreglo = [21,5,8,13,6,9,22 ];
console.log(buscandoNumero(21,arreglo))

const arreglo2 = [99,32,15,28,90,15,67];
console.log(buscandoNumero2(15,arreglo2))

console.log("---------------------------------------------------------") 

/*
2.-Programa que verifique si dos números son amigos. 

Dos números amigos son dos números enteros positivos a y b tales que la suma de los divisores propios de uno es igual al otro número y viceversa (la unidad se considera divisor propio, pero no lo es el mismo número). 

Un ejemplo es el par de números naturales (220, 284), ya que: 

los divisores propios de 220 son 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 y 110, que suman 284; 

los divisores propios de 284 son 1, 2, 4, 71 y 142, que suman 220. 

 


*/

/*  funcion de numero perfecto */

const esNumeroPerfecto = (numero) =>{
  let sumador = 0;
  for(let i = 1; i < numero; i++){
    if(numero % i === 0) {
      
      sumador += i;
      console.log(sumador)
    }
   
  }

  return sumador;
}


const numeroAmigos = () => {
  let numero1 = Number(prompt('dame numero 1'));
  let numero2 = Number(prompt('dame numero 2'));

  // let numero1 = 220;
  // let numero2 = 284

  let regresaNumero1 = esNumeroPerfecto(numero1);

  console.log("***************************************")

  // let regresaNumero2 = esNumeroPerfecto(496);

  if(regresaNumero1 === numero2){
    let regresaNumero2 = esNumeroPerfecto(numero2);
    console.log("***************************************")
      if(numero1 === regresaNumero2){
        console.log('Los numeros son amigos')
      }else {
        console.log('los numeros no son amigo')
      }

  } else {
    console.log('No son amigos')
  }
}

// numeroAmigos()


/* 3 Ejercisio 

3.-Programa que encuentre los números perfectos entre 1 y n. 

Un número perfecto es un número natural que es igual a la suma de sus divisores propios positivos. Dicho de otra forma, un número perfecto es aquel que es amigo de sí mismo. 

Así, 6 es un número perfecto porque sus divisores propios son 1, 2 y 3; y 6 = 1 + 2 + 3. Los siguientes números perfectos son 28, 496 y 8128. 

28 = 1 + 2 + 4 + 7 + 14 

496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 

 

*/

const numeroPerfecto = (numero) => {
 
     let sumador = esNumeroPerfecto(numero);

    if(sumador === numero) {
      console.log(' es perfecto')
    }else {
      console.log('no es perfecto')
    }
} 


  // numeroPerfecto(28)