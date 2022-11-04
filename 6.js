function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
 
let arr = [ 2, 4, 6, 5, 7, 34, 45, 567];
 
if (hasDuplicates(arr)) {
    console.log("true");
}
else {
    console.log("false");
}