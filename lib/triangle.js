const Shape = require('./shape.js');

class Triangle extends Shape{
    display (){
        return `<polygon points ="150, 18 244, 182 56, 182" fill=${this.colour} />`;
    }
}

module.exports = Triangle;