

function compare(num1, num2) {
    return num1 - num2;
}

function solution(A) {
    var nums = [],
        prod = 1,            
        pos = [],
        neg = [];
    
    A.sort(compare);
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) neg.push(A[i]);
        if (A[i] > 0) pos.push(A[i]);
    }

    if (pos.length <= 1 && neg.length <= 1) return 0;
    
    if ((pos.length === 1 || pos.length === 2) && neg.length > 1) {
        return neg[0] * neg[1] * pos[pos.length -1];
    }
    
    if (pos.length > 2 && neg.length > 1) {
        let a = neg[0] * neg[1] * pos[pos.length -1],
            b = pos[pos.length - 1] * pos[pos.length - 2] * pos[pos.length - 3]

        if (a > b) return a;
        return b;
    }
    
    for (let i = A.length - 1; i > A.length - 4; i--) {
        let n = A[i];
        
        prod *= n;
    }

    return prod;
}

