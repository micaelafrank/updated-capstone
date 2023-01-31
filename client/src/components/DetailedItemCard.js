import React from 'react'
import { Link } from 'react-router-dom'

const DetailedItemCard = ({ itemname, description, category, id, selectCard, condition, size, images_url, scrollToDetails, limit }) => {


    return (

        <div>
            <Link to={`/items/${id}`}>
                <div className="bg-gray-100 rounded overflow-hidden shadow-md cursor-pointer duration-500 hover:bg-gray-300 hover:scale-[1.02] relative dark:bg-slate-800">
                    <img src={images_url} alt="an image of the item" ></img>
                    <h2 className="text-gray-800 font-bold dark:text-white">{itemname}</h2>
                    <h3 className="dark:text-slate-400 pb-1" >{limit(description)}</h3>
                    <div className="bg-gray-100 z-10 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 hover:scale-[1.03] duration-500 opacity-40 hover:opacity-90">
                        <span onClick={() => selectCard(id)}>View Details</span>
                    </div>
                </div>
            </Link>
        </div >

    )
}

export default DetailedItemCard
