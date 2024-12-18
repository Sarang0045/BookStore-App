import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 w-100">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img className="mt-3 w-40" src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title h-5">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-sm h-30">{item.description}</p>
            <div className="card-actions justify-between items-center h-10 ">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;