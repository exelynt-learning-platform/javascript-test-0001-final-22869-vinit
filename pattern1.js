
/* Print the top half of the hollow diamond (including the middle line) */
for(let i = 0; i < 5; i++) {
    let str = '';  /* Initialize empty string for each row */
    
    /* Add leading spaces to center the diamond */
    /* Number of spaces decreases as we go down (5-i spaces) */
    for(let j = 0; j < 5 - i; j++) str += ' ';
    
    /* Print the hollow part of the diamond for current row */
    /* Number of characters increases by 2 each row (i*2+1) */
    for(let k = 0; k < i * 2 + 1; k++) {
        /* Print '*' only at the first and last position of each row */
        /* This creates the hollow effect */
        if(k === 0 || k === i * 2) str += '*';
        else str += ' ';  /* Fill middle with spaces for hollow effect */
    }
    console.log(str);  /* Print the current row */
}

/* Print the bottom half of the hollow diamond (excluding the middle line) */
for(let i = 3; i >= 0; i--) {
    let str = '';  /* Initialize empty string for each row */
    
    /* Add leading spaces (same pattern as top half) */
    for(let j = 0; j < 5 - i; j++) str += ' ';
    
    /* Print the hollow part for the bottom half */
    /* Number of characters decreases as we go down */
    for(let k = 0; k < i * 2 + 1; k++) {
        /* Print '*' only at the edges to maintain hollow pattern */
        if(k === 0 || k === i * 2) str += '*';
        else str += ' ';  /* Fill middle with spaces */
    }
    console.log(str);  /* Print the current row */
}
