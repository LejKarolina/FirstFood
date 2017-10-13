
function getButton(value)
{
    console.log("Pressing button.", value)
    addNewItem(document.getElementById("foodForm").food.value, value) 
}

function addNewItem(foodName, value){
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth()
    var yy = today.getFullYear()
    var today = dd + "." + (mm + 1) + "." + yy 
    var ul = document.getElementById("theList")
    var newElement = document.createElement("li")
    newElement.appendChild(document.createTextNode(foodName + " " + value + " " + today))
    ul.appendChild(newElement)
    console.log("Adding new item.", foodName)
}

function handleFormSubmit(event) {
    event.preventDefault()
    var submittedForm = event.target
    var inputField = submittedForm.food
    var foodName = inputField.value
    console.log("foodName", foodName)
    // TODO zjistit co je napsane v policku
    // TODO zjistit ci positive nebo ne
    // addNewItem(foodName, )
}

// TODO poslouchat na form submit
var form = document.getElementById("foodForm")
form.addEventListener("submit", handleFormSubmit)

function x(a, b, c) {}
function y(b, a, c) {}

x(1, 2, 3) // a === 1
y(1, 2, 3) // a === 2

function sum (x, y) {
   var result = x + y;
return result
}

console.log(sum);

// 1 1 2 3 5 8 13 21 34

/**
 * This function calculation  
 */
function fibonacci(index) {
    debugger
    if (isNaN(index)) {
        throw new Error ('Index has to be a number.')
    }
    if (index < 2) {
        return 1
    }
    var indexMinusOne = fibonacci(index - 1)
    var indexMinusTwo = fibonacci(index-2)
    return indexMinusOne + indexMinusTwo
}

fibonacci('karel') // 34



function inversedFibonacci(number) {
        debugger
        var current = 2
        var previous = 1
        var penultimate = 1
        var index = 2

      

        while ( current < number) {
            if ( number === current ) {
                return index 
            }
            index ++
            current = previous + current 
            previous = previous + penultimate
            penultimate = current - previous

            // -------
/*
            penultimate = previous
            previous = current
            current = previous + penultimate
*/
            // ...
            
        }

        return 'out of fibonacci sequence'

}

