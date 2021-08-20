module.exports = function reverse (n) {
    n = Math.abs(n)
    a=n.toString().split('').reverse().join('')
    return a;

    /* n>=0*/
    /*? +(`${n}`.split('').reverse().join(''))
    : -(`${n}`.split('').reverse().join(''))
    return n;
    */

    /*let n1 = 0;
        for ( n; n; n = Math.floor(n/10)){
            n1 *= 10;
            n1 += n % 10;
        }  
        console.log(n1);
        */
}
