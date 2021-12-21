import keywords from './lexemes'

const lexicalAnalysis = (code) =>{
    const linesOfCode = code.split("\n");
    const cleanedLinesOfCode = linesOfCode.map((lineOfCode, index) => {
        if (index === linesOfCode.length - 1){
            return lineOfCode.trim()
        }
        return lineOfCode.slice(0, -1).trim()
    })
    //iterate
    //split on spaces
    //trim
    let words = []
    for (let i = 0; i < cleanedLinesOfCode.length; i++){
        const wordArray = cleanedLinesOfCode[i].split(" ")
        for (let j = 0; j < wordArray.length; j++){
            words.push(wordArray[j])   
        }
    }
    
    let lexemes = []
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < keywords.length; j++){
            // const pattern = /keywords[j].regex/
            // console.log(pattern)
            // console.log(cleanedLinesOfCode[i], keywords[j].regex)
            let result = keywords[j].regex.test(words[i])
            if (result) {
                const object = {
                    lexeme: words[i], 
                    classification: keywords[j].classification
                }
                lexemes.push(object);
                break
                // console.log("lexemes:", cleanedLinesOfCode[i], "classification:", keywords[j].classification)
            }
            // console.log(result)
        }
    }
    return lexemes
    

}

export default lexicalAnalysis