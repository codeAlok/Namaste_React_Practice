import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems); // if true, set false and if false, set true (toggle feature)
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-2 ">
                {/* Accordian Header */}
                <div
                    className="flex justify-between p-2 border-gray-300 shadow-md border-b-2 cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-semibold">
                        {data.title} [{data.itemCards.length}]
                    </span>
                    <span>🔽</span>
                </div>

                {/* Accordian Category */}
                { showItems && <ItemList items={data.itemCards} />}
            </div>


        </div>
    )
}

export default RestaurantCategory;