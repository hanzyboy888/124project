const keywords = [
    {element: 'HAI', regex: /^HAI$/, classification: 'Code Delimiter'},
    {element: 'KTHXBYE', regex: /^KTHXBYE$/, classification: 'Code Delimiter'},
    {element: 'BTW', regex: /^BTW$/, classification: 'Comment Delimiter'},
    {element: 'OBTW', regex: /^OBTW$/, classification: 'Comment Delimiter'},
    {element: 'TLDR', regex: /^TLDR$/, classification: 'Comment Delimiter'},
    {element: 'I HAS A', regex: /^I HAS A$/, classification: 'Variable Declaration'},
    {element: 'ITZ', regex: /^ITZ$/, classification: 'Variable Assignment'},
    {element: 'R', regex: /^R$/, classification: 'Variable Assignment'},
    {element: 'SUM OF', regex: /^SUM OF$/, classification: 'Arithmetic Operation'},
    {element: 'DIFF OF', regex: /^DIFF OF$/, classification: 'Arithmetic Operation'},
    {element: 'PRODUKT OF', regex: /^PRODUKT OF$/, classification: 'Arithmetic Operation'},
    {element: 'QUOSHUNT OF', regex: /^QUOSHUNT OF$/, classification: 'Arithmetic Operation'},
    {element: 'MOD OF', regex: /^MOD OF$/, classification: 'Arithmetic Operation'},
    {element: 'BIGGR OF', regex: /^BIGGR OF$/, classification: 'Arithmetic Operation'},
    {element: 'SMALLR OF', regex: /^SMALLR OF$/, classification: 'Arithmetic Operation'},
    {element: 'BOTH OF', regex: /^BOTH OF$/, classification: 'Boolean Operation'},
    {element: 'EITHER OF', regex: /^EITHER OF$/, classification: 'Boolean Operation'},
    {element: 'WON OF', regex: /^WON OF$/, classification: 'Boolean Operation'},
    {element: 'NOT', regex: /^NOT$/, classification: 'Boolean Operation'},
    {element: 'ANY OF', regex: /^ANY OF$/, classification: 'Boolean Infinite Arity Operation'},
    {element: 'ALL OF', regex: /^ALL OF$/, classification: 'Boolean Infinite Arity Operation'},
    {element: 'BOTH SAEM', regex: /^BOTH SAEM$/, classification: 'Comparison Operation'},
    {element: 'DIFFRINT', regex: /^DIFFRINT$/, classification: 'Comparison Operation'},
    {element: 'SMOOSH', regex: /^SMOOSH$/, classification: 'Concatenation'},
    {element: 'MAEK', regex: /^MAEK$/, classification: 'Typecast'},
    {element: 'A', regex: /^A$/, classification: 'Typecast'},
    {element: 'IS NOW A', regex: /^IS NOW A$/, classification: 'Typecast'},
    {element: 'VISIBLE', regex: /^VISIBLE$/, classification: 'Output Keyword'},
    {element: 'GIMMEH', regex: /^GIMMEH$/, classification: 'Input Keyword'},
    {element: 'O RLY?', regex: /^O RLY\?$/, classification: 'If Operator'},
    {element: 'YA RLY', regex: /^YA RLY$/, classification: 'If Operator'},
    {element: 'MEBBE', regex: /^MEBBE$/, classification: 'If Operator'},
    {element: 'NO WAI', regex: /^NO WAI$/, classification: 'If Operator'},
    {element: 'OIC', regex: /^OIC$/, classification: 'If Operator'},
    {element: 'WTF?', regex: /^WTF\?$/, classification: 'Switch Operator'},
    {element: 'OMGWTF', regex: /^OMGWTF$/, classification: 'Switch Operator'},
    {element: 'Variable Identifier', regex: /[a-zA-Z]+([a-zA-Z0-9\_])*/, classification: 'Variable Identifier'},
    {element: 'Function Identifier', regex: /[a-zA-Z]+([a-zA-Z0-9\_])*/, classification: 'Function Identifier'},
    {element: 'Loop Identifier', regex: /[a-zA-Z]+([a-zA-Z0-9\_])*/, classification: 'Loop Identifier'},
    {element: 'NUMBR Literal', regex: /^[-]?\d+$/, classification: 'NUMBR Literal'},
    {element: 'NUMBAR Literal', regex: /(-[1-9])? | [0-9]*\.[0-9]*/, classification: 'NUMBAR Literal'},
    {element: 'YARN Literal', regex: /^\"([a-zA-Z0-9] | [^a-zA-Z0-9] | :[\"$ | >$ | o$ | :$ |)$])*\"$/, classification: 'YARN Literal'},
    {element: 'TROOF Literal', regex: /(^WIN$ | ^FAIL$)/, classification: 'TROOF Literal'},
    {element: 'TYPE Literal', regex: /(^NOOB$ | NUMBAR$ | ^NUMBR$ | ^YARN$ | ^TROOF$ | ^TYPE$)/, classification: 'TYPE Literal'},

]

export default keywords