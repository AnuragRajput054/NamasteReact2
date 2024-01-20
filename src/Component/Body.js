import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockdata";
import { useState , useEffect} from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resobj);
  

  useEffect( () =>{
    console.log("hiii");
  },[]);


  return (
    <div className="body">


      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
    
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.deliveryTime < 30
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Fast delivery
        </button>
      </div>
      
     
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
