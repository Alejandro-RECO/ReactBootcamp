class Strategy {
  move(init){
    throw new Error('Method execute() must be implemented.');
  }
}

class Fly extends Strategy {
  move (viking) {
    return viking + 10
  }
}

class Walk extends Strategy {
  move(init) {
    return init + 1
  }
}

class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = null;
  }
  
  move() {
    if(this.moveBehavior){
      this.moveBehavior.move(this)
    }
  }
}