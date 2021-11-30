const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    
    get appetizers(){},
    get mains(){},
    get desserts(){},
    set appetizers(apperizersIn){},
    set mains(mainsIn){},
    set desserts(dessetsIn){},
    
    get _courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
  
    const addDishToCourse = (courseName, dishName, dishPrice) =>{
      const dish = {
        dishName,
        dishPrice
      };
    
      this._courses[courseName] = dish;
    }
    getRandomDishFromCourse (courseName){
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
    },
    
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse(`mains`);
      const desserts = this.getRandomDishFromCourse(`desserts`);
      const totalPrice = appetizer.price + mains.price + desserts.price;
   
      return `Your meal is ${appetizer.name}, ${main.name}, ${desserts.name}. The price is $${totalPrice}.`;
    }
  };
  
    menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
    menu.addDishToCourse('main', 'Caesar ', 4.25);
    menu.addDishToCourse('desserts', ' Salad', 4.25);
    menu.addDishToCourse('main', 'Caes lad', 4.25);
    menu.addDishToCourse('desserts', 'Caer Salad', 4.25);
  
   let meal = menu.generateRandomMeal();
  
  };