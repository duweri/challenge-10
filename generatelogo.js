const Square = require('../Develop/lib/square')
const Triangle = require('../Develop/lib/triangle')
const Circle = require('../Develop/lib/circle')

function generatelogo(data){
    let shape = undefined
    if(data.shape === 'Triangle'){
        shape = new Triangle(data.shape_colour, data.text, data.text_colour)
    } else if (data.shape === 'Square'){
        shape = new Square(data.shape_colour, data.text, data.text_colour)
    } else {
        shape = new Circle(data.shape_colour, data.text, data.text_colour)
    }
    return shape.render();
}
module.exports= generatelogo;