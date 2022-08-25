import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import SavedItemCard from './SavedItemCard';


function SavedContainer({ removeLike, setEditHeartState, editHeartState, inCart, setInCart, setWasClicked, change, setChange, handleUndoHeart, handleCartClick, addFavorite, deleteFavorite, items, isFavorite, setIsFavorite, user }) {
    const [savedItems, setSavedItems] = useState([]);

    
    function addFavorite(newFavorite) {
        // const updatedSavedList = items.filter((item) => item.id === newFavorite.id);
        // setSavedItems(updatedSavedList)
    }

    useEffect(() => {
        fetch("/mylikes")
            .then((res) => res.json())
            .then((data) => setSavedItems(data.items));
    }, [change]);
    console.log("saved items:", savedItems)


    function deleteFavorite(item_id) {
        // const updatedSavedList = items.filter((item) => item.id !== item_id)
        // setSavedItems(updatedSavedList);
    }


        // const reRenderHearts = savedItems.map((item) => item.id !== itemToUnsave.id)
        // setSavedItems(reRenderHearts);
    
    // console.log(uniqueCartItems)
    return (
        <>
            <div>{savedItems.map((savedItem) => {
                return (
                    <SavedItemCard
                        item={savedItem}
                        getHeartStatus={savedItems.getHeartStatus}
                        addFavorite={addFavorite}
                        item_id={savedItem.item.id}
                        key={savedItem.id}
                        handleCartClick={handleCartClick}
                        id={savedItem.id}
                        isFavorite={isFavorite}
                        handleUndoHeart={handleUndoHeart}
                        setIsFavorite={setIsFavorite}
                        price={savedItem.price}
                        savedItems={savedItems}
                        clickedHeart={savedItem.clickedHeart}
                        itemname={savedItem.itemname}
                        description={savedItem.description}
                        material={savedItem.material}
                        color={savedItem.color}
                        size={savedItem.size}
                        seller={savedItem.sold_by}
                        user={user}
                        sold_by={savedItem.sold_by}
                        user_id={savedItem.user_id}
                        condition={savedItem.condition}
                        isForSale={savedItem.isForSale}
                        images_url={savedItem.images_url}
                        change={change}
                        setChange={setChange}
                        setSavedItems={setSavedItems}
                    >
                    </SavedItemCard>
                )
            })}</div>        </>
    )
};

export default SavedContainer;