/**
 * This function computes a number from fibonacci series given the index.
 * The index starts from 0.
 * It only works with positive indexes, ignores all below 0.
 *
 * Examples:
 *
 * fibonacci(0) // returns 1
 * fibonacci(2) // 2
 * fibonacci(4) // 4
 */
function fibonacci(index) {
    /*
     * uncomment the following line and devtools will stop here
     * and allow you to see what is going on
     */
    // debugger

    /*
     * first check if the index is really a number;
     * if it is not, the function will never finish and eventually crash
     */
    if (isNaN(index)) {
        throw new Error ('Index has to be a number.')
    }

    /*
     * We already know the answer for numbers below two.
     * The computation is not correct for negative indexes
     * but we ignore it on purpose.
     */
    if (index < 2) {
        return 1
    }

    /*
     * This is using the naive algorithm; it computes the same problem
     * multiple times and is extremely slow! Try calling fibonacci(40).
     * Can you come up with better solution?
     */
    // Recursion is when the function calls itself
    var indexMinusOne = fibonacci(index - 1)
    var indexMinusTwo = fibonacci(index-2)
    return indexMinusOne + indexMinusTwo
}

/**
 * This function computes if a given number is in the fibonacci series
 * and if yes, returns its index (starting with zero).
 * If the number is not in the series, returns -1.
 * Examples:
 * 
 * inversedFibonacci(2) // returns 2
 * inversedFibonacci(13) // 6
 * inversedFibonacci(165580141) // 40
 */
function inversedFibonacci(number) {
    var current = 2
    var previous = 1
    var penultimate = 1
    var index = 2

    // Iterate up until we have passed the requested number
    while ( current <= number) {
        if ( number === current ) {
            return index 
        }
        index ++
        current = previous + current 
        previous = previous + penultimate
        penultimate = current - previous

        // This code does exactly the same, but is written in a different way. Which do you prefer?
        /*
        penultimate = previous
        previous = current
        current = previous + penultimate
        */
        
    }

    /*
     * Now we know that `number` is not a member of the fibonacci series, because
     * if it were then the `return index` above would have returned it.
     * We also know that we tried all possible numbers because if there were some more options
     * then the `while` loop above would still be running.
     * So we can safely return -1.
     */
    return -1 

}
