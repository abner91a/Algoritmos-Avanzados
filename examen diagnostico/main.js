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

const buscarArreglo1 = (numeroAbuscar) => {
    const arreglo = [54,10,44,30,12,89,17];
  
     console.log(buscardor(arreglo,numeroAbuscar))
    }

const buscardorArreglo2 = (numeroAbuscar) => {
    const arreglo = [99,32,15,28,90,15,67];
  
    console.log(buscardor2(arreglo,numeroAbuscar))

}



const buscardor = (arreglo,numeroAbuscar) => {
    let verificador = 0;
    
    for(let i = 0; i < arreglo.length; i++){
    
        //    console.log( arreglo[i])
    
      
           if(arreglo[i] === numeroAbuscar ){
            verificador = 1;
                return `Numero encontrado es: ${numeroAbuscar}` 
             
           }
        }

        if(verificador === 0){
            return  `No se encuentra ` 
        }

    
        return sumador;

}


const buscardor2 = (arreglo,numeroAbuscar) => {
    let sumador = 0;
    
    for(let i = 0; i < arreglo.length; i++){
    
        //    console.log( arreglo[i])
    
      
           if(arreglo[i] === numeroAbuscar ){
            sumador = sumador + 1;
           
           }
        }
        
        if(sumador > 1){
            return `Numero que se repiten son: ${sumador} y el numero es ${numeroAbuscar}`
        } else {
            return `no hay un numero en el arreglo`
        }
    

}

buscarArreglo1(15);

// let dameNumeroParabuscar = Number(prompt('dame algun numero que de see buscar en la segund opcion'));
// buscardorArreglo2(dameNumeroParabuscar);








/* 3 Ejercisio 

3.-Programa que encuentre los números perfectos entre 1 y n. 

Un número perfecto es un número natural que es igual a la suma de sus divisores propios positivos. Dicho de otra forma, un número perfecto es aquel que es amigo de sí mismo. 

Así, 6 es un número perfecto porque sus divisores propios son 1, 2 y 3; y 6 = 1 + 2 + 3. Los siguientes números perfectos son 28, 496 y 8128. 

28 = 1 + 2 + 4 + 7 + 14 

496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248 

 

*/

const numeroPerfecto = (numeroNatural) => {
 

    for(let i = 2; i < numeroNatural; i++){
        sumador = 0;
        for(let j = 1; j < Math.floor(i/2); j++ ){
            if( i % j === 0){
                sumador =  sumador + j;
            }
        }

        if( sumador === i){
            console.log(' el numero perfecto es: ' + i)
        }
    }
}

// let numeroNatural = Number(prompt('Dame un numero natural'));

numeroPerfecto(10)