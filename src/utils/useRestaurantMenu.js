import { useEffect, useState } from "react";
import { getUrlBasedOnId } from "./constants";

const MENU_API = "some_api_endpoint";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async ()=>{
        const menuData =await fetch(getUrlBasedOnId(resId));
        const menuDataJson = await menuData.json();
        console.log(menuDataJson?.data);
        console.log(menuDataJson?.data?.cards[2]?.card?.card?.info);
        console.log(menuDataJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        setResInfo(menuDataJson?.data);
    }
  return resInfo;
};

export default useRestaurantMenu;