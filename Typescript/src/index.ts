let age = 123_456_789
let lang = "Typescript"
let isGood = true
let abc

abc = 1
abc = "s"

function xyz(doc: any) {
    console.log(doc)
}

let numbers: number[]=[]

let info: [number, string] = [1, 'Rahul'] // Tuple

// Enum
const enum Size {Small="6", Medium="8", Large="9"}
let mySize = Size.Medium
console.log(mySize)

// Functions - a func when doesn't return anything means it returns undefined
// Below are 2 ways to have optional parameters
function calcTax(income: number, year=2022): number {
    if(year < 2022)
        return income * 1.2
    return income * 1.3
}

console.log(calcTax(100))

function calcTax2(income: number, year?: number): number {  // ? used to make para optional
    if((year || 2022) < 2022)
        return income * 1.2
    return income * 1.3
}

console.log(calcTax2(100))

//Objects
type Emp = {    // Type alias
    id: number,
    name: string,
    // phone?: string // making prop optional
    readonly phone: string,
    retire: (date: Date) => void
}

let emp: Emp = {
    id: 1,
    name: "Rahul",
    phone: '',
    retire: (date: Date) => {
        console.log(date)
    }
}
// emp.phone = "2345" -> now this can't be done
console.log(emp)

// Union of para types
function kgToLbs(wgt: number | string) {
    // Narrowing
    if(typeof(wgt) === "number")
        return wgt*2.2
    return parseInt(wgt)*2.2
}

console.log(kgToLbs(10))
console.log(kgToLbs("10kgsdfdf"))   // will give o/p 22

// Intersection
type Draggable = {
    drag: () => void
}
type Resizeable = {
    resize: () => void
}

// type UIWidget = Resizeable & Draggable

let textBox: (Resizeable & Draggable) = {
    drag: () => {},
    resize: () => {}
}

// Literal type(for some particular values)
type Qty = 20 | 40 | 60

let qty: Qty = 20

type Metric = 'cm' | 'inch'
let met: Metric = "inch"


// Nullable type
function getName(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase())
    else
        console.log("Hola")
}

getName(undefined)

// Optional chaining operator ?. also applies to func calls
let log: any = null
console.log(log?.('abc'))   // undefined

