const Arr = [5, 10, 15, 20, 25, 30];
let increase10 = Arr.map((array, index, Arr) => {
    return array + 10;
});
console.log(Arr);
console.log(increase10);