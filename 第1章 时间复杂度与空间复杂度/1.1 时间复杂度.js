var persons = [
  {
    name: "xxx",
    age: 13,
  },
  {
    name: "yyy",
    age: 14,
  },
];

for (let i = 0, n = persons.length; i < n; i++) {
  if (persons[i].name === "gumi") {
    console.log(persons[i].age);
    break;
  }
}

/**
 * 在计算机科学中，度量方法被称为“大O”表示法
 * 按最复杂的情况来判定它的量级
 */

/**
 * 算法是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令
 */

/**
 * （1）计算程序中每条语句的执行次数，并相加，得到语句的总执行次数，即语句频度或时间频度，
 *  记为T（n）。
 * （2）用常数1取代T（n）中所有加法常数。
 * （3）只保留T（n）中的最高阶项。
 * （4）如果最高阶项存在且不是1，则去掉这个项相乘的常数。
 */

// 高斯算法
function add(n) {
  let sum = 0; // 执行1次
  sum = ((1 + n) * n) / 2; // 执行1次
  console.log(sum); // 执行1次
} // 时间复杂度为O（1）

/**
 * 常见的数量级别：
 * 常数阶O（1）、线性阶O（n）、对数阶O（logn）、线性对数阶O（nlogn）、
 * 平方阶O（n2）、立方阶O（n3）、k方阶O（nK）、指数阶O（2N）、阶乘阶O（n！）
 */

// 线性阶
let a = 0,
  b = 1;
for (let i = 0; i < n; i++) {
  s = a + b;
  b = a;
  a = s;
}

// 对数阶
var number = 1;
// log2n
while (number < n) {
  number = number * 2;
}

// 平方阶
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 复杂度为O（1）的算法
  }
}

// 立方阶
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      // 复杂度为O（1）的算法
    }
  }
}

// 指数阶
// 斐波那契数列
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
