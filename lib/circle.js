const Shape = require('./shape.js');

class Circle extends Shape{
    render (){
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${this.fillColour}" />;
        <text fill="${this.textColour}" font-size="75" x="172" y="250">${this.characters}</text>
        </svg>`
    }
}

module.exports = Circle;