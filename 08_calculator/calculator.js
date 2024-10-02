const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	if (nums.length == 0) {
    return 0;
  }
  
  return nums.reduce((total, cur) => {
    return total + cur;
  })
};

const multiply = function(nums) {
  if (nums.length == 0) {
    return 0;
  }

  return nums.reduce((total, cur) => {
    return total * cur;
  })
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
  while (a > 0) {
    total = total * a;
    a--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
