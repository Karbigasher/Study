class Animal_classs{
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

class Cat_class extends Animal_classs{
    constructor(name){
        super(name)
    }
}

const cat_cl = new Cat_class("Micke")
cat_cl.move(-4,6)
cat_cl.move(45,6)
console.log(cat_cl)

let Animal_obj={
    X:0,
    Y:0,
    move(diffX,diffY){
        this.X+=diffX
        this.Y+=diffY
    }
}

let Cat_obj={
    name:"Micke"
}

Cat_obj.__proto__=Animal_obj

Cat_obj.move(45,44)
console.log(Cat_obj)