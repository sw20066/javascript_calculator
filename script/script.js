// ------------------- Setting Up Variables ------------------- //
var previousAnswer = [];
var currentInput = ""
var temp = 0;
// ------------------- Setting Up Functions ------------------- //
var operators = {
        plus: (a, b) => a + b
        , minus: (a, b) => a - b
        , divide: (a, b) => a / b
        , multiply: (a, b) => a * b
    }
    // -------------------   Core Functions    ------------------- //
$("button").click(function () {
    if ($(this).hasClass("number")) {
        currentInput += $(this).val();
        $("#display").val(currentInput);
    }
    else if ($(this).hasClass("basic-operators")) {
        currentInput += ` ${$(this).val()} `
        $("#display").val(currentInput);
    }
    else if ($(this).hasClass("equal")) {
        currentInput = currentInput.split(" ");
        calculateAnswer()
    }
    else if ($(this).hasClass("clear-operations")) {
        if ($(this).val() === "clearAll") {
            currentInput = [];
            $("#display").val(currentInput)
        };
    }
});
var calculateAnswer = () => {
    var calculatingOps = (operator) => {
        temp = currentInput.splice(i - 1, 3);
        temp = operators[operator](parseFloat(temp[0]), parseFloat(temp[2]));
        currentInput.unshift(temp);
        i = i - 2;
    }
    for (var i = 0; i < currentInput.length; i++) {
        if (currentInput[i] === "+") {
            calculatingOps("plus")
        }
        else if (currentInput[i] === "-") {
            calculatingOps("minus")
        }
        else if (currentInput[i] === "x") {
            calculatingOps("multiply")
        }
        else if (currentInput[i] === "/") {
            calculatingOps("divide")
        }
    }
    $("#display").val(temp);
    currentInput = "" + temp;
};