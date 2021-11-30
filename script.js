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
    
  
    }
  
  
  };