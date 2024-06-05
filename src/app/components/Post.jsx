import React from "react";
import data from "../Data/data.json";

export default function Post({ post }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-md space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800"></h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">by {post.author}</p>
          <p className="text-gray-400">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
        <p className="text-gray-700">{data.description}</p>
        <div className="border-t border-gray-200 pt-4">
          Tired of getting caught? Here are 10 ninja-level tips to keep your
          phone hidden and your texts flowing during boring lectures.
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ё
          </p>
        </div>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Поделиться
        </button>
      </div>
    </div>
  );
}
