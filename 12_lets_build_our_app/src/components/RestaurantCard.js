import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

// ** ResaurantCard component **
const RestaurantCard = (props) => {
    // object destructuring
    const {resData} = props;

    const {loggedInUser} = useContext(UserContext);

    // object destructuring + optional chaining
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;
    
    return (
        <div className=" m-2 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300" >
            <img
                className=" rounded-lg"
                src= {CDN_URL + resData.info.cloudinaryImageId}  
                alt="res-logo" 
            />

            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    ); 
};


// **** Higher Order component ***
// input -> RestaurantCard -> RestaurantCardTopRated

export const withTopRatedLabel = (RestaurantCard) => {

    // returns a component (function)
    return (props) => {
        // returns JSX
        return (
            <div>
                <label className="absolute bg-orange-400 text-black m-2 p-2 font-semibold">Top Rated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;