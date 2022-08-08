car={
    color:"black",
    power(){
        return this.bhp
    }
    
}

car.color="green";
car.bhp=245

console.log(`car's power is ${car.power()} and it's color is ${car.color}`)

function warehouse(pears, apples){
    return pears+apples
}

console.log(`Summary of all apples and pears in the warehouse ${warehouse(145,54)}`)

function payterminal(name){
    if(name==="abc"){
        return `Hello ${name}`
    }else{
        return `There is no such user`
    }
}

console.log(payterminal("abc"))
console.log(payterminal("ab"))

function isPrime(num){
    let i = 2
    while (i*i<=num){
        if(num%i==0){
            return `${num} is not Prime`
        }else{
            i++
        }
    }
    return `${num} is Prime`
}

const random_numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 100)+1) //creates an array of 10, each of array's elements are randomly generated natural number(or 0)

for(let item of random_numbers){
    console.log(isPrime(item))
}
