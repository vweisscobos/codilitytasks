function solution(S) {
    var openingStack = [];
    
    S = [...S];
    
    if (S.length % 2 !== 0) return 0;
    
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(") {
            openingStack.push("(");
            continue;
        }
        if (!openingStack.pop()) return 0;
    }
    
    if (openingStack.length === 0) return 1;
    else return 0;
}
