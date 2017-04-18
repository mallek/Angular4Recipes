import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        //localhost:4200/recipes
        path: 'recipes', component: RecipesComponent
    },
    {
        //localhost:4200/recipes
        path: 'shopping-list', component: ShoppingListComponent
    },
    { path: '**', redirectTo: '/recipes' }
];

@NgModule({
    imports: [
       // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}