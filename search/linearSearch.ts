function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}

const testArr = [1, 2, 3, 4, 5];
console.log(linearSearch(testArr, 5));
console.log(linearSearch(testArr, 1));
console.log(linearSearch(testArr, 6));
