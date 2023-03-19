const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('プログラムコメントの練習', () => {
  // エラーになるため、実行させないようにコメントする。
  /*
  expect(sum(1, 2)).toBe(4);
  */
});
test('constの練習', () => {
  const bookTitle = "本";
  const bookPrice = "3000";
  expect(bookTitle).toBe("本"); 
  expect(bookPrice).toBe("3000"); 
});
test('letの練習', () => {
  let bookTitle;
  expect(bookTitle).toBe(undefined); 
  let bookPrice = "3000";
  bookTitle="本";
  expect(bookTitle).toBe("本"); 
  expect(bookPrice).toBe("3000"); 
  bookPrice = "5000";
  expect(bookPrice).toBe("5000"); 
});
test('console.logの練習', () => {
const total=42+42;
console.log(total); // => 84
const value = "値";
console.log(value); 
});
