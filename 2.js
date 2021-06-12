const reverseArr = (n) => {
  let result = [];
  for (let i = n.length; i >= 0; i--) {
    result.push(n[i]);
  }
  console.log(result);
};
reverseArr([19, 22, 3, 28, 26, 17, 18, 4, 28, 0]);
