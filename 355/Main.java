import java.util.*;

public class DesignTwitter355 {
    class Twitter {

        HashMap<Integer, HashSet<Integer>> followingMap;
        HashMap<Integer, LinkedList<Integer>> tweetMap;
        HashMap<Integer, Integer> tweetIds;

        /** Initialize your data structure here. */
        public Twitter() {
            this.followingMap = new HashMap<>();
            this.tweetMap = new HashMap<>();
            this.tweetIds = new HashMap<>();
        }

        /** Compose a new tweet. */
        public void postTweet(int userId, int tweetId) {
            if (this.tweetIds.containsKey(tweetId)) {
                return;
            }
            LinkedList<Integer> posts
                    = this.tweetMap.getOrDefault(userId, new LinkedList<Integer>());
            posts.addFirst(tweetId);
            this.tweetMap.put(userId, posts);
            this.tweetIds.put(tweetId, this.tweetIds.size());
        }

        /** Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. */
        public List<Integer> getNewsFeed(int userId) {
            HashSet<Integer> followings = this.followingMap.getOrDefault(userId, new HashSet<>());
            PriorityQueue<LinkedList<Integer>> pq
                    = new PriorityQueue<>(
                    followings.size() + 1,
                    (x, y) -> this.tweetIds.get(y.getFirst()) - this.tweetIds.get(x.getFirst())
            );
            followings = new HashSet<>(followings);
            followings.add(userId);
            for (int followee : followings) {
                LinkedList<Integer> list = this.tweetMap.getOrDefault(followee, new LinkedList<>());
                if (list.size() == 0) {
                    continue;
                }
                pq.offer(new LinkedList<>(list));
            }
            LinkedList<Integer> news = new LinkedList<>();
            for (int i = 0; i < 10 && !pq.isEmpty(); i++) {
                LinkedList<Integer> recentest = pq.poll();

                news.add(recentest.pollFirst());
                if (recentest.size() != 0) {
                    pq.offer(recentest);
                }
            }
            return news;
        }

        /** Follower follows a followee. If the operation is invalid, it should be a no-op. */
        public void follow(int followerId, int followeeId) {
            HashSet<Integer> followings
                    = this.followingMap.getOrDefault(followerId, new HashSet<>());
            followings.add(followeeId);
            this.followingMap.put(followerId, followings);
        }

        /** Follower unfollows a followee. If the operation is invalid, it should be a no-op. */
        public void unfollow(int followerId, int followeeId) {
            HashSet<Integer> followings
                    = this.followingMap.getOrDefault(followerId, new HashSet<>());
            if (!followings.contains(followeeId)) {
                return;
            }
            followings.remove(followeeId);
            this.followingMap.put(followerId, followings);
        }
    }
}
