function compareInts(num1, num2) {
    return num1 - num2;
}

function solution(A) {
    var numUniques = 1;
    
    if (A.length === 0) return 0;
    
    A.sort(compareInts);
    
    for (let i = 1; i < A.length; i++) {
        if (A[i] !== A[i - 1]) numUniques++;    
    }
    
    return numUniques;
}
