typesInJS = {
    string: "Hello",
    number: 245,
    bool: true
}

console.log("addition:")

for (let item in typesInJS) {
    for (let subitem in typesInJS) {
        if (item === subitem) {
            continue
        }
        console.log(`result of addition between ${item} and ${subitem} is ${typesInJS[item] + typesInJS[subitem]}`)
    }
}

console.log("multiplication:")

for (let item in typesInJS) {
    for (let subitem in typesInJS) {
        if (item === subitem) {
            continue
        }
        console.log(`result of multiplication between ${item} and ${subitem} is ${typesInJS[item] * typesInJS[subitem]}`)
    }
}

console.log("division:")

for (let item in typesInJS) {
    for (let subitem in typesInJS) {
        if (item === subitem) {
            continue
        }
        console.log(`result of division between ${item} and ${subitem} is ${typesInJS[item] / typesInJS[subitem]}`)
    }
}

console.log("Type conversion:")

for (let item in typesInJS) {
    if (item !== "string") {
        console.log(`result of conversion from ${item} to String is ${String(typesInJS[item])}`)
    }
    if (item !== "number") {
        console.log(`result of conversion from ${item} to Number is ${Number(typesInJS[item])}`)
    }
    if (item !== "bool") {
        console.log(`result of conversion from ${item} to Boolean is ${Boolean(typesInJS[item])}`)
    }
}
