import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import SavedItemCard from './SavedItemCard';


function SavedContainer({ removeLike, setEditHeartState, editHeartState, inCart, setInCart, setWasClicked, change, setChange, handleUndoHeart, handleCartClick, addFavorite, deleteFavorite, items, user }) {
    const [favorites, setFavorites] = useState();
    const [isFavorite, setIsFavorite] = useState(false);
    
    
    useEffect(() => {
        fetch(`/api/mysaves/${user.id}`)
            .then((r) => r.json())
            .then(data => setFavorites(data))
    }, [user.id])
    setIsFavorite(isFavorite);
    console.log("my favorites: ", favorites)


    function deleteFavorite(id) {
        const updatedList = favorites.filter((item) => item.id !== id);
        setFavorites(updatedList);
    }

    return (
        <>
            <div>{favorites.map((savedCard) => {
                return (
                    <SavedItemCard
                        savedCard={savedCard.item}
                        isFavorite={isFavorite}
                        setIsFavorite={setIsFavorite}
                        user={user}
                        images_url={savedCard.images_url}
                        itemname={savedCard.itemname}
                        price={savedCard.price}
                        description={savedCard.description}
                        seller={savedCard.sold_by}
                        addFavorite={addFavorite}
                        item_id={savedCard.item.id}
                        key={savedCard.id}
                        handleCartClick={handleCartClick}
                        id={savedCard.id}
                        handleUndoHeart={handleUndoHeart}
                        clickedHeart={savedCard.clickedHeart}
                        material={savedCard.material}
                        color={savedCard.color}
                        size={savedCard.size}
                        user_id={savedCard.user_id}
                        condition={savedCard.condition}
                        isForSale={savedCard.isForSale}
                        change={change}
                        setChange={setChange}
                    >
                    </SavedItemCard>
                )
            })}</div>        
        </>
    )
};

export default SavedContainer;