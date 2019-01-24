function solution(N) {
    var min = 2 * (1 + N),
        i = 1;
    
    while (i * i <= N) {
        let testedPer;
    
        if (N % i === 0) {
            testedPer = 2 * (i + N / i);
            min = testedPer < min ? testedPer : min;
        };
        
        i++;
    }
    
    return min;
}
