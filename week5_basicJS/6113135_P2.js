class Jedi{
    constructor(){
      this.forceIsDark = false;
    }
    say(){
        console.log('"Hello, OB1"')
    }
    force(){
      return (this.forceIsDark ? 'Join' : 'Fear is the path to') + ' the dark side'
    }
  }
  
  class Sith extends Jedi{
    constructor(){
      super()
      this.forceIsDark = true;
    }
    say(){
        console.log('"Yes, Master"')
    }
  }
  
  let yoda = new Jedi();
  let darth = new Sith();
  
  yoda.say()
  darth.say()

  console.log(yoda.forceIsDark)
  console.log(darth.forceIsDark)
  
  console.log(yoda.force())
  console.log(darth.force())

