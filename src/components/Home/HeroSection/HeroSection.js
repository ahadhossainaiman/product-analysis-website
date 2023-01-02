import React from "react";

export default function HeroSection() {
  return (
    <section className="flex m-auto mt-40">
      <div>
        <p className="text-6xl font-black text-center text-lime-500">
          New Products
        </p>
        <h2 className="text-6xl font-black text-center text-lime-300">
          Flexible Chair
        </h2>
        <p className="text-2xl text-gray-400 text-ellipsis ml-28 mt-10">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </p>

        <button className="px-24 py-5 bg-lime-200 rounded text-2xl text-blue-800 font-bold block ml-12 mt-28 hover:text-orange-500 hover:border border-indigo-600">
          Explore...
        </button>
      </div>
      <img
        src="https://cdn.shopify.com/s/files/1/0086/1411/7434/files/slider-2_1024x1024.png?v=1616395261"
        className="w-1/2 h-1/2 bg-lime-100 rounded-full m-5"
        alt=""
      />
    </section>
  );
}
