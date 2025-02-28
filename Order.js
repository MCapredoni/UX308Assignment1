export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Hello! Thanks for ordering Marcs Italian!");
          aReturn.push("Tonights menu is Pizza! We have 2 options this evening Thin Crust Pizza and Regular Style Pizza. Please respond with the option you prefer.");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.SIZE;
          if (sInput.toLowerCase().startsWith('thin')) {
            aReturn.push(`Thin Crust it is! Would you like your pizza a small or large?`);
            aReturn.push(`Your order number is ${this.sFrom}`);
          }
          return aReturn;
        },
        SIZE: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.TOPPINGS;
          if (sInput.toLowerCase().startsWith('small')) {
            aReturn.push(`Small pizza it is`);
            aReturn.push(`Would you like any toppings? We have a special section tonight of sausage or mushrooms`);
          }
          return aReturn;
        },
        TOPPINGS: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.TOPPINGS;
          if (sInput.toLowerCase().startsWith('sausage')) {
            aReturn.push(`Sausage it is`);
            aReturn.push(`Would you like any toppings? We have a special section tonight of sausage or mushrooms`);
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