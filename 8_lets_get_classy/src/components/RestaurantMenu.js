import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";  // hook to catch path parameter
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams(); // resId is comming from path provided "/restaurant/:resId" (ex: "/restaurant/452" or "/restaurant/674"  diffrent for diffrent restaurant to load dynamic page)

    useEffect(() => {
        fetchMenu();
    }, []);

    // *** Api call for restaurantMenu of swiggy restaurant ***
    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );

        const json = await data.json();

        setResInfo(json.data);
        console.log(json);
    }

    // *** till data not fetched show this ***
    if(resInfo === null) return <Shimmer />;

    // Destructuring resInfo
    const { 
        name, 
        cuisines, 
        cloudinaryImageId,
        costForTwoMessage, 
        avgRating 
    } = resInfo.cards[2].card.card.info;


    // **** Solved issue related to fetching datas Recommended_menu list (some times it come at card[1] / card[2] , due to top_picks data) ****
    const cardObject = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const isPresent = Object.keys(cardObject).includes("itemCards");

    // Destructuring Recommended_menu list from RestaurantMenu
    const { itemCards } = (isPresent ? resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card : resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{avgRating}</h3>

            <ul>
                {itemCards.map( (item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" RS."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice /100}
                    </li> 
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;