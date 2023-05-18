const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("プログラムコメントの練習", () => {
  // エラーになるため、実行させないようにコメントする。
  /*
  expect(sum(1, 2)).toBe(4);
  */
});
test("constの練習", () => {
  const bookTitle = "本";
  const bookPrice = "3000";
  expect(bookTitle).toBe("本");
  expect(bookPrice).toBe("3000");
});
test("letの練習", () => {
  let bookTitle;
  expect(bookTitle).toBe(undefined);

  let bookPrice = "3000";
  bookTitle = "本";
  expect(bookTitle).toBe("本");
  expect(bookPrice).toBe("3000");

  bookPrice = "5000";
  expect(bookPrice).toBe("5000");
});
test("console.logの練習", () => {
  const total = 42 + 42;
  console.log(total); // => 84

  const value = "値";
  console.log(value);
});
test("文字列の練習", () => {
  const str1 = "文字";
  const str2 = "文字";
  expect(str1).toBe(str2);
  expect(str1 === str2).toBe(true);
  const str3 = `あああ
いいい
ううう`;
  const str4 = "あああ\nいいい\nううう";
  expect(str3 === str4).toBe(true);

  const str5 = "これは${str1}です";
  const str6 = `これは${str1}です`;
  expect(str5).toBe("これは${str1}です");
  expect(str6).toBe("これは文字です");
});
test("オブジェクトの練習", () => {
  const object = {
    address: "東京",
    telephone: "00-0000-0000",
    age: 20,
    hasLicense: true,
    nested: { valuea: 1 },
  };
  expect(object.address).toBe("東京");
  expect(object["telephone"]).toBe("00-0000-0000");
  expect(object.age).toBe(20);
  expect(object.hasLicense).toBe(true);
  expect(object.nested.valuea).toBe(1);
});
test("配列の練習", () => {
  const array = ["いちご", 123, true, { age: 20, address: "東京" }];
  expect(array[0]).toBe("いちご");
  expect(array[1]).toBe(123);
  expect(array[2]).toBe(true);
  expect(array[3].age).toBe(20);
  expect(array[3].address).toBe("東京");
});
test("べき乗の練習", () => {
  expect(3 ** 4).toBe(81);
  expect(Math.pow(3, 4)).toBe(81);
});
test("分割代入（配列）", () => {
  const array = [1, 2, 3];
  const [a, b, c] = array;
  expect(a).toBe(1);
  expect(b).toBe(2);
  expect(c).toBe(3);
});
test("分割代入（オブジェクト）", () => {
  const obj = {
    key1: "value1",
    key2: "value2",
  };
  const { key1, key2 } = obj;
  expect(key1).toBe("value1");
  expect(key2).toBe("value2");
  expect({ key1, key2 }).toStrictEqual(obj);
});

