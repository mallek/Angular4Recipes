import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

private recipes: Recipe[] = [
    new Recipe(
        'Tasty Burger',
        'This is a test recipe',
        'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
        [
            new Ingredient('Hamburger Bun', 1),
            new Ingredient('Hamburger Patty', 1),
            new Ingredient('Pototao', 2)
        ]),
    new Recipe(
        'Rainbow Fruitcake',
        'This is a test recipe',
        'http://www.foodinsight.org/sites/default/files/styles/main_image_for_details/public/colorful%20foods_0.png?itok=yTTDVxZF',
        [
            new Ingredient('Strawberries', 40),
            new Ingredient('Rasberries', 97),
            new Ingredient('Bananna', 2),
            new Ingredient('Orange', 1)

        ])

];

getRecipes() {
    return this.recipes.slice();
}

getRecipe(id: number) {
        return this.recipes[id];
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

    constructor(private shoppingListService: ShoppingListService) { }
}
