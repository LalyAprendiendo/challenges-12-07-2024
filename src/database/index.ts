// datos (https://dummyjson.com/) que contiene recetas, ruta :
//https://dummyjson.com/recipes/
//obtener recetas por etiquetas: (https://dummyjson.com/recipes/tags/)


import { URL_API } from "../constants";
import { URL_API2 } from "../constants";

async function getData(ruta :string|object[]) {
  const response = await fetch(URL_API + ruta);
  const data = await response.json(); //extrae body y convierte a js
 //console.log(data);

  return data;
}
//getData("recipes/tag/Spring rolls");

export async function getTags(ruta :string|object[]) {
  const response = await fetch(URL_API2 + ruta);
  const tags = await response.json(); //extrae body y convierte a js
 //console.log(data);

  return tags;
}
export { getData };
