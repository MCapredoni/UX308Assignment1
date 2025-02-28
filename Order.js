export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Hello! Thanks for ordering Marcs Italian!");
          aReturn.push("Tonights menu is Pizza! We have 2 options this evening Pizza or Pasta. Please respond with the option you prefer.");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.SIZE;
          if (sInput.toLowerCase().startsWith('pizza')) {
            aReturn.push(`Pizza it is! Would you like your pizza a small or large?`);
            aReturn.push(`Your order number is ${this.sFrom}`);
          } 
          return aReturn;
        },
        SIZE: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.TOPPINGS;
          if (sInput.toLowerCase().startsWith('small')) {
            aReturn.push(`Small pizza it is!`);
            aReturn.push(`Would you like any toppings? We have a special section tonight of sausage or mushrooms`);
          } else {
            (sInput.toLowerCase().startsWith('large'))
            aReturn.push(`Large pizza it is!`);
            aReturn.push(`Would you like any toppings? We have a special section tonight of sausage or mushrooms`);
          }
          return aReturn;
        },
        TOPPINGS: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.DRINKS;
          if (sInput.toLowerCase().startsWith('sausage')) {
            aReturn.push(`Sausage it is!`);
            aReturn.push(`Would you like a drink? We have coke or pepsi`);
          } else {
            (sInput.toLowerCase().startsWith('mushroom'))
            aReturn.push(`Mushroom it is!`);
            aReturn.push(`Would you like a drink? We have coke or pepsi`);
          }
          return aReturn;
        },
        DRINKS: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.DRINKS;
          if (sInput.toLowerCase().startsWith('coke')) {
            aReturn.push(`Coke it is!`);
            aReturn.push(`thanks `);
          } else {
            (sInput.toLowerCase().startsWith('pepsi'))
            aReturn.push(`pepsi it is!`);
            aReturn.push(`thanks `);
          }
          return aReturn;
        },
      
      RESERVING: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        if (sInput.toLowerCase().startsWith('pasta')) {
          aReturn.push(`Pasta it is! Would you like a small serving or large serving`);
          aReturn.push(`Your order number is ${this.sFrom}`);
        } 
        return aReturn;
      },
      SIZE: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.TOPPINGS;
        if (sInput.toLowerCase().startsWith('small')) {
          aReturn.push(`Small serving of pasta it is!`);
          aReturn.push(`Would you like any toppings? We have a special section tonight of parmesan or oregano`);
        } else {
          (sInput.toLowerCase().startsWith('large'))
          aReturn.push(`Large serving of pasta it is!`);
          aReturn.push(`Would you like any toppings? We have a special section tonight of parmesan or oregano`);
        }
        return aReturn;
      },
      TOPPINGS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.DRINKS;
        if (sInput.toLowerCase().startsWith('parmesan')) {
          aReturn.push(`Parmesan cheese it is!`);
          aReturn.push(`Would you like a drink? We have coke or pepsi`);
        } else {
          (sInput.toLowerCase().startsWith('oregano'))
          aReturn.push(`Oregano it is!`);
          aReturn.push(`Would you like a drink? We have coke or pepsi`);
        }
        return aReturn;
      },
      DRINKS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.DRINKS;
        if (sInput.toLowerCase().startsWith('coke')) {
          aReturn.push(`Coke it is!`);
          aReturn.push(`thanks `);
        } else {
          (sInput.toLowerCase().startsWith('pepsi'))
          aReturn.push(`pepsi it is!`);
          aReturn.push(`thanks `);
        }
        return aReturn;
      },
    };
      
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }