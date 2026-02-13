// Frontend minimo
let url= "http://127.0.0.1:8000/sumar"

let urlr= "http://127.0.0.1:8000/restar"
let myAPI= url + "?a=5&b=45";

async function crearPeticion(){
    let response = await fetch (myAPI);
    let datos = response.json();
}


