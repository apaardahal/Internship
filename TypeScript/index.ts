
// Basic Types

let company: string = 'Apaar'
let isHappy: boolean = true
let x: any = 'Hello'

// Array Types  
let ids: number[] = [1,2,3,4,5,6,7,8,]
let arr: any[] = [1, 'Apaar', true]

// Tuple
let person: [number, string, boolean] = [1, 'Apaar', true]

// Tuple Array Types
let employee: [number, string] []
employee = [
    [1, 'Apaar'],
    [2, 'Dahal']
]

// Union Types
let id: string | number 
id = '22'

// Enums Types
enum Direction1 {
    up,
    Down,
    Left,
    Right
}

console.log(Direction1.up)

// Object Types
const user: {
    id: number,
    name:string
} = {
    id: 1,
    name: 'Aoaar'
}

// Type Assertion Types
let cid: any = 1
let customerId = <number>cid

// Functions
function addNum(x: number, y:  number): number{
    return x+y
}

console.log(addNum(1, 2))

// Return nothing. Void
function log(message: string | number): void {
    console.log(message)
}

// Intefaces
interface UserInterface {
    id: number
    name: string
    age?: number // ? is an optional argument
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}

// Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const brad = new Person(1, 'Apaar')

// Access Modifiers
//Public, Private and Protected

// Generics

function getArray(items: any[]): any {
    return new Array().concat(items)
}

let numArray = getArray([1,2,3])
let strArray = getArray(['a', 'b', 'c', 'd', 'e', 'f'])

numArray.push('abcd')