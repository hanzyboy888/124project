import keywords from './lexemes'

const lexicalAnalysis = (code) =>{
    const linesOfCode = code.split("\n");
    const cleanedLinesOfCode = linesOfCode.map((lineOfCode, index) => {
        if (index === linesOfCode.length - 1){
            return lineOfCode.trim()
        }
        return lineOfCode.slice(0, -1).trim()
    })
    let words = []
    for (let i = 0; i < cleanedLinesOfCode.length; i++){
        // if cleanedLinesOfCode[]
        const wordArray = cleanedLinesOfCode[i].split(" ")
        for (let j = 0; j < wordArray.length; j++){
            words.push(wordArray[j])
        }
    }
    
    let lexemes = []
    let varAssignFlag = false
    let wordsHolder = ""
    for (let i = 0; i < words.length; i++){
        if (words[i] === "I") {
            if (words[i+1] === "HAS" && words[i+2] === "A"){
                varAssignFlag = true
                wordsHolder = wordsHolder.concat(words[i], " ", words[i+1], " ", words[i+2])
                const object = {
                    label: wordsHolder, 
                    classification: "Variable Declaration"
                }
                console.log(words[i], words[i+1], words[i+2], wordsHolder)
                lexemes.push(object)
            }
        }
        if (!varAssignFlag) {
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
    }
    return lexemes
}

export default lexicalAnalysis