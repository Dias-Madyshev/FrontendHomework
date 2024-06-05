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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iure
            ex rem fugit dolorum quis similique ut nihil, tenetur perferendis
            esse eum perspiciatis deleniti alias. Atque dicta eaque veritatis
            fuga. Corporis, autem. Unde harum dolor officiis fugit corrupti sint
            adipisci quos nostrum molestiae fugiat! Debitis sed voluptatem quam
            eius tenetur aspernatur in, id possimus quae. Nostrum sed
            repudiandae atque magnam! Quae officiis totam eveniet nihil
            voluptatibus beatae at, quis harum provident, voluptates temporibus
            quod aliquid nisi expedita architecto consequatur molestiae nobis
            aspernatur dolorum est autem facere incidunt. Culpa, dolorem
            incidunt. Reiciendis ea, voluptatibus maxime, repellendus pariatur
            suscipit et minus tempore alias nisi dicta possimus! Recusandae non
            fugiat voluptatibus minus reiciendis quasi soluta iste, atque porro,
            laboriosam corporis. Odit, reiciendis dolorem.
          </p>
        </div>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Поделиться
        </button>
      </div>
    </div>
  );
}
