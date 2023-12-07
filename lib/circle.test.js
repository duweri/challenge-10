const Circle = require('./circle');


// A testing suite for Arithmetic is created.
describe('Circle', () => {
  // Several tests are created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
  describe('Circle', () => {
    it('should display a circle', () => {
      const expectedSVG = `<circle cx ="150" cy = "100" r="80" fill="blue" />`;
      const circle = new Circle();
      circle.setColour = "blue";
      const actualSVG = circle.display();
      console.log("actualSVG = ", actualSVG);
      expect(actualSVG).toEqual(expectedSVG);
    });
  });
});
