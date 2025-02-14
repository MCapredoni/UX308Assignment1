export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          aReturn.push("Hello! Thanks for using food fast!");
          aReturn.push("Tonights menu is TEMPFOOD! We have 2 options this evening TEMP1 and TEMP2. Please respond with the option you prefer.");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
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