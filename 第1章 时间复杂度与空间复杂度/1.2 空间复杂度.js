/**
 * （1）存储算法本身所占用的存储空间
 * （2）算法的输入输出数据所占用的存储空间
 * （3）在运行过程中临时占用的存储空间
 */

// 两数之和
// 暴力枚举
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target - nums[i] === nums[j]) {
        return [i, j];
      }
    }
  }
  console.log("No two sum solution");
};

// 散列表
var twoSumByMap = function (nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  console.log("No two sum solution");
};
