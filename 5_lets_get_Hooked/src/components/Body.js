import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// ** Body (main container) component **
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))    
                }
            </div>
        </div>
    );
};

export default Body;