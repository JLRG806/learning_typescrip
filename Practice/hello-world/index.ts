const foo: number = 22

enum Sizes {
    s, m, l
}

console.log(foo)

console.log(Sizes)

let favotiteMeal: string = "meat stew"
let timeCooking: number = 60
let isCooked: boolean = true

let uninitializedVar

uninitializedVar = 999
uninitializedVar = "Can asign any value type"

function concatenate(favotiteMeal: string, timeCooking: number, isCooked: boolean): string {
    return `The ${favotiteMeal} have ${timeCooking} minutes in cooking, and it is ${(isCooked) ? "done" : "not done"}`
}

let stringArr: string[] = ["cow", "fox", "cat", "lion"]
let undefinedArr: number[] = [2,453,192,1002]
let objectArr: Array<object> =[{}]