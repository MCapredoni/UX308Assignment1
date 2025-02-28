import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Hello! Thanks for ordering Marcs Italian!")
    });
    it("test pizza", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("pizza")
        const aResults = oOrder.handleInput("pizza");
        expect(aResults[0]).toBe(`Pizza it is! Would you like your pizza a small or large? Please reply with either "large" or "small"`)
    });
    it("test pasta", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("pasta")
        const aResults = oOrder.handleInput("pasta");
        expect(aResults[0]).toBe(`Pasta it is! Would you like a small serving or large serving? Please reply with either "large" or "small"`)
    });
    
  });
  
  