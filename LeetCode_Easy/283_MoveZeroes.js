var moveZeroes = function(nums) {
  for(let i = nums.length;i>-1;i--){
      if(nums[i]===0){
          nums.splice(i,1)
          nums.push(0);
      }
  }
};