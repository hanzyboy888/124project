const symbolTable = (lexemes) => {

    let symbolTable = {}
    let visibleFlag = false
    let visibleArray = []
    let outputs = ""
    
    
    for (let i = 0; i < lexemes.length; i++){
        /* if (visibleFlag === true){
            visibleArray.push({
                value: lexemes[i].label,
                classification: lexemes[i].classification
            })
            for(let x = 0; x < visibleArray.length; x++){
                for(let y = 0; y < symbolTable.length; y++){
                    if(visibleArray[x].value === symbolTable[y].identifier){
                        visibleArray[x].value = symbolTable[y].value
                    }
                }
            }
            for(let a = 0; a < visibleArray.length; a++){
                if(visibleArray[a].classification === "YARN Literal"){
                    visibleArray[a].value = visibleArray[a].value.slice(1, -1)
                    console.log(visibleArray[a].value)
                }
            }
            
            if(lexemes[i].classification === "Code Delimiter" || lexemes[i].classification === "Comment Delimiter" || lexemes[i].classification === "Variable Declaration" || lexemes[i].classification === "Variable Assignment" || lexemes[i].classification === "Arithmetic Operation" || lexemes[i].classification === "Boolean Operation" || lexemes[i].classification === "Boolean Infinite Arity Operation" || lexemes[i].classification === "Comparison Operation" || lexemes[i].classification === "Concatenation" || lexemes[i].classification === "Typecast" || lexemes[i].classification === "Input Keyword" || lexemes[i].classification === "Output Keyword" || lexemes[i].classification === "If Operator" || lexemes[i].classification === "Switch Operator" || lexemes[i].classification === "Variable Identifier" || lexemes[i].classification === "Function Identifier" || lexemes[i].classification === "Loop Identifier" || lexemes[i].classification === "Operand Separator"){
                let temp = ""
                visibleFlag = false
                for(let j = 0; j < visibleArray.length; j++){
                    temp = temp.concat(visibleArray[j].value)
                }
                symbolTable.push({
                    identifier: "VISIBLE",
                    value: temp
                })
                temp = ""
            }
        } */

        if (lexemes[i].classification === "Variable Declaration"){
            symbolTable[lexemes[i + 1].label] = lexemes[i + 3].label;
            /* symbolTable.push({
                identifier: lexemes[i+1].label,
                value: lexemes[i+3].label
            }) */
            i += 3
        }
        else if (lexemes[i].classification === "Output Keyword"){
            // visibleFlag = true
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
    return [symbolTable, outputs]
}

export default symbolTable