//1. Hacer una referencia a la función que quiero probar 
const obtenerTodo = require('./ClienteAPI');

//Esta es una función asincrona
//Nos va a devolver una promesa
//el callback debe ser asyncrono 
test(
    'Retorno de datos desde la API', async()=>{
        //espere hasta q la función se ejecute
        //espero a q la promesa se resuelva 
        const datos = await obtenerTodo(3);
        expect(datos.id).toEqual(3);
    }
); 

test(
    'Retorno de albumId desde la API', async()=>{
        //espere hasta q la función se ejecute
        //espero a q la promesa se resuelva 
        const datos = await obtenerTodo(3);
        //desestructurando datos
        //De los datos que reciba, ya ahí una propiedad llamada albumID
        expect(datos.albumId).toEqual(1);
    }
); 
