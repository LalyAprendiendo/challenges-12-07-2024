// datos (https://dummyjson.com/) que contiene recetas, ruta :
//https://dummyjson.com/recipes/
//obtener recetas por etiquetas: (https://dummyjson.com/recipes/tags/)


import { URL_API } from "../constants";

async function getData(ruta :string|object[]) {
  const response = await fetch(URL_API + ruta);
  const data = await response.json(); //extrae body y convierte a js
 //console.log(data);

  return data;
}
//getData("recipes/tag/Spring rolls");


export { getData };
