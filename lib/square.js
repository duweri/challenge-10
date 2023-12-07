const Shape = require('./shape.js');

class Square extends Shape{
    display (){
        return `<rect x ="90" y = "40" width="120" height = "120" fill=${this.colour} />`;
    }
}

module.exports = Square;