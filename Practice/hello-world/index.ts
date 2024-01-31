const foo: number = 22

let favotiteMeal: string = "meat stew"
let timeCooking: number = 60
let isCooked: boolean = true

let uninitializedVar

uninitializedVar = 999
uninitializedVar = "Can asign any value type"

function concatenate(favotiteMeal: string, timeCooking: number, isCooked: boolean): string {
    return `The ${favotiteMeal} have ${timeCooking} minutes in cooking, and it is ${(isCooked) ? "done" : "not done"}`
}

// ARRAYS

let stringArr: string[] = ["cow", "fox", "cat", "lion"]
let undefinedArr: number[] = [2, 453, 192, 1002]
let objectArr: Array<object> = [{}]

// TUPLES

// Only allows two values in the array, and need to be initialized in order, or an error is given. 
let tuple: [number, string[]] = [2, ["meat stew", "chiken stew", "pork stew"]]

// ENUMS

//Pascal Case
enum Size {
    S, M, L, XL
}

const personSize = Size.M

//Note: Good practice to asign const to enums,when compile generate an efficient code in Js.
const enum LoadinState {
    Idle, Loading, Success, error
}

const actualStatus = LoadinState.Success

// OBJECTS

const implicitObj = { id: 1, name: "José Luis" } // Implicit types

implicitObj.id = 22
implicitObj.name = "Jr. José Luis"
//Nmote: Is not possible add dinamically properties, initiallizing the property is needed
//implicitObj.foo = "foo"

const explicitObj: {
    readonly id: number, // Read only property, it cannot be modified
    name: string,
    size: Size //Using the previous declared Enum
} = {
    id: 22,
    name: "Sr. José Luis",
    size: Size.XL
}

// Using types
type Address = {
    number: number,
    street: string,
    country: string
}
type Person = {
    readonly id: number,
    name: string,
    size: Size
    address: Address
}

// This aproach are more cleaner, and the utility is efficient.
const objType: Person = {
    id: 22,
    name: "Sr. José Luis",
    size: Size.XL,
    address: {
        country: "Spain",
        street: "Street Albert Einstein",
        number: 14
    }
}

// Its possible create an array of Person

const personObj: Person[] = [objType, objType]

// FUNCTIONS

// Arrow functions, it's accepted parameters and return type.
const fn: (msg: string) => string = (msg: string) => {
    let str: string = msg
    if (!str) {
        return str
    }
    return str
}
// Normal functions.
function func(msg: string): string {
    let str: string = msg
    if (str) {
        return str
    }
    return str
}

// NEVER

// never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns
function UserError(): never {
    throw new Error("user error")
}

// ADVANCED TYPES

// Union Type

let score: number | string = 98

score = 'Hello, World!'


type Animal = {
    readonly id: number,
    status: string
}

type User = {
    readonly id: number,
    name: string
}

let animal: User | Animal = { id: 1, status: '', name: '' } // in this aproach you can combine 'n' types in one

function sumTwo(n: number | string): number {
    if (typeof n === 'string') {
        return parseInt(n) + 2
    }
    return n + 2
}

console.log(sumTwo(3))
console.log(sumTwo('3'))


// Intersection type

type Audit = {
    created_at: string
    modified_at: string
}

type Product = {
    name: string
}

const product: Audit & Product = { // In this aproach the object need to have all the properties of the two types.
    name: "Shampoo",
    created_at: "13/03/2024",
    modified_at: "13/03/2025"

} 