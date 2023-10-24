//Big o of bubbleSort is O(n^2)
function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

const testArr = [84, 13, 15, 13, 22, 1, 2, 4];
bubbleSort(testArr);
console.log(testArr);
