const fs = require('fs')

class Mitch {
    constructor() {
        const rawJokes = fs.readFileSync('./jokes.json', {encoding: 'utf-8'})
        this.jokes = JSON.parse(rawJokes)
    }

    tellJoke() {
        const jokeNumber = Math.floor(
            Math.random() * this.jokes.length
          )
        return this.jokes[jokeNumber]
    }
}

module.exports = Mitch