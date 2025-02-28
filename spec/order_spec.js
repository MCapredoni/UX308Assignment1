import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Hello! Thanks for ordering Marcs Italian!")
    });
    it("test thin crust", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Your rapid test is reserved under the phone number 999-999-9999")
    });
    it("test no", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks anyway for trying our dinner service reservation system")
    });
  });
  
  