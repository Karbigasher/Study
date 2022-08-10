//1
try{
    console.log (a)
    let a = 3
}catch{
    console.log('let must be declared before use')
}

//2
try{
    const b = 1/0
    if(b==Infinity){
        throw new Error("cannot be divided by zero")
    }
}catch(err){
    console.log(err.message)
}