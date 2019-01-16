function solution(N, A) {
    var array = new Array(N).fill(0);
    var max = 0;
    var min = 0;
        
    function increase(index) {
        if (array[index - 1] < min) array[index - 1] = min + 1;
        else array[index - 1] += 1;
        
        if (array[index - 1] > max) max = array[index - 1];
    }
    
    function maxCounter() {
        min = max;    
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) increase(A[i]);
        else maxCounter();
    }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) array[i] = min; 
    }
    
    return array;
}

