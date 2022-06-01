const array = [0,4,6,-9,9,12,3,54,7,2,-4,3,8,-5,99,0,4,6,-9,9,12,3,54,7,2,-4,3,8,-5,99];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }
    return array;
}

console.log(bubbleSort(array));
console.log('array length = ', array.length);
console.log('count = ', count);

