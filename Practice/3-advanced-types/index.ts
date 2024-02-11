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

const product: Audit & Product = { // In this aproach the object need to have all the properties of the two types, if not an error is shown.
    name: "Shampoo",
    created_at: "13/03/2024",
    modified_at: "13/03/2025"

}

// Literal Type

// A literal is a more concrete sub-type of a collective type. 
// What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.
// You can restrict what numbers can be declared, what strings are allowed, or spesify a objec structure with certain limited values.
type Fibonacci = 0 | 1 | 2 | 3 | 5
const numOfFibo: Fibonacci = 2

type ValidationSuccess = {
    isValid: true;
    reason: null;
}
type ValidationFailure = {
    isValid: false;
    reason: string;
}
type ValidationResult = ValidationSuccess | ValidationFailure;

// Nullable Type
// This is a way to work with null, undefined types.
function toNumber(s: string | null | undefined) {
    if (!s) {
        return 0
    }
    return parseInt(s)

}
const value = toNumber(null)