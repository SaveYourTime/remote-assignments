// Assignment 1: Function and Array

/* 
  find the ​max number​ of passing numbers
  with array.sort()
*/
function max(...numbers) {
  let maxNumber;
  numbers.sort();
  maxNumber = numbers[numbers.length - 1];
  return maxNumber;
}
max(1, 2, 4, 5);
max(5, 2, 7, 1, 6);

/* 
  find the ​max number​ of passing numbers
  with array.forEach()
*/
function max2(...numbers) {
  let maxNumber;
  numbers.forEach((number, index) => {
    if (index === 0 || number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
}
max2(1, 2, 4, 5);
max2(5, 2, 7, 1, 6);

// Assignment 2: Object

function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

// way1
const testCalculate1 = {
  "op": "+",
  "n1": 20,
  "n2": 30
}
calculate(testCalculate1);

// way2
class Calculate {
  constructor(op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
  }
}
const testCalculate2 = new Calculate("-", 50, 30);
calculate(testCalculate2);

// Assignment 3: Function, Array, and Object

function avg(data) {
  let totalPrice = 0;
  let averagePrice;
  const { size, products } = data;
  products.forEach(({ price }) => {
    totalPrice += price;
  });
  averagePrice = totalPrice / size;
  return averagePrice;
}

avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }]
});

// Assignment 5: Algorithm Practice (Advanced Optional)

function twoSum(nums, target) {
  let indicesOfTwoSum;
  nums.some((firstNum, index) => {
    const restNums = nums.slice(index + 1);
    const isFound = restNums.some((secondNum, secondIndex) => {
      if (firstNum + secondNum === target) {
        indicesOfTwoSum = [index, index + secondIndex + 1];
        return true;
      }
    });
    return isFound;
  });
  return indicesOfTwoSum;
}