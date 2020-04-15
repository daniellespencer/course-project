import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesStartComponent } from './recipes-start.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RecipesComponent } from '../recipes.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

describe('RecipesStartComponent', () => {
  let component: RecipesStartComponent;
  let fixture: ComponentFixture<RecipesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        RecipesComponent,
        RecipeDetailComponent,
        ShoppingEditComponent,
        RecipeListComponent,
        RecipeItemComponent,
        DropdownDirective,
        RecipesStartComponent,
        RecipeEditComponent
      ],
      providers: [ShoppingListService, RecipeService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
