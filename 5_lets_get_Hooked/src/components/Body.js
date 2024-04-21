import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


// ** Body (main container) component **
const Body = () => {

    // **** local State variable (super powerful variable)
    //  ** both work same
    // let [listOfRestaurants] = useState([]);    // using useState Hook
    // let listOfRestaurants2 = [];               // using Normal js variable
    // listOfRestaurants2 = ["abc", "sdf"];       // nomrmal var can be update like this
    // listOfRestaurants = ["abc", "sdf"];        // can't change state var like this

    // to update state variable , include another method to array as parameter
    // Best practice [ give same name as of state var including "set" in start]
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={ () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );

                        setListOfRestaurants(filteredList); //updating state variable (reRender this component)
                    }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="res-container">
                
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))    
                }
            </div>
        </div>
    );
};

export default Body;