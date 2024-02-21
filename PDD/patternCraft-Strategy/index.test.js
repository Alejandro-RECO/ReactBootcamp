const {Viking, Fly} = require('./index.js')

describe('Strategy', ()=>{
  it('Walk move', ()=>{
    const viking = new Viking();

    viking.move();
    expect(viking.position).toBe(1)
    viking.move();
    expect(viking.position).toBe(2)
  });


  it('Fly move', ()=>{
    const viking = new Viking();
    viking.moveBehavior = new Fly();

    viking.move();
    expect(viking.position).toBe(10)
    
    viking.move();
    expect(viking.position).toBe(20)
  })

  it('Mix move', ()=>{
    
    const viking = new Viking();
    
    viking.move();
    expect(viking.position).toBe(1)
    
    viking.moveBehavior = new Fly();
    viking.move();
    expect(viking.position).toBe(11)
  })
});