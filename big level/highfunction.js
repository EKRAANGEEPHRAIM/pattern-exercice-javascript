function multiply(number){
    return function numberMul(factor){
        return number * factor
    }
}


let double = multiply(2);
console.log(double(5))//10

//
const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
});