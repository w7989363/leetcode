// 16 Array medium

#include <vector>
class Solution {
  public:
    int threeSumClosest(vector<int>& nums, int target) {
        if ( nums.size() < 3 ) {
            return 0;
        }
        sort( nums.begin(), nums.end() );
        int ret = nums[0] + nums[1] + nums[2];
        for ( size_t i = 0; i < nums.size() - 2; i++ ) {
            int front = i + 1;
            int end = nums.size() - 1;
            // 寻找有序数组两数和最接近t，采用两边收缩遍历法
            while ( end > front ) {
                int cur = nums[i] + nums[ front ] + nums[ end ];
                if(cur == target) return target;
                if ( abs(target-cur) < abs(target-ret) ) {
                    ret = cur;
                }
                if(cur > target){
                    end--;
                } else {
                    front++;
                }
            }
            // 跳过后面相同的nums[i]，防止重复
            while ( i + 1 < nums.size() && nums[ i + 1 ] == nums[ i ] ) {
                i++;
            }
        }
        return ret;
    }
};
