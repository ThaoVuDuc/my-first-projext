var arr = [NaN, 0, 16, false, -21,'""', undefined, 45, null];
let checkInteger = arr.filter((A, index, arr) => Number.isInteger(A));
let removeElement = checkInteger.filter((i, index) => Math.sign(i) != 0);
console.log(removeElement);
//
var removeEle = ((Arr) => {
    for(let i = 0; i < Arr.length; i++)
    {
        if(Number.isNaN(Arr[i])==true || Number.isInteger(Arr[i]) == false || Math.sign(Arr[i])==0)
        Arr.splice(i,1);
    }
    return Arr;
});

console.log(removeEle(arr));