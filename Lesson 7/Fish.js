function solution(A, B) {
    var surv = [],
        last,
        i = 0;
    
    while (i < A.length) {
        last = surv[surv.length - 1];
        
        if (!last || last.direction - B[i] === -1 || last.direction - B[i] === 0) {
            surv.push({ direction: B[i], size: A[i] });
            i++;
            continue;
        }
        
        if (last.direction - B[i] === 1 && last.size < A[i]) {
            surv.pop();
            continue
        }
        
        i++;    
    }
    
    return surv.length;
}
