const threeSum = function(nums) {
    // sort the array
    nums = nums.sort((a, b) => a - b);

    let result = [];
    // iterate through the array and use two pointers to find the sum
    for (let i = 0; i < nums.length; i += 1) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
            }
            else if (sum < 0) {
                left += 1;
            }
            else {
                right -= 1;
            }
        }
        // skip duplicates
        while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
            i += 1;
        }
    }

    // initialize set to remove duplicate 
    const set = new Set(result.map(JSON.stringify));
    // final output array
    const output = (new Array(...set).map(JSON.parse));
    return output;
};


module.exports = threeSum;

