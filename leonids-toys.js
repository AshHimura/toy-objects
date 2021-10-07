const vgConsoles = [
    {
        id: 1,
        name: "Xbox Series X",
        operatingSystem: "Xbox OS",
        price: 549,
        weight: 9.8,
        style: "Halo"
    },
    { 
        id: 2,
        name: "Playstation 5",
        operatingSystem: "Unknown/Proprietary",
        price: 399,
        weight: 9.9,
        style: "Digital"
    },
    {
        id: 3,
        name: "Nintendo Switch",
        operatingSystem: "Unknown/Proprietary",
        price: 299,
        weight: 0.88,
        style: "Animal Crossing"
    }
]


//console.log(toys)

//console name display
/*for (const toy of toys){
    console.log(`This "toy" is actually known as the ${toy.name}!`)
}*/

//name price for specific console
/* for (const toy of toys){
    console.log(`The ${toy.style} edition of the ${toy.name} originally cost $${toy.price}!`)
} */

//raise price by 5%
/* for (const vgConsole of vgConsoles) {
    console.log(`The original price of the ${vgConsole.name} was $${vgConsole.price}.
    However! The new price is now: $${(vgConsole.price * 0.05) + vgConsole.price}!
    `)
} */

// const vgConsoleToFind = 4

// find specific vg console
/* for (const vgConsole of vgConsoles) {
    if (vgConsole.id === vgConsoleToFind) {
        console.log(`The original price of the ${vgConsole.name} was $${vgConsole.price}.
        However! The new price is now: $${(vgConsole.price * 0.05) + vgConsole.price}!
        `)
    }
} */

const addvgConsoleToInventory = (vgConsoleObject) => {
    const lastIndex = vgConsoles.length -1
    const currentLastVGConsole = vgConsoles[lastIndex]
    const maxID = currentLastVGConsole.id
    const idForNewVGConsole = maxID + 1
    
    vgConsoleObject.id = idForNewVGConsole
    vgConsoles.push(vgConsoleObject)
}


//vgConsoles.push(sonyMobile)
//vgConsoles.push(dream)

//Define new vg consoles
const sonyMobile = {
    name: "Sony PSP",
    maker: "Sony",
    operatingSystem: "Unknown/Proprietary",
    price: 199,
    weight: 0.62,
    style: "Star Wars"
}

const dream = {
    name: "Sega Dreamcast",
    operatingSystem: "Windows CE",
    price: 199,
    weight: 3.3,
    style: "Hello Kitty"
}

addvgConsoleToInventory(sonyMobile)
addvgConsoleToInventory(dream)

for (const vgConsole of vgConsoles){
    console.log(`The ${vgConsole.style} edition of the ${vgConsole.name} originally cost $${vgConsole.price}!
    Since you're curious, it also apparently weighs ${vgConsole.weight} pounds. Who knew?

    `)
}

console.log(vgConsoles)