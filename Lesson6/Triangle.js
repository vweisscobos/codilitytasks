function compare(num1, num2) {
    return num1 - num2;
}

function solution(A) {
    A.sort(compare);    
    
    if (A.length === 0 || A.length < 3) return 0;
    
    for (let i = 0; i < A.length - 2; i++) {
        if (!(A[i] + A[i + 1] > A[i + 2])) continue;
        if (!(A[i + 1] + A[i + 2] > A[i])) continue;
        if (A[i + 2] + A[i] > A[i + 1]) return 1;
    }
    
    return 0;
}

