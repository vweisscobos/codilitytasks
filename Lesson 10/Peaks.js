function solution(A) {
    var i = 1,
        factors = [],
        lastPeak = [-1],
        maxBlocks = 1;
    
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) lastPeak.push(i);
        else lastPeak.push(lastPeak[i - 1]);
    }

    if (lastPeak[lastPeak.length - 1] === -1) return 0;    
    
    while (i * i <= A.length) {
        if (A.length % i === 0) {
            factors.push(i);
            factors.push(A.length / i);
        }
        
        i++;
    }
    
    if (factors.length === 1) return 1;
    else factors.sort((n1, n2) => { return n1 - n2});
    
    for (let i = factors.length - 1; i >= 0; i--) {
        let increment = A.length/factors[i],
            blocks = 0;
        
        for (let j = increment - 1; j < A.length; j += increment) {
            if (lastPeak[j] <= j && lastPeak[j] >= (j - increment + 1)) {
                blocks++;        
            }
        }
        
        if (blocks === factors[i]) return blocks;        
    }
}
