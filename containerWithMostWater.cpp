// 11 Array medium

#include <vector>
class Solution {
  public:
    int maxArea( vector<int> &height ) {
        int i = 0, j = height.size() - 1;
        int m = 0;
        while ( j > i ) {
            m = max( m, min( height[ i ], height[ j ] ) * ( j - i ) );
            if ( height[ i ] < height[ j ] ) {
                i++;
            } else {
                j--;
            }
        }
        return m;
    }
};
