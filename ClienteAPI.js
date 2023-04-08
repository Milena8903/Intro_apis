 //funcion q se conecte a la api y obtenga los datos
const url = "https://jsonplaceholder.typicode.com/photos/";


async function obtenerTodo(id){
    //Versiones > 18 de node.js
    //coja el valor q esta en la variable url
    const respuesta = await fetch(`${url}${id}`);
    //otra forma de hacerlo :const r = fetch(url + id);
    //convertir esa respuesta q me dio fetch en  json 
    const datos = await respuesta.json();
    procesarJson(datos);
    return datos;
  }

 function procesarJson(dato){
    console.log(dato);
 }

 //obtenerTodo(5);

 //importar en cualquier lado que lo necesita la función
module.exports = obtenerTodo;
