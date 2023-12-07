class Shape {
    constructor (colour, text, textColour){
        this.colour = colour;
        this.text = text;
        this.textColour = textColour;

    }
    setColour (colour){
        this.colour = colour;
}
setText(text){
    this.text=text
}
setTextColour(textColour){
    this.textColour = textColour
}
}
module.exports = Shape;