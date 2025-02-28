import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Hello! Thanks for ordering Marcs Italian!")
    });
    it("test thin crust", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("thin")
        const aResults = oOrder.handleInput("thin");
        expect(aResults[0]).toBe(`Thin Crust it is! Would you like your pizza a small or large?`)
    });
    it("test small", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("small")
        const aResults = oOrder.handleInput("small");
        expect(aResults[0]).toBe(`Small pizza it is`)
    });
  });
  
  