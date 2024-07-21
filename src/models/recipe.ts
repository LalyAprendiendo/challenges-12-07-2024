import { getData } from "../database";
import { Messages } from "../utils/messages";

class Recipe {
  constructor () {}
   async getRecipeAll() {
    const { recipes } = await getData("recipes");
    //console.log(recipes);
    return recipes;
  }

  async getRecipeId(id: number | string) {
    const recipes = await this.getRecipeAll();
    const searchRecipe = recipes.find((recipe) => recipe.id == id);
    if (!searchRecipe) {
      return Messages.NOT_FOUND;
    }
    return searchRecipe;
  }

  async getRecipeName(name: string) {
    const recipes = await this.getRecipeAll();
    const searchName = recipes.filter((recipe) =>
      recipe.name.includes(name)
    );
    if (!searchName.length) {
      return Messages.NOT_FOUND;
    }
    
     return searchName;
  }
  
}
const recipes = new Recipe();
const { getRecipeAll, getRecipeId, getRecipeName } = recipes

export { getRecipeAll,getRecipeId, getRecipeName }
