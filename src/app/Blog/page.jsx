import React from "react";
import Layout from "../layout/Header";
import data from "../Data/data.json";
import CardBlog from "../components/CardBlog";

console.log(data);

export default function page() {
  return (
    <div>
      <Layout>
        <div className="space-y-8">
          {data.map((post) => (
            <CardBlog key={post.id} post={post} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
