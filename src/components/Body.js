import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withReviewLabel } from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRes, setAllRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const {loggedInUser,setUserName}= useContext(UserContext);

  // Higher Order Component(HOC)
  const RestaurantCardWithReviewLabel = withReviewLabel(RestaurantCard);

  const fetchData =  async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setAllRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setResData(allRes)
    // console.log(json?.data.cards[1].card.card);
  };
  // console.log(resData);
  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
        <div className="filter-btn-container flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              data-testid='searchInput'
              className="search-box border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="px-4 py-1 rounded-md bg-green-100 m-4"
              onClick={() => {
                const filteredData = allRes.filter((res) =>
                  res?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                // console.log(filteredData);
                setResData(filteredData);
              }}
            >
              Search
            </button>
          </div>
          <div className="m-4 p-4">
          <button
            className="filter-btn px-4 py-1 rounded-md bg-gray-100 m-4"
            onClick={() => {
              const filterData = resData?.filter((data) =>
                data?.info?.avgRating > 4.5 ? data : ""
              );
              setResData(filterData);
            }}
          >
            Top Rated Restaurant
          </button>
          </div>
          <div className="m-4 p-4">
            <label>UserName : </label>
          <input type="text" value={loggedInUser} className="border border-black py-1 my-4 rounded" onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        </div>
        <div className="res-container flex  flex-wrap justify-start m-4">
          {resData.map((res) => (
            <Link key={res?.info?.id} to={`/restaurant/${res?.info?.id}`}>
              {res?.info?.totalRatingsString==='1K+'?<RestaurantCardWithReviewLabel data={res?.info}/>:<RestaurantCard data={res?.info} />}
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Body;