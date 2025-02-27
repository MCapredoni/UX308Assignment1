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
            aReturn.push(`Thin Crust it is! TEMPTEMPTEMPTEMPTEMP ${this.sFrom}`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
          } else {
            aReturn.push("Thanks for trying our reservation system");
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