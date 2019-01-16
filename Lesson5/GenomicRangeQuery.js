function solution(S, P, Q) {
    var lastA = [],
        lastC = [],
        lastG = [],
        lastT = [],
        impacts = [],
        values = new Map([["A",1],["C",2],["G",3],["T",4]]);
    
    //  String to array    
    S = [...S];
    
    //  Creates arrays to track the last indexes each element was found
    lastA[0] = S[0] === "A" ? 0 : -1;
    lastC[0] = S[0] === "C" ? 0 : -1;
    lastG[0] = S[0] === "G" ? 0 : -1;
    lastT[0] = S[0] === "T" ? 0 : -1;
        
    for (let i = 1; i < S.length; i++) {
      lastA[i] = S[i] === "A" ? i : lastA[i - 1];
      lastC[i] = S[i] === "C" ? i : lastC[i - 1];
      lastG[i] = S[i] === "G" ? i : lastG[i - 1];
      lastT[i] = S[i] === "T" ? i : lastT[i - 1];
    }
    
    for (let i = 0; i < P.length; i++) {
        let initial = P[i],
            final = Q[i];
            
        //  Test if the last element of each type is within the given substring
        if (lastA[final] >= initial) {
            impacts.push(values.get("A"));
        } else if (lastC[final] >= initial) {
            impacts.push(values.get("C"));
        } else if (lastG[final] >= initial) {
            impacts.push(values.get("G"));
        } else {
            impacts.push(values.get("T"));   
        }
    }
    
    return impacts;
}
