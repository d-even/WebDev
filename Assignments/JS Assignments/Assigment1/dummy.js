




let arr12 = [4,6,7,5,7,9,5]
let CountNo = arr12.reduce((check, num)=>{
    check[num] = (check[num] || 0) + 1;

    return check;
}, {})
console.log(CountNo)