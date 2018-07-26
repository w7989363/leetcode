// 1 Array easy

#include <vector>
using namespace std;
class Solution {
  public:
    vector<int> twoSum( vector<int> &nums, int target ) {
        vector<int> ret;
        map<int, int> m;
        map<int, int>::iterator it;
        for ( size_t i = 0; i < nums.size(); i++ ) {
            int x = target - nums[ i ];
            it = m.find( x );
            if ( it != m.end() ) {
                ret.push_back( i );
                ret.push_back( it->second );
                return ret;
            }
            m[ nums[ i ] ] = i;
        }
    }
};
