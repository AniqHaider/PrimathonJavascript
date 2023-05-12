let number = 4359449;

const num = (n) => {
  for (i = 2; i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
};

console.log(num(number));
