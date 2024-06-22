import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ data }) => {
  // console.log(data);
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } = data || {};
  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[17vw] rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img
        className="res-logo rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg overflow-hidden ">{name}</h3>
      <h4 className="overflow-hidden ">{cuisines?.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export const withReviewLabel = (RestaurantCard) => {
  return (props) => {
    // console.log(props);
    return (
      <>
        <label className="m-8 p-1 absolute bg-black text-white opacity-100 rounded-lg">
          1k+ Review
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
