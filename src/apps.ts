//Rutas o Endpoints
import { allRecipe, idRecipe, nameRecipe } from "./controllers/recipe";
import { tagAll } from "./controllers/tag";
import { Messages } from "./utils/messages";

export async function endPoints(mensaje) {
    const mensajeCliente = mensaje.toString();
    const objetoJs = JSON.parse(mensajeCliente);
  
    if (objetoJs.path == "recipes") {
      const getAll = await allRecipe();
      const recipeJson = JSON.stringify(getAll);
      return recipeJson;
    } else if (objetoJs.path == "tag") {
      const tag = await tagAll();
      const tagJson = JSON.stringify(tag);
      return tagJson;
      //console.log(objetoJs);
    } else if (objetoJs.path == "recipe/id") {
      const recipeId = await idRecipe(objetoJs.id);
      const recipeIdJson = JSON.stringify(recipeId);
      return recipeIdJson;
    } else if (objetoJs.path == "name") {
      const recipeName = await nameRecipe(objetoJs.name);
      const recipeNameJson = JSON.stringify(recipeName);
      return recipeNameJson;
    }  else {
      const message = JSON.stringify(Messages.BAD_REQUEST);
      return message;
    }
  }
  