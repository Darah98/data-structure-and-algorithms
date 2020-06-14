function multiBracketValidation(input) {
    let countObj = { openRound: 0, closeRound: 0, openSquare: 0, closeSquare: 0, openCurly: 0, closeCurly: 0 };
    let resultR;
    let resultS;
    let resultC;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '(') {
            countObj.openRound += 1;
        } else if (input[i] == ')') {
            countObj.closeRound += 1;
        } else if (input[i] == '[') {
            countObj.openSquare += 1;
        } else if (input[i] == ']') {
            countObj.closeSquare += 1;
        } else if (input[i] == '{') {
            countObj.openCurly += 1;
        } else if (input[i] == '}') {
            countObj.closeCurly += 1;
        }
    }
    if (countObj.openRound === countObj.closeRound) {
        resultR = true;
    } else {
        resultR = false;
    }
    if (countObj.openSquare === countObj.closeSquare) {
        resultS = true;
    } else {
        resultS = false;
    }
    if (countObj.openCurly === countObj.closeCurly) {
        resultC = true;
    } else {
        resultC = false;
    }

    if (resultR && resultS && resultC) {
        return true;
    } else {
        return false;
    }
}
multiBracketValidation("()]}")