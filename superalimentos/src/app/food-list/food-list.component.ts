import { Component, Input, OnInit } from '@angular/core';
import { FoodClass } from '../shared/food-class';
import { foods } from '../shared/foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  food:Array<FoodClass> = [];
  filter:string = "";
  totalfood:Array<FoodClass>=[];
  totalCalories:number = 0;
  showAddFood:boolean=false;

  constructor()
  {

    for(let e of foods)
    {
      let l_fc = new FoodClass(Object.values(e)[0], Object.values(e)[1], Object.values(e)[2], Object.values(e)[3]);
      this.food.push(l_fc);
    }
  }

  calorieClick(food : FoodClass, amount:number)
  {
    food.quantity += Number(amount);
    this.totalCalories += food.calories * amount;

    let l_index = this.totalfood.indexOf(food);
    if(l_index < 0)  this.totalfood.push(food);

    console.log(this.totalfood);
  }

  toggleForm()
  {
    this.showAddFood = !this.showAddFood;
  }

  addFoodSubmit(name:string, calories:number, imageUrl:string)
  {
    let l_food = new FoodClass(name, calories, imageUrl, 0);
    this.food.push(l_food);
    this.toggleForm();
  }

  ngOnInit(): void {
  }

}
