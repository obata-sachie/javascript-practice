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
test('べき乗の練習', () => {
  expect(3 ** 4).toBe(81); 
  expect(Math.pow(3, 4)).toBe(81); 
});
test('分割代入（配列）', () => {
  const array = [1,2,3]
  const [a,b,c] = array
  expect(a).toBe(1); 
  expect(b).toBe(2);
  expect(c).toBe(3); 
});
test('分割代入（オブジェクト）', () => {
  const obj = {
    "key1":"value1",
    "key2":"value2"
  };
  const {key1,key2} = obj;
  expect(key1).toBe("value1");
  expect(key2).toBe("value2");
  expect({key1,key2}).toStrictEqual(obj);
});

function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

test('三項演算子', () => {
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix("abc")).toBe("デフォルト:abc");
  expect(addPrefix("abc","カスタム:")).toBe("カスタム:abc");
});

test('暗黙的な型変換', () => {
  expect(Number.parseInt("10",10)).toBe(10);
  expect(Number.parseInt("10",10)).not.toBe("10");
  expect(Number.parseInt("10")).toBe(10);
  expect(Number.parseInt("10px")).toBe(10);
  expect(Number.parseFloat("3.14",10)).toBe(3.14);
  expect(Number.parseFloat("3.14",10)).not.toBe("3.14");
  expect(Number.parseFloat("3.14")).toBe(3.14);
  expect(Number.parseFloat("3.14px")).toBe(3.14);
  expect(Number.parseInt("3.99",10)).toBe(3);
  expect(Number.parseInt("AAA",10)).toBe(NaN);
  expect(Number.isNaN(Number.parseInt("AAA",10))).toBe(true);
});

