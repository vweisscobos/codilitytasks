function solution(A) {
    var leaderStack = [],
        counter = 0,
        leader; 
        
    for (let i = 0; i < A.length; i++) {
        leaderStack.push(A[i]);
        
        if (leaderStack.length > 2) {
            if (leaderStack[leaderStack.length - 1] !== leaderStack[leaderStack.length - 2]) {
                leaderStack.pop();
                leaderStack.pop();
            }
        }
    }
    
    leader = leaderStack[leaderStack.length - 1];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] === leader) counter++;
    }
    
    if (!(counter > A.length / 2)) return -1;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] === leader) return i;
    }
}
