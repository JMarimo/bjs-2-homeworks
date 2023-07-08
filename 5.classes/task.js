class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    this.name = name,
    this.releaseDate = releaseDate,
    this.pagesCount = pagesCount,
    this.state = 100,
    this.type = null,
    }

    fix() {
        return this.state = this.state*1,5;
    }

    set state(stateNew) {
        if (stateNew < 0) {
            this._state = 0;
        } else if (stateNew > 100) {
            this._state = 100;
        } else {
            this._state = stateNew;
        }
    }

    get state() {
        return this._state;
    }
}

сlass Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
       super(name, releaseDate, pagesCount);
       this.type = "magazine";
            }
        }
        
class Book extends PrintEditionItem {
        constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
