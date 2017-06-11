// ------------------- Setting Up Variables ------------------- //

var previousAnswer = [];
var currentInput = []
var temp = 0;

// ------------------- Setting Up Functions ------------------- //


var plus = (a, b) => a + b;
var minus = (a, b) => a - b;
var divide = (a, b) => a / b;
var multiply = (a, b) => a * b;


// -------------------   Core Functions    ------------------- //



$("button").click(function () {
    if ($(this).hasClass("number") || $(this).hasClass("basic-operators")) {
        currentInput.push($(this).val());
        $("#display").val(currentInput.join(" "))
    }
    else if ($(this).hasClass("equal")) {
        calculateAnswer()
    }
});
var calculateAnswer = () => {
    for (var i = 0; i < currentInput.length; i++) {
        if (currentInput[i] === "+") {
            temp = parseFloat(currentInput[i - 1]) + parseFloat(currentInput[i + 1])
            currentInput[i + 1] = temp;
        }
    }
    $("#display").val(temp);
    currentInput = [temp];
};



