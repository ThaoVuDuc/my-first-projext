const getRandomNumber = (a) => {
    let sortRadom = a.sort(() => {return 0.5 - Math.random()});
    console.log(a[1]);
}

const arr = [1, 2, 3, 4, 5, 6];
getRandomNumber(arr);
//
