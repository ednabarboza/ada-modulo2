const numeros = [1, 2, 3, 4, 5];

// console.log(typeof numeros)
// console.log(numeros)

const numerosDobrados = numeros.map((numero) => [numero*2])
.map(resultado => console.log(resultado[0]))

//console.log(numerosDobrados)


const numerosDobrados2 = numeros.map((numero) => numero * 2);

const API = (numerosDobrados2) => {
  const getNumerosDobrados = (values) => {
    return { valores: values };
  }

  const resultado = getNumerosDobrados(numerosDobrados2)
  return resultado

  //getNumerosDobrados(numerosDobrados2);
}

const exibir = API(numerosDobrados2)
console.log(exibir)

//API(numerosDobrados2);



// const multiplicaPorTres = numeros.map((numero) => {
//     //return numero * 3
//     console.log(numero*3)
// })

// //console.log(multiplicaPorTres)
// multiplicaPorTres