const menu = {
  
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizer){
    this._courses.appetizers = appetizers;
  },
  
  get mains(){
    return this._courses.mains;
  },
  set mains(mains){
    this._courses.mains = main;
  },

  get desserts(){
    return this._courses.desserts;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },

  get courses(){
    return {
      apperizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
     };
  },

  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name : dishName,
      price : dishPrice,
    };

    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },

  generateRandomMeal(){
    const appetizers = this.getRandomDishFromCourse(`appetizers`);
    const mains = this.getRandomDishFromCourse(`mains`);
    const desserts = this.getRandomDishFromCourse(`desserts`);
    const totalPrice = appetizers.price + mains.price + desserts.price;

    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Steak & Veg', 23.25);
menu.addDishToCourse('desserts', 'Ice cream', 4.00);
menu.addDishToCourse('appetizers', 'Garlic Bread', 4.25);
menu.addDishToCourse('mains', 'Chicken curry', 13.50);
menu.addDishToCourse('desserts', 'Brownie', 5.75);
menu.addDishToCourse('appetizers', 'Soup ', 2.90);
menu.addDishToCourse('mains', 'Fish & Chips', 12.50);
menu.addDishToCourse('desserts', 'Banana Split', 4.25);

let meal = menu.generateRandomMeal();
console.log(menu.generateRandomMeal());
