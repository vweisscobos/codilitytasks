function solution(N) {
    var counter = 0,
        i = 1;
    
    while (i * i <= N) {
        if (i * i === N) {
            counter++;    
        } else if (N % i === 0) {
            counter += 2;
        }
        
        i++;
    }
    
    return counter;
}
