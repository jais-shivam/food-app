import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(-1);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories", categories);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // const { itemCards, title } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-3xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",") + " - " + costForTwoMessage}
      </p>
      {/* Category Accordian */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItem={index === showIndex && true}
            setShowIndexProp={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
