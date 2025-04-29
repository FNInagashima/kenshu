// 通常の記載方法
function fn(number) {
  return number * 2;
}

console.log('fn',fn(2));

// アローファンクションの記載方法
const fnArrow = number => {
  return number * 2;
};

console.log('fnArrow',fnArrow(2));


// filter mapの使い方
const arry = [10, 20, 30, 40];
const newArry = [];

// 2倍して50以上の配列だけ抽出　For文
for(let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if(val > 50) {
    newArry.push(arry[i] * 2)
  }
}

console.log(newArry);

// 2倍して50以上の配列だけ抽出　map filter

const newArry2 = arry.map(val => val * 2).filter(val => val > 50);
console.log(newArry2)