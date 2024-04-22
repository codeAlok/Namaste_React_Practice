import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


// ** Body (main container) component **
const Body = () => {

    // state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // *** useEffect() Hook ***
    useEffect( ()=> {
        fetchData();
    }, [] );

    // **** function to fetch Live API Data and Apply to our Project ****
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    // if no data loaded
    if(listOfRestaurants.length === 0) {
        return ( <h1>Loading.....</h1>);
    }

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={ () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );

                        setListOfRestaurants(filteredList); //updating state variable
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