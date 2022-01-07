const symbolTable = (lexemes) => {

    let symbolTable = {}
    let outputs = ""

    for (let i = 0; i < lexemes.length; i++){
        if (lexemes[i].classification === "Variable Declaration"){
            symbolTable[lexemes[i + 1].label] = lexemes[i + 3].label;
            i += 3
        }
        else if (lexemes[i].classification === "Output Keyword"){
            let output = "";
            i++
            for (; i < lexemes.length; i++) {   
                const clsf = lexemes[i].classification;
                if (clsf === "YARN Literal") {
                    output += lexemes[i].label.slice(1, -2);
                } else if (["NUMBR Literal", "NUMBAR Literal", ].includes(clsf)) {
                    output += lexemes[i].label;
                } else if (clsf === "Variable Identifier"){
                    output += symbolTable[lexemes[i].label]
                } else {
                    break;
                }
            }
            i--;
            symbolTable["IT"] = output;
            outputs += output + "\n"
        }
    }
    console.log(symbolTable)
    return [symbolTable, outputs]
}

export default symbolTable