function addNewItem(foodName, positive) {
    console.log("Adding new item!", foodName, positive)
}

function handleFormSubmit(event) {
    event.preventDefault()
    var submittedForm = event.target
    var inputField = submittedForm.food
    var foodName = inputField.value
    console.log("foodName", foodName)
    // TODO zjistit co je napsane v policku
    // TODO zjistit ci positive nebo ne
    addNewItem(foodName, positive)
}

// TODO poslouchat na form submit
var form = document.getElementById("foodForm")
form.addEventListener("submit", handleFormSubmit)
