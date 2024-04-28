import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


// ** Body (main container) component **
const Body = () => {

    // Whenever state variable updates, React triggers a reconciliation cycle ( re-renders the component)
    // state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

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
        // keeping copy of api data for filter / other purposes
        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants); 
    };

    // using conditional rendering (? :)
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                {/* search area */}
                <input
                    type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value); // reRender each time a letter/key press in input
                    }}
                />

                <button
                    className="search-btn"
                    onClick={() => {
                        const filterRestaurant = listOfRestaurants.filter( 
                            // convert both data first in lowercase
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurants(filterRestaurant);
                    }}
                >
                    Search
                </button>
                
                {/* filter area */}
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
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> 
                            <RestaurantCard resData={restaurant} /> 
                        </Link>
                    ))    
                }
            </div>
        </div>
    );
};

export default Body;