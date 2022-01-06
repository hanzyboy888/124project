import keywords from './lexemes'

const lexicalAnalysis = (code) =>{
    const cleanedLinesOfCode = code.split("\n");
    let words = []
    for (let i = 0; i < cleanedLinesOfCode.length; i++){
        const wordArray = cleanedLinesOfCode[i].split(" ")
        for (let j = 0; j < wordArray.length; j++){
            words.push(wordArray[j])
        }
    }
    let lexemes = []
    let wordsHolder = ""
    let varAssignFlag = false
    let yarnAssignFlag = false
    let commentAssignFlag = false
    let arithFlag = false
    let anFlag = false
    let boolFlag = false
    let comparisonFlag = false
    let multCommentAssignFlag = false
    let boolLiteral = false


    for (let i = 0; i < words.length; i++){
        if (words[i] === "I" || words[i] === "\tI") {
            if (words[i+1] === "HAS" && words[i+2] === "A"){
                varAssignFlag = true
                wordsHolder = wordsHolder.concat(words[i], " ", words[i+1], " ", words[i+2])
                const object = {
                    label: wordsHolder, 
                    classification: "Variable Declaration"
                }
                lexemes.push(object)
                wordsHolder = ""
            }
        }
        if (words[i].charAt(0) === "\"" && !commentAssignFlag && !yarnAssignFlag){
            yarnAssignFlag = true
            if (words[i].length === 1){
                wordsHolder = wordsHolder.concat(words[i], " ")
                continue
            }
        }
        if (words[i] === "BTW"){
            const object = {
                label: words[i],
                classification: "Comment Delimiter"
            }
            lexemes.push(object)
            commentAssignFlag = true
        }
        if (words[i] === "SUM" || words[i] === "DIFF" || words[i] === "PRODUKT" || words[i] === "QUOSHUNT" || words[i] === "MOD" || words[i] === "BIGGR" || words[i] === "SMALLR") {
            if (words[i+1] === "OF"){
                arithFlag = true
                wordsHolder = wordsHolder.concat(words[i], " ", words[i+1])
                const object = {
                    label: wordsHolder, 
                    classification: "Arithmetic Operation"
                }
                lexemes.push(object)
                wordsHolder = ""
            }
        }
        if (words[i] === "AN"){
            const object = {
                label: words[i],
                classification: "Operand Separator"
            }
            lexemes.push(object)
            anFlag = true
        }
        if (words[i] === "BOTH" || words[i] === "EITHER" || words[i] === "WON" || words[i] === "ANY" || words[i] === "ALL") {
            if (words[i+1] === "OF"){
                boolFlag = true
                wordsHolder = wordsHolder.concat(words[i], " ", words[i+1])
                const object = {
                    label: wordsHolder, 
                    classification: "Boolean Operation"
                }
                lexemes.push(object)
                wordsHolder = ""
            }
        }
        if (words[i] === "BOTH") {
            if (words[i+1] === "SAEM"){
                comparisonFlag = true
                wordsHolder = wordsHolder.concat(words[i], " ", words[i+1])
                const object = {
                    label: wordsHolder, 
                    classification: "Comparison Operation"
                }
                lexemes.push(object)
                wordsHolder = ""
            }
        }
        if (words[i] === "OBTW"){
            const object = {
                label: words[i],
                classification: "Comment Delimiter"
            }
            lexemes.push(object)
            multCommentAssignFlag = true
        }
                
        if (!varAssignFlag && !yarnAssignFlag && !commentAssignFlag && !arithFlag && !anFlag && !boolFlag && !comparisonFlag && !multCommentAssignFlag && !boolLiteral) {
            if (words[i].charAt(0) === "\t"){
                words[i] = words[i].slice(1)
            }
            for (let j = 0; j < keywords.length; j++){
                let result = keywords[j].regex.test(words[i])
                if (result) {
                    const object = {
                        label: words[i], 
                        classification: keywords[j].classification
                    }
                    lexemes.push(object);
                    break
                }
            }
        }
        if (words[i] === "A" && varAssignFlag) {
            varAssignFlag = false
        }
        if (yarnAssignFlag) {
            wordsHolder = wordsHolder.concat(words[i], " ")
            if (words[i].charAt(words[i].length - 1) === "\"") {
                const object = {
                    label: wordsHolder, 
                    classification: "YARN Literal"
                }
                lexemes.push(object)
                wordsHolder = ""
                yarnAssignFlag = false
            }
        }
        if (commentAssignFlag && words[i] !== "BTW") {
            wordsHolder = wordsHolder.concat(words[i], " ")

            if (words[i+1]?.charAt(0) === "\t" || words[i+1] === "BTW") {

                const object = {
                    label: wordsHolder, 
                    classification: "Comment"
                }
                lexemes.push(object)
                wordsHolder = ""
                commentAssignFlag = false
            }
        }
        if (words[i] === "OF" && arithFlag) {
            arithFlag = false
        }
        if (words[i] === "AN" && anFlag) {
            anFlag = false
        }
        if (words[i] === "OF" && boolFlag) {
            boolFlag = false
        }
        if (words[i] === "SAEM" && comparisonFlag) {
            comparisonFlag = false
        }
        if (multCommentAssignFlag && words[i] !== "OBTW") {
            wordsHolder = wordsHolder.concat(words[i], " ")
            
            if (words[i+1] === "TLDR") {

                const object = {
                    label: wordsHolder, 
                    classification: "Comment"
                }
                lexemes.push(object)
                wordsHolder = ""
                multCommentAssignFlag = false
            }
        }
    }
    return lexemes
}

export default lexicalAnalysis