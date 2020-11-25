export class FoodClass
{
  name     : string;
  calories : number;
  image    : string;
  quantity : number;

  constructor(name:string, calories:number, image:string, quantity:number)
  {
    this.name     = name;
    this.calories = calories;
    this.image    = image;
    this.quantity = quantity;
  }
}
