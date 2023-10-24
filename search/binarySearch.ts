function binarySearch(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;
  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else if (v < needle) {
      lo = m + 1;
    }
  } while (lo < hi);
  return false;
}

const testArr = [1, 2, 3, 4, 5];
console.log(binarySearch(testArr, 1));
console.log(binarySearch(testArr, 3));
console.log(binarySearch(testArr, 5));
console.log(binarySearch(testArr, 6));
