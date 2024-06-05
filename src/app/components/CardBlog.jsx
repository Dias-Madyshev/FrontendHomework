import React from "react";
import Link from "next/link";

export default function CardBlog({ post }) {
  return (
    <Link
      href="Blog/Post"
      className="flex items-center p-6 bg-gray-100 rounded-lg shadow-md
      space-x-6"
    >
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-2">by {post.author}</p>
        <p className="text-gray-400 mb-4">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700">{post.description}</p>
      </div>
      <div className="w-24 h-24 bg-gray-300 rounded-md flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`https://via.placeholder.com/96?text=${post.author.charAt(0)}`}
          alt={post.author}
        />
      </div>
    </Link>
  );
}
