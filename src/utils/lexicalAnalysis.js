import keywords from './lexemes'

const lexicalAnalysis = (code) =>{
    const linesOfCode = code.split("\n");
    const cleanedLinesOfCode = linesOfCode.map((lineOfCode, index) => {
        if (index === linesOfCode.length - 1){
            return lineOfCode.trim()
        }
        return lineOfCode.slice(0, -1).trim()

    });
    let lexemes = []
    for (let i = 0; i < cleanedLinesOfCode.length; i++){
        for (let j = 0; j < keywords.length; j++){
            // const pattern = /keywords[j].regex/
            // console.log(pattern)
            // console.log(cleanedLinesOfCode[i], keywords[j].regex)
            let result = keywords[j].regex.test(cleanedLinesOfCode[i])
            if (result) {
                const object = {
                    lexeme: cleanedLinesOfCode[i], 
                    classification: keywords[j].classification
                }
                lexemes.push(object);
                // console.log("lexemes:", cleanedLinesOfCode[i], "classification:", keywords[j].classification)
            }
            // console.log(result)
        }
    }
    return lexemes
    

}

export default lexicalAnalysis