const Shape = require('./shape.js');

class Triangle extends Shape{
    render (){
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points ="150, 18 244, 182 56, 182" fill=${this.fillColour} />
        <text fill="${this.textColour}" font-size="75" x="172" y="250">${this.characters}</text>
        </svg>`
    }
}

module.exports = Triangle;