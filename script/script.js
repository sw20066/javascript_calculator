// ------------------- Setting Up Variables ------------------- //
var previousAnswers = [];
var currentInput = ""
var temp;
// ------------------- Basic Operators ------------------- //
var operators = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

// ------------------- Clear Operators ------------------- //

console.log(operators.plus(9, 9));
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
        currentInput = currentInput.substr(0, currentInput.length - 1);
        $("#display").val(currentInput)
        console.log("Backspacing")
    }
}


// ------------------- Special Operators ------------------- //

var special_operators = {
    convertToArray() {
        currentInput = currentInput.split(" ");
    },
    convertToInput() {
        currentInput = currentInput.join(" ")
        $("#display").val(currentInput)
    },
    convert() {
        this.convertToArray();
        currentInput[currentInput.length - 1] = ((currentInput[currentInput.length - 1])/100) * currentInput[currentInput.length - 3];
        console.log("converting...");
        this.convertToInput();
    },
    sqrt() {
        this.convertToArray();
        currentInput[currentInput.length - 1] = Math.sqrt(currentInput[currentInput.length - 1]);
        console.log("Square rooting...");
        this.convertToInput();
    },
    pow() {
        this.convertToArray();
        currentInput[currentInput.length - 1] = Math.pow(currentInput[currentInput.length - 1], 2);
        this.convertToInput();
    },
    pow3() {
        this.convertToArray();
        currentInput[currentInput.length - 1] = Math.pow(currentInput[currentInput.length - 1], 3);
        this.convertToInput();
    },
    reciprocal() {
        this.convertToArray();
        currentInput[currentInput.length - 1] = 1/(currentInput[currentInput.length - 1]);
        this.convertToInput();
    },
    plus_minus(){
        this.convertToArray();
        currentInput[currentInput.length - 1] = (currentInput[currentInput.length - 1]) * (-1);
        console.log("Square rooting...");
        this.convertToInput();
    }
}

// ------------------- Basic Operations ------------------- //


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

// -------------------   Event Handling Functions    ------------------- //
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
