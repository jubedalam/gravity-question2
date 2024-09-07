function twoSum(nums, target) {
    if (!Array.isArray(nums) || nums.length < 2) {
        throw new Error("Input array should have at least 2 elements");
    }
    const numMap = new Map();  
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];  
        }
        numMap.set(nums[i], i);
    }
    throw new Error("No two sum solution");
}
const nums = [2, 7, 11, 15];
const target = 9;
try {
    const result = twoSum(nums, target);
    console.log(result);  
} catch (error) {
    console.error(error.message);
}
