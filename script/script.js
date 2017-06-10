var currAcc = 0;
var previousAnswer = false;
var currentMathOp = [];

var operators = {
    plus: (a,b) => a + b,
    minus: (a,b) => a - b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a * b;
}

$("button").click(function(){
    if($(this).hasClass("number")){
        if(currentMathOp.length === 0 || currentMathOp.length === 2){
            currentMathOp.push($(this).val())
        }else if(currentMathOp.length === 1){
            currentMathOp[0] === $(this).val()
        }
    }else if($(this).hasClass("basic-operators") & currentMathOp.length === 1){
        currentMathOp.push($(this).val())
    }else if($(this).hasClass("equal") && currentMathOp === 2){
        calculate()
    }

})


calculate () => {
    switch currentMathOp[1]
        case "plus"
}



//            switch(operator){
//            case "plus":
//                operators.plus(curre)

//       alert($(this).hasClass("basic-operators"));

//  accumulator += Number($(this).val());
//    $("#display").val(accumulator);
