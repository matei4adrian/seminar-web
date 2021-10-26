String.prototype.capitalizeWords = function() {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());
}

Number.prototype.times = function(funct) {
    for(let i = 0; i < this; i++) {
        funct()
    }
}

console.log("this words will be capitalized".capitalizeWords())
console.log(3.0.times(() => console.log("Function called")))