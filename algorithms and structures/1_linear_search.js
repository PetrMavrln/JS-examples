const array = [1,2,4,2,6,2,82,9,1,455,0];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i <= array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 0));
console.log('count = ', count);