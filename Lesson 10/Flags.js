function solution(A) {
    var peaks = [];
        
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);
    }
    
    if (peaks.length === 0) return 0;
    if (peaks.length === 1) return 1;
    
    for (let i = peaks.length; i > 0; i--) {
        let counter = 1,
            lastSet = peaks[0];
        
        if ((peaks[peaks.length - 1] - peaks[0]) / (i - 1) < i) continue;
       
        for (let j = 1; j < peaks.length; j++) {
            if (peaks[j] - lastSet >= i) {
                counter++;
                lastSet = peaks[j];
            }
        }
                
        if (counter >= i) return i;
    }
}
