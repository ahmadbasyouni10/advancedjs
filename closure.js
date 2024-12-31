// lexical scope is how variable names are resolved in nested funcs

// Nested (child) functions have access to the scope of their parent functions

// Confused with closure, but lexical scope is only part of closure

/*
let x = 1 

const parentfunc = () => {
    let y = 2
    console.log(x)
    console.log(y)

    const childfunc = () => {
        console.log(x+=2)
        console.log(y+=2)
    }
    childfunc()
    console.log(y)
}

parentfunc()
console.log(x)
*/

// This nested function has access to the global scope and parent function scope
// Updated original value persisted
// child function has closure of parent function scope (has access to it)
// this still doesnt define closure though

// Closure is a function having access to the parent scope even after
// parent function has closed
// A closure is created when we define a function not when func is executed
// boundaries are set


// This is closure because inner function able to change y
// after parentfunc2 is done
const parentfunc2 = () => {
    let y = 2

    const childfunc = () => {
        y += 1
        console.log(y)
    }
    return childfunc
}

fn = parentfunc2()
fn()
fn()
fn()
// console.log(y) this gives error because the y is defined in func
// private variable accessed through child function only


// Immediately Invoked Function Expression (IIFE)
const privateCounter = (() => {
    let count = 0
    console.log(`initial values ${count}`);
    return () => { count += 1; console.log(count)}
})();


