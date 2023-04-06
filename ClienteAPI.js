 const url = "https://jsonplaceholder.typicode.com/";

 //funcion q se conecte a la api y obtenga los datos
 async function obtenerTodo(){
    //conexión a una api
    //Versiones > 18 de node.js
    //coja el valor q esta en la variable url
    const respuesta = await fetch(`${url}${id}`);
    //otra forma de hacerlo
    //const r = fetch(url + id);
    //convertir esa respuesta q me dio fetch en  json 
    const datos = await respuesta.json();
    //console.log(datos);
    procesarJson(datos)
 }

 //pasar los datos a una función
 function procesarJson(dato){
    HTMLFormControlsCollection.log(dato); 
 }