import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndexProp }) => {
  // console.log(data);
  const { itemCards, title } = data;

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
    onClick={()=>setShowIndexProp()}
    >
      <div className="justify-between flex">
        <span className="font-bold text-xl my-4">
          {title}({itemCards.length})
        </span>
        <span className="text-xl my-4 font-bold">{showItem?'⬆️':'⬇️'}</span>
      </div>
      {/* Accordian body */}
      { showItem && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
