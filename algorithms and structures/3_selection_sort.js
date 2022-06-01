const array = [0,4,6,-9,9,12,3,54,7,2,-4,3,8,-5,99,0,4,6,-9,9,12,3,54,7,2,-4,3,8,-5,99];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

console.log(selectionSort(array));
console.log('array length = ', array.length);
console.log('count = ', count);

