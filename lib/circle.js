const Shape = require('./shape.js');

class Circle extends Shape{
    display (){
        return `<circle cx ="150" cy = "100" r="80" fill=${this.colour} />`;
    }
}

module.exports = Circle;