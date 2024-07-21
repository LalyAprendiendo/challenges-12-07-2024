import { getRecipeAll, getRecipeId, getRecipeName } from "../models/recipe";
import { Messages } from "../utils/messages";

class RecipeController {
    async getRecipeAll() {
      return await getRecipeAll();
    }
    async getRecipeId(id: number | string) {
      if (!id) {
        return Messages.MISSING_DATA;
      }
      return await getRecipeId(id);
    }
    async getRecipeName (name: string) {
      if (!name) {
        return Messages.MISSING_DATA;
      } else if (typeof name != "string") {
        return Messages.BAD_REQUEST;
      }
      return await getRecipeName(name);
    }
  }
  
  const recipe = new RecipeController();
  
  // Cambio el nombre del metodo para que no haya conflicto con los metodos importados de models.
  // getAll es el metodo de la clase Product y allProducts es el nombre que le quiero dar para exportar.
  const {
     getRecipeAll: allRecipe, 
        getRecipeId: idRecipe, 
        getRecipeName: nameRecipe 
  } = recipe;
  
  export { allRecipe, idRecipe, nameRecipe };