// 15 Array medium

#include <vector>
class Solution {
  public:
    vector<vector<int>> threeSum( vector<int> &nums ) {
        vector<vector<int>> ret;
        if ( nums.size() < 3 ) {
            return ret;
        }
        sort( nums.begin(), nums.end() );
        for ( size_t i = 0; i < nums.size() - 2; i++ ) {
            int target = -nums[ i ];
            int front = i + 1;
            int end = nums.size() - 1;
            // 寻找有序数组两数和为target，采用两边收缩遍历法
            while ( end > front ) {
                int sum = nums[ front ] + nums[ end ];
                if ( sum < target ) {
                    front++;
                } else if ( sum > target ) {
                    end--;
                } else {
                    vector<int> triplet( 3 );
                    triplet[ 0 ] = nums[ i ];
                    triplet[ 1 ] = nums[ front ];
                    triplet[ 2 ] = nums[ end ];
                    ret.push_back( triplet );

                    // 因为不要重复的三元组，所以找到一个正确答案后往里收缩时应该去掉重复值
                    // 两边都收缩到更改了值为止
                    while ( front < end && nums[ front ] == triplet[ 1 ] ) {
                        front++;
                    }
                    while ( front < end && nums[ end ] == triplet[ 2 ] ) {
                        end--;
                    }
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
