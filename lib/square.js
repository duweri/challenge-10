const Shape = require('./shape.js');

class Square extends Shape{
    render (){
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect x ="90" y = "40" width="120" height = "120" fill=${this.fillColour} />
        <text fill="${this.textColour}" font-size="75" x="172" y="250">${this.characters}</text> 
        </svg>`
    }
}

module.exports = Square;