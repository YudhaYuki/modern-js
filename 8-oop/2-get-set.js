const data = {
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
    }
}

// Code that uses the data object
data.location = '    Brussels       ';
console.log(data.location); 
