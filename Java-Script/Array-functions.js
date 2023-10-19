/////////////////////////////////   ARRAYS  ///////////////////////////////

let animals=[`tiger`,`lion`,`fox`,`deer`,`giraffe`,10]
console.log(animals)
console.log(animals.join())

let array=Array(10).fill('Nik')
console.log(array)

let food=[`Pizza`,`Burger`]
let joined_array=animals.concat(food)
console.log(joined_array)


animals.push("Zebra")
animals.push("Dino")
animals.push("lion")

animals.pop("Dino")
animals.pop("Zebra")

animals.unshift('nikhil')
animals.unshift('rahul')
animals.unshift('shiv')

animals.shift('nikhil')
animals.shift('rahul')
animals.shift('shiv')

console.log(animals[0],animals[7])

console.log(animals.indexOf('lion'))
console.log(animals.lastIndexOf('lion'))
console.log(animals.includes('lion'))

console.log(animals.reverse())
console.log(animals.length)

// The Methods Below Are Used to convert Array to Strings

console.log(animals.join())
console.log(animals.toString())
console.log(animals+'')

console.log(animals[2][2])

console.log(animals.slice(2,6))

console.log(animals.splice(0,3,'1','2','3'))

console.log(animals)