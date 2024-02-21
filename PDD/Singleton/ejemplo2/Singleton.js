class Singleton{
  constructor(){
    if(Singleton.instance){
      return Singleton.instance
    }

    this.value = Math.random(100)
    Singleton.instance = this
    Object.freeze(this)
  }

  getValue(){return this.value}

  static getInstance(){
    if(!Singleton.instance){
      Singleton.instance = new Singleton();
    }
    return Singleton.instance
  }
}

const singletonIntance = new Singleton();

export default singletonIntance;