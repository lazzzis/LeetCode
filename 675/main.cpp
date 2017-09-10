#include <iostream>
#include <vector>
#include <queue>
#include <cstdlib>

using namespace std;

class Node {
public:
    int x, y, height;
    Node (int x, int y, int height) {
        this -> x = x;
        this -> y = y;
        this -> height = height;
    }
};

class Step {
public:
    int x, y, step;
    Step (int x, int y, int step) {
        this -> x = x;
        this -> y = y;
        this -> step = step;
    }
};

class Solution {
public:
    int cutOffTree(vector< vector<int> >& forest) {
        vector<Node> heights;
        for (int i = 0; i < forest.size(); i++)
            for (int j = 0; j < forest[i].size(); j++)
                if (forest[i][j] > 1)
                    heights.push_back(Node(i, j, forest[i][j]));
        sort(heights.begin(), heights.end(), [](Node &h1, Node &h2) {
            return h1.height < h2.height;
        });

        if (forest[0][0] == 0) return -1;

        int curx = 0, cury = 0, step = 0;
        for (std::vector<Node>::iterator it = heights.begin(); it != heights.end(); it ++) {
            int nstep = this -> bfs(curx, cury, it -> x, it -> y, forest);
            if (nstep == -1) {
                return -1;
            }
            step += nstep;
            curx = it -> x; cury = it -> y;
        }

        return step;
    }
private:
    int bfs (int startx, int starty, int endx, int endy, vector< vector<int> >& forest) {
        int dirs[4][2] = {
            {0, 1}, {1, 0}, {-1, 0}, {0, -1}
        };
        int h = forest.size(), w = forest[0].size();
        int vis[h + 5][w + 5];
        memset(vis, 0, sizeof(vis));

        queue<Step> q;
        q.push(Step(startx, starty, 0));
        vis[startx][starty] = 1;

        while (!q.empty()) {
            Step cur = q.front(); q.pop();
            if (cur.x == endx && cur.y == endy) {
                return cur.step;
            }
            for (int i = 0; i < 4; i ++) {
                int nx = cur.x + dirs[i][0], ny = cur.y + dirs[i][1];
                if (nx >= 0 && nx < h && ny >= 0 && ny < w && !vis[nx][ny]
                    && forest[nx][ny]) {
                    q.push(Step(nx, ny, cur.step + 1));
                    vis[nx][ny] = 1;
                }
            }
        }

        return -1;
    }
};

#ifdef LZS
int main() {
    Solution s;
    auto f = std::vector<std::vector<int> > {
        {0, 2, 3},
        {0, 0, 4},
        {7, 6, 5}
    };
    cout << s.cutOffTree(f) << endl;
    return 0;
}
#endif
