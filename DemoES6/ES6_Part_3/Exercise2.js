var remove_array_element = ((arr, n) => {
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == n)
        arr.splice(i, 1);
    }
    return arr;
});

const array = [2, 5, 9, 6];
console.log(remove_array_element(array, 5));
// direction2
var remove_array_element1 = ((n) => {
    let remove = array.filter((a, index, array) => a != n)
    return remove;
});
console.log(remove_array_element1(5));