class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  let balloonAttack = (p1, p2) => {
    let result1 = p1.balloonCount - 10 * p2.hitsPerMinute;
    let result2 = p2.balloonCount - 10 * p1.hitsPerMinute;
    if(result1 > result2) {
      return p1.name;
    } else if(result1 < result2) {
      return p2.name;
    } else {
      return 'Tie';
    }
  }
  
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
   
  balloonAttack(p1, p2);