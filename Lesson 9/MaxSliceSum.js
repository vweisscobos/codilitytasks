function solution(A) {
    var maxEnding = maxSlice = 0,
        maxElement;
        
    maxElement = A[0];
    for (let i = 0; i < A.length; i++) {
        if (A[i] > maxElement) maxElement = A[i];
        maxEnding = Math.max(0, maxEnding + A[i]);
        maxSlice = Math.max(maxEnding, maxSlice);
    }
    
    if (maxSlice === 0) return maxElement;
    return maxSlice;
}
