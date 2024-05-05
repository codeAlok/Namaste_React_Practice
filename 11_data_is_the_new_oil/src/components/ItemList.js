import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">

                    <div className="text-left w-[70%]">
                        <p className="font-medium">{item.card.info.name}</p>
                        <p className="font-medium">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                        <p className="text-xs my-2">{item.card.info.description}</p>
                    </div>

                    <div className="w-[30%] p-2 relative">
                        <button className="p-2 bg-orange-300 shadow-lg absolute right-0 font-semibold">Add +</button>

                        <img src={CDN_URL + item.card.info.imageId} className="w-full h-auto" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;