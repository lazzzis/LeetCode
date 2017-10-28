#include <iostream>
#include <string>
#include <cstring>
#include <vector>
#include <cstdlib>
#include <cmath>
#include <queue>
#include <iomanip>
#include <algorithm>
#ifdef WINDOWS
#include <direct.h>
#define GetCurrentDir _getcwd
#else
#include <unistd.h>
#define GetCurrentDir getcwd
#endif

using namespace std;

#ifndef ONLINE_JUDGE
std::string GetCurrentWorkingDir( void ) {
  char buff[10000];
  GetCurrentDir( buff, 10000 );
  std::string current_working_dir(buff);
  return current_working_dir;
}
#endif

#define REP(i,n) for(int i = 0; i < (n); i++)
#define REPS(i,s,n) for(int i = (s); i < (n); i++)

const int MAXN = 1000 + 50;
int vis[MAXN];
int c[MAXN][MAXN];

bool dfs(int course, int numCourses) {
    vis[course] = -1;
    for (int i = 0; i < numCourses; i++) {
        if (!c[course][i]) continue;
        if (vis[i] < 0) return false;
        if (!vis[i] && !dfs(i, numCourses)) return false;
    }
    vis[course] = 1;
    return true;
}

bool canFinish(int numCourses, vector<pair<int, int>>& prerequisites) {
    memset(vis, 0, sizeof(vis));
    memset(c, 0, sizeof(c));
    for (auto dependencies : prerequisites) {
        c[dependencies.first][dependencies.second] = 1;
    }
    REP(i, numCourses) {
        if (!vis[i] && !dfs(i, numCourses)) return false;
    }
    return true;
}

int main(int argc, char const *argv[]) {
    #ifndef ONLINE_JUDGE
    // string cwd = GetCurrentWorkingDir() + "/test.in";
    // freopen(cwd.c_str(), "r", stdin);
    #endif
    vector<pair<int, int>> s{
        make_pair(1, 0),
        make_pair(0, 1),
        make_pair(2, 3),
        make_pair(3, 4)
    };
    cout << canFinish(3, s) << endl;
}
