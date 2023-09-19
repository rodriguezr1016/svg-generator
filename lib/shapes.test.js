const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle", () => {
    it("should create a triangle with a background of blue", () => {
      const shape = new Triangle();
      shape.colorChoice("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  describe("Square", () => {
    it("should create a square with a background of green", () => {
      const shape = new Square();
      shape.colorChoice("green");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="green" />'
      );
    });
  });
  describe("Circle", () => {
    it("should create a circle with a background of pink", () => {
      const shape = new Circle();
      shape.colorChoice("pink");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="pink" />'
      );
    });
  });