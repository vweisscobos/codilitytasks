function solution(S) {
    var openStack = [];
    
    S = [...S];
    
    if (S.length === 0) return 1;
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "{" || S[i] === "[" || S[i] === "(") {
            openStack.push(S[i]);
        } else if (matchNester(openStack[openStack.length - 1], S[i])) {
            openStack.pop();
        } else {
            return 0;
        }
    }
    
    if (openStack.length === 0) return 1;
    else return 0;
}

function matchNester(n1, n2) {
   switch (n1) {
        case "{":
            return n2 === "}";
        case "[":
            return n2 === "]";
        case "(":
            return n2 === ")";
        default:
            return false;
    }    
}
