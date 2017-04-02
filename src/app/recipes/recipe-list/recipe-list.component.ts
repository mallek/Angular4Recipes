import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg'),
       new Recipe('First Recipe', 'This is a test recipe', 'http://www.foodinsight.org/sites/default/files/styles/main_image_for_details/public/colorful%20foods_0.png?itok=yTTDVxZF')

  ];
  constructor() { }

  ngOnInit() {
  }

}
