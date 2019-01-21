function solution(A) {
    var maxEnding = maxSlice = 0,
        diff = [],
        maxElement;
    
    if (A.length === 0) return 0;
    
    for (let i = 1; i < A.length; i++) {
        diff.push(A[i] - A[i - 1]);    
    }

    maxElement = diff[0];
    for (let i = 0; i < diff.length; i++) {
        if (diff[i] > maxElement) maxElement = diff[i];
        maxEnding = Math.max(0, maxEnding + diff[i]);
        maxSlice = Math.max(maxSlice, maxEnding);
    }
    
    return maxSlice;
}
