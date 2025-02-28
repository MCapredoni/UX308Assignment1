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
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('t')) {
            aReturn.push(`Thin Crust it is! Would you like your pizza a small or large?`);
            aReturn.push(`Your order number is ${this.sFrom}`);
          } else {
            aReturn.push("Thanks anyway for trying our dinner service reservation system");
            aReturn.push("Maybe next time")
          }
          return aReturn;
        }
        
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