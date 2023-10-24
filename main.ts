const sum_char_codes = (n: string): number => {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
};
//Grown linier O(N)

const sum_char_codes_2 = (n: string): number => {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }
  return sum;
};
//Grown linier O(N), its not O(2n)

const sum_char_codes_3 = (n: string): number => {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);
    //Capital E
    if (charCode === 69) {
      return sum;
    }

    sum += charCode;
  }

  return sum;
};
//Grown linier O(N), its not O(2n)
