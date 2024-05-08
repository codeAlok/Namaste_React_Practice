import RestaurantCard, {withTopRatedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


// ** Body (main container) component **
const Body = () => {

    // Whenever state variable updates, React triggers a reconciliation cycle ( re-renders the component)
    // state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Higherorder component taking a component & returning updated component
    const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

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

    // *** UI to display if you're offline ***
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>look like you are offline, Please check your internet connection</h1>
        )
    }

    const {loggedInUser, setUserName} = useContext(UserContext); 

    // using conditional rendering (? :)
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter m-4">
                {/* search area */}
                <input
                    type="text"
                    className=" p-2 border border-solid border-black"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value); // reRender each time a letter/key press in input
                    }}
                />

                <button
                    className=" m-2 p-2 bg-green-300 rounded-lg"
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
                    className=" p-2 bg-gray-300 rounded-lg"
                    onClick={ () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );

                        setListOfRestaurants(filteredList); //updating state variable
                    }}
                >
                    Top rated restaurant
                </button>

                {/* *** to update context data everywhere(global in whole app) through input data *** */}
                <input
                    type="text"
                    className="mx-2 p-2 border border-solid border-black"
                    value={loggedInUser}
                    onChange={(e) => {
                        setUserName(e.target.value); // update context each time a letter/key press
                    }}
                />

            </div>
            <div className="flex flex-wrap justify-center">
                
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>

                            {/* if the restaurant (avgRating >= 4.5), then add a top_rated label to it  */}

                            {(restaurant.info.avgRating >= 4.5) 
                                ? <RestaurantCardTopRated resData={restaurant}/>
                                : <RestaurantCard resData={restaurant} />
                            }
                             
                        </Link>
                    ))    
                }
            </div>
        </div>
    );
};

export default Body;