class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(statusValue) {
      this._isCheckedOut = statusValue;
    }
  
    getAverageRating() {
      return this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length;
    }
  
    toggleCheckOutStatus() {
      if(this._isCheckedOut == false) {
        this._isCheckedOut = true;
      } else {
        this._isCheckedOut = false;
      }
    }
  
    addRating(rating) {
      if(rating <= 5 && rating >= 1) {
        this._ratings.push(rating);
        } else {
          console.log('That is not a rating, but an opinion!');
        }
    }
  };
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor (title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  historyOfEverything.toggleCheckOutStatus();
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.title);
  console.log(historyOfEverything.author);
  console.log(historyOfEverything.pages);
  console.log(historyOfEverything.isCheckedOut);
  console.log(historyOfEverything.getAverageRating())
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  speed.addRating("One");
  console.log(speed.getAverageRating())