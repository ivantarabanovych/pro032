function combineArrays(arr1, arr2, newElement){
    return [...arr1, ...arr2, ...newElement];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = combineArrays(arr1, arr2, 13);
console.log(newArray);
