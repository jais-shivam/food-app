import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  console.log("items", items);
  const handleAddItem = (item)=>{
    // Dispatch an action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items?.map((item) => {
        const { id, name, defaultPrice, imageId, price, description } = item?.card?.info;
        return (
          <div
            data-testid='foodItems'
            key={id}
            className="p-2 m-2 border-b-[1px] shadow-sm flex justify-between border-gray-200 text-left"
          >
            <div className="w-9/12">
              <div className="font-semibold py-2">
                {name + " - ₹" + (defaultPrice / 100 || price / 100)}
              </div>
              <p className="text-xs">{description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button onClick={()=>{
                  handleAddItem(item)
                }} className=" py-1 px-8 bg-white shadow-lg my-[-1rem] mx-6 rounded font-bold text-green-500">
                  Add+
                </button>
              </div>
              {imageId && (
                <img
                  src={CDN_URL + imageId}
                  className="w-full rounded-md "
                  alt="NA"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