function addPrefix(text, prefix) {
  // `prefix`が指定されていない場合は"デフォルト:"を付ける
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

test("三項演算子", () => {
  expect(typeof "文字列").toBe("string");
  expect(typeof undefined).toBe("undefined");
  expect(addPrefix("abc")).toBe("デフォルト:abc");
  expect(addPrefix("abc", "カスタム:")).toBe("カスタム:abc");
});

test("暗黙的な型変換", () => {
  expect(Number.parseInt("10", 10)).toBe(10);
  expect(Number.parseInt("10", 10)).not.toBe("10");
  expect(Number.parseInt("10")).toBe(10);
  expect(Number.parseInt("10px")).toBe(10);
  expect(Number.parseFloat("3.14", 10)).toBe(3.14);
  expect(Number.parseFloat("3.14", 10)).not.toBe("3.14");
  expect(Number.parseFloat("3.14")).toBe(3.14);
  expect(Number.parseFloat("3.14px")).toBe(3.14);
  expect(Number.parseInt("3.99", 10)).toBe(3);
  expect(Number.parseInt("AAA", 10)).toBe(NaN);
  expect(Number.isNaN(Number.parseInt("AAA", 10))).toBe(true);
});

test("functionの練習", () => {
  function double(num) {
    return num * 2;
  }
  expect(double(10)).toBe(20);
  function echo(x) {
    return x;
  }
  expect(echo(1)).toBe(1);
  expect(echo()).toBe(undefined);
});

test("デフォルト引数の練習", () => {
  function addPrefix2(text, prefix = "デフォルト:") {
    return prefix + text;
  }
  expect(addPrefix2("abc")).toBe("デフォルト:abc");
  expect(addPrefix2("abc", "カスタム:")).toBe("カスタム:abc");
});
test("functionとarrow functionの練習", () => {
  const a = function (x) {
    return x * x;
  };
  const b = (x) => {
    return x * x;
  };
  const c = (x) => x * x;
  expect(a(2)).toBe(4);
  expect(b(2)).toBe(4);
  expect(c(2)).toBe(4);
});
test("if/elseifの練習", () => {
  const a = function (version) {
    if (version === "ES5") {
      return "ECMAScript 5";
    } else if (version === "ES6") {
      return "ECMAScript 2015";
    } else if (version === "ES7") {
      return "ECMAScript 2016";
    }
    return "unknown";
  };
  expect(a("ES5")).toBe("ECMAScript 5");
  expect(a("ES6")).toBe("ECMAScript 2015");
  expect(a("ES7")).toBe("ECMAScript 2016");
  expect(a(3)).toBe("unknown");
});
test("elseの練習", () => {
  const a = function (year) {
    if (year % 4 === 0) {
      // 4で割り切れる
      if (year % 100 === 0) {
        // 100で割り切れる
        if (year % 400 === 0) {
          // 400で割り切れる
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  expect(a(2020)).toBe(true);
  expect(a(2023)).toBe(false);
  expect(a(2000)).toBe(true);
  expect(a(2100)).toBe(false);
});
test("elseの練習2", () => {
  const a = function (year) {
    if (year % 400 === 0) {
      // 400で割り切れる
      return true;
    } else if (year % 100 === 0) {
      // 100で割り切れる
      return false;
    } else if (year % 4 === 0) {
      // 4で割り切れる
      return true;
    } else {
      // それ以外
      return false;
    }
  };
  expect(a(2020)).toBe(true);
  expect(a(2023)).toBe(false);
  expect(a(2000)).toBe(true);
  expect(a(2100)).toBe(false);
});
test("switchの練習", () => {
  const a = function (version) {
    switch (version) {
      case "ES5":
        return "ECMAScript 5";
      case "ES6":
        return "ECMAScript 2015";
      case "ES7":
        return "ECMAScript 2016";
      default:
        return "unknown";
    }
  };
  expect(a("ES5")).toBe("ECMAScript 5");
  expect(a("ES6")).toBe("ECMAScript 2015");
  expect(a("ES7")).toBe("ECMAScript 2016");
  expect(a(3)).toBe("unknown");
});
test("switchの練習2", () => {
  const a = function (num) {
    switch (num % 4) {
      case 0:
        return "グー";
      case 1:
        return "チョキ";
      case 2:
        return "パー";
      case 3:
        return "あいこ";
    }
  };
  expect(a(0)).toBe("グー");
  expect(a(1)).toBe("チョキ");
  expect(a(2)).toBe("パー");
  expect(a(3)).toBe("あいこ");
  expect(a(4)).toBe("グー");
  expect(a(5)).toBe("チョキ");
});
test("繰り返し処理1", () => {
  function sum(max) {
    let total = 0;
    for (let i = 0; i < max; i++) {
      total += i + 1;
    }
    return total;
  }
  expect(sum(4)).toBe(10);
  expect(sum(10)).toBe(55);
});
test("繰り返し処理2", () => {
  function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  expect(sum([1])).toBe(1);
  expect(sum([])).toBe(0);
  expect(sum([1, 2, 3])).toBe(6);
});
test("break文", () => {
  function IsEvenIncluded(numbers) {
    let IsEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        IsEvenIncluded = true;
        break;
      }
    }
    return IsEvenIncluded;
  }
  expect(IsEvenIncluded([1])).toBe(false);
  expect(IsEvenIncluded([])).toBe(false);
  expect(IsEvenIncluded([1, 2, 3])).toBe(true);
});
test("breakからreturnの書き換え", () => {
  function IsEvenIncluded(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        IsEvenIncluded = true;
        return true;
      }
    }
    return false;
  }
  expect(IsEvenIncluded([1])).toBe(false);
  expect(IsEvenIncluded([])).toBe(false);
  expect(IsEvenIncluded([1, 2, 3])).toBe(true);
});
test("someとfilterの練習", () => {
  const array = [1, 2, 3, 4, 5];
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  expect(
    array.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(true);
  expect(
    array1.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(false);
  expect(
    array2.some((number) => {
      return number % 2 === 0;
    })
  ).toBe(true);

  expect(
    array.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([2, 4]);
  expect(
    array1.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([]);
  expect(
    array2.filter((number) => {
      return number % 2 === 0;
    })
  ).toStrictEqual([2, 4, 6, 8]);

  expect(
    array.filter((number) => {
      return number % 2 !== 0;
    })
  ).toStrictEqual([1, 3, 5]);
  expect(array.filter((number) => number % 2 !== 0)).toStrictEqual([1, 3, 5]);
});
