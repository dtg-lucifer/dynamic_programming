function isPalindrome(x: number): boolean {

    const stringX = x.toString();

    if (x < 0) return false;
    if (stringX.split("").every(n => n === stringX[0])) return true;

    for(let i = 0; i < stringX.length; i++) {
        if(stringX[i] === stringX[stringX.length - (i + 1)]) continue;
        else return false;
    }

    return true;
};