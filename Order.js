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
            aReturn.push(`Pizza it is! Would you like your pizza a small or large? Please reply with either "large" or "small"`);
            aReturn.push(`Your order number is ${this.sFrom}`);
          } else {
            (sInput.toLowerCase().startsWith('pasta'))
            aReturn.push(`Pasta it is! Would you like a small serving or large serving? Please reply with either "large" or "small"`);
            aReturn.push(`Your order number is ${this.sFrom}`);
          } 
          return aReturn;
        },
        SIZE: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.SAUCE;
          if (sInput.toLowerCase().startsWith('small')) {
            aReturn.push(`Small order it is!`);
            aReturn.push(`What type of sauce would you like on your order? Tonight we have the usual "Tomato Sauce" or "Alfredo Sauce".`);
          } else {
            (sInput.toLowerCase().startsWith('large'))
            aReturn.push(`Large order it is!`);
            aReturn.push(`What type of sauce would you like on your order? Tonight we have the usual "Tomato Sauce" or "Alfredo Sauce".`);
          } 
        },
        SAUCE: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.DRINKS;
          if (sInput.toLowerCase().startsWith('tomato')) {
            aReturn.push(`Great choice! Tomato Sauce it is!`);
            aReturn.push(`Would you like a drink with that? We have a discount for ordering a drink with your meal. Our selection includes coke and pepsi`);
          } else {
            (sInput.toLowerCase().startsWith('alfredo'))
            aReturn.push(`Great choice! Alfredo Sauce it is!`);
            aReturn.push(`Would you like a drink with that? We have a discount for ordering a drink with your meal. Our selection includes coke and pepsi`);
          }
          return aReturn;
        },
        DRINKS: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('coke')) {
            aReturn.push(`Coke it is!`);
            aReturn.push(`Thanks! Order: ${this.sFrom} will be ready in 30 minutes for pickup.`);
          } else {
            (sInput.toLowerCase().startsWith('pepsi'))
            aReturn.push(`pepsi it is!`);
            aReturn.push(`Thanks! Order: ${this.sFrom} will be ready in 30 minutes for pickup.`);
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