class Animal{
    X=0
    Y=0
    name=""
    constructor(name){
        this.name=name
    }
    move(differenceX,differenceY){
        this.X+=differenceX
        this.Y+=differenceY
    }
}

class Cat extends Animal{
    constructor(name){
        super(name)
    }
}

const cat = new Cat("Micke")
cat.move(-4,6)
cat.move(45,6)
console.log(cat)
