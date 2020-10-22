//Aplicación con funciones para conectar con el backend
// let upperCase = require('upper-case');
// console.log(upperCase.upperCase('hello world!'));
//EJERCICIO FACTORIAL 
// let res = 1;
// for(let i=1 ;i<=n; i++) {
//     res= res*i;
// }
// return resultado;
//SOLUCION RECURSIVA DE LA MISMA FUNCION DE FACTORIAL
// (n)=> {
//     if (n === 1) return 1;
//     else return f(n - 1) * n;
// };
// n(3);
const express = require('express');
const app = express();
//Instanciamos el servidor
app.listen(3000,()=>console.log('Servidor levantado en 3000')); 
//Routing con express
//const Coches = {Volvo: 'txt'};
app.get('/request/coches', (req, res)=> {
   //return res.send(arrayCoches);
   //return res.send('Hello World');
   res.send('The car is: '+ req.query.coches);
});
