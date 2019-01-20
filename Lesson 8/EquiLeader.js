function solution(A) {
    var lastStack = [],
        counter = 0,
        leaderCount = [];
    
    for (let i = 0; i < A.length; i++) {
        lastStack.push(A[i]);
        
        if (lastStack.length > 2) {
            if (lastStack[lastStack.length - 1] !== lastStack[lastStack.length - 2]) {
                lastStack.pop();
                lastStack.pop();
            }
        }    
    }
    
    leader = lastStack[lastStack.length - 1];
    
    if (A[0] === leader) leaderCount[0] = 1;
    else leaderCount[0] = 0;
    
    for (let i = 1; i < A.length; i++) {
        if (A[i] === leader) leaderCount[i] = leaderCount[i - 1] + 1;
        else leaderCount[i] = leaderCount[i - 1];
    }
    
    for (let i = 0; i < leaderCount.length - 1; i++) {
        let sizeLeft = i + 1;
        let left = (leaderCount[i] / sizeLeft) > 0.5;
        let right = ((leaderCount[leaderCount.length - 1] - leaderCount[i]) / (leaderCount.length - sizeLeft )) > 0.5;
        if (left && right) counter++;    
    }
    
    return counter;
}
