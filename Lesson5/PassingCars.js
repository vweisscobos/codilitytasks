function solution(A) {
    var count = 0;
    var pairs = 0;
    
    for (let i = 0; i < A.length; i++) {
        count += A[i];        
    }
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) pairs += count;
        else count--;
        
        if (pairs > 1000000000) return -1;
    }
    
    return pairs;
}
