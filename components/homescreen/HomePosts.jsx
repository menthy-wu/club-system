import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { posts } from "../data/posts";
import HomePost from "./HomePost";

const HomePosts = () => {
  return (
    <ScrollView className="flex flex-col bg-white w-full">
      <View className = "flex flex-col items-center justify-center">
        {posts.map((post, index) => {
          return (
            <HomePost
              poster={post.poster}
              time={post.time}
              title={post.title}
              body={post.body}
              key={index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default HomePosts;
