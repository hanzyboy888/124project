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
    // console.log(words)
    let lexemes = []
    let varAssignFlag = false
    let wordsHolder = ""
    let yarnAssignFlag = false
    let commentAssignFlag = false
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
        if (words[i].charAt(0) === "\"" && !commentAssignFlag){
            yarnAssignFlag = true
        }
        if (words[i] === "BTW"){
            const object = {
                label: words[i],
                classification: "Comment Delimiter"
            }
            lexemes.push(object)
            commentAssignFlag = true
        }


        
        if (!varAssignFlag && !yarnAssignFlag && !commentAssignFlag) {
            if (words[i].charAt(0) === "\t"){
                words[i] = words[i].slice(1)
            }
            console.log(words[i])
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
            
            if (words[i+1]?.charAt(0) === "\t") {
                console.log(words[i])

                const object = {
                    label: wordsHolder, 
                    classification: "Comment"
                }
                lexemes.push(object)
                wordsHolder = ""
                commentAssignFlag = false
            }
        }
    }
    return lexemes
}

export default lexicalAnalysis