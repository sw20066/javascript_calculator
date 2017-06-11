// ------------------- Setting Up Variables ------------------- //
var previousAnswers = [];
var currentInput = ""
var temp;
// ------------------- Setting Up Functions ------------------- //
var operators = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}
var clear_operators = {
    clearAll: () => {
        currentInput = "";
        $("#display").val(currentInput)
    },
    clearCurrent: () => {
        currentInput = currentInput.split(" ");
        currentInput.pop();
        currentInput = currentInput.join(" ") + " ";
        $("#display").val(currentInput)
    },
    backSpace: () => {
        console.log("Backspacing")
    }
}
var special_operators = {
    convert: () => {
        console.log("converting...");
    },
    sqrt: () => {
        console.log("Square rooting...");
    },
    pow: () => {
        console.log("Power")
    },
    pow3: () => {
        console.log("UNLIMITED POWER");
    },
    reciprocal: () => {
        console.log("Reciporocal");
    }, 
    decimal: () => {
        console.log("Decimal Operator");
    }
}
var calculateAnswer = () => {
    var calculatingOps = (operator) => {
        temp = currentInput.splice(i - 1, 3);
        temp = operators[operator](parseFloat(temp[0]), parseFloat(temp[2]));
        currentInput.unshift(temp);
        i = i - 2;
    }
    for (var i = 0; i < currentInput.length; i++) {
        switch (currentInput[i]) {
            case "+":
                calculatingOps("plus");
                break;
            case "-":
                calculatingOps("minus");
                break;
            case "x":
                calculatingOps("multiply");
                break;
            case "/":
                calculatingOps("divide");
        }
    }
    $("#display").val(temp);
    currentInput = "" + temp;
};
// -------------------   Core Functions    ------------------- //
$("button").click(function () {
    if ($(this).hasClass("number")) {
        currentInput += $(this).val();
        $("#display").val(currentInput);
    } else if ($(this).hasClass("basic-operators")) {
        currentInput += ` ${$(this).val()} `
        $("#display").val(currentInput);
    } else if ($(this).hasClass("equal")) {
        currentInput = currentInput.split(" ");
        calculateAnswer()
    } else if ($(this).hasClass("clearing-operators")) {
        clear_operators[$(this).val()]();
    } else if ($(this).hasClass("special-operators")) {
        special_operators[$(this).val()]();
    }
});
