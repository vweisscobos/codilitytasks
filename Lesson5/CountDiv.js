function solution(A, B, K) {
    var div,
        cutOff;
    
    if (A === B) {
        if (A % K === 0) return 1;
        else return 0;
    }
    
    cutOff = Math.floor(A > 0 ? (A - 1) / K : 0);
    div = Math.floor(B / K) - cutOff;
    
    if (A === 0) div++;
    
    return div;
}

