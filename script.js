
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
