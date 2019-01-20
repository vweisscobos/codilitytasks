function solution(H) {
    var blocks = [],
        counter = 0,
        i = 0;
    
    while (i < H.length) {
        if (blocks.length === 0) {
            blocks.push(H[i]);
            i++;
        } else if (H[i] === blocks[blocks.length - 1]) {
            i++;
        } else if (H[i] < blocks[blocks.length - 1]) {
            blocks.pop();
            counter++;
        } else if (H[i] > blocks[blocks.length - 1]) {
            blocks.push(H[i]);
            i++;
        }
    }
    
    counter += blocks.length;
    
    return counter;
}

