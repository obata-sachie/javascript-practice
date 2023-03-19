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
test('文字列の練習', () => {
  const str1 = "文字";
  const str2 = '文字';
  expect(str1).toBe(str2); 
  expect(str1===str2).toBe(true); 
  const str3 = `あああ
いいい
ううう`;
  const str4 = "あああ\nいいい\nううう";
  expect(str3===str4).toBe(true); 

  const str5 = "これは${str1}です"; 
  const str6 = `これは${str1}です`; 
  expect(str5).toBe("これは${str1}です"); 
  expect(str6).toBe("これは文字です"); 
});
test('オブジェクトの練習', () => {
  const object={
    address:"東京",
    telephone:"00-0000-0000",
    age:20,
    hasLicense:true,
    nested:{valuea:1},
  };
  expect(object.address).toBe("東京"); 
  expect(object["telephone"]).toBe("00-0000-0000"); 
  expect(object.age).toBe(20);
  expect(object.hasLicense).toBe(true);
  expect(object.nested.valuea).toBe(1);
  });
  test('配列の練習', () => {
    const array = ["いちご",123,true,{age:20,address:"東京"}];
    expect(array[0]).toBe("いちご");
    expect(array[1]).toBe(123);
    expect(array[2]).toBe(true);
    expect(array[3].age).toBe(20);
    expect(array[3].address).toBe("東京"); 
    });