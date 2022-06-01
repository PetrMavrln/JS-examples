const array = [0,4,6,-9,9,12,3,54,7,2,-4,3,8,-5,99,0,4,6,-9,9,12,3,54,7,2,-4,3,8,-5,99];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let lesseer = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        count +=1;
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            lesseer.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(lesseer), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));
console.log('array length = ', array.length);
console.log('count = ', count);

