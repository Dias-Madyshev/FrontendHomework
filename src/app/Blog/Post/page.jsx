import React from "react";
import Header from "@/app/layout/Header";

import data from "../../Data/data.json";
import Post from "../../components/Post";

export default function page() {
  return (
    <Header>
      <div className="space-y-8">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </Header>
  );
}
