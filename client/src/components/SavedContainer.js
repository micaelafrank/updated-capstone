// import React, { useEffect, useState } from 'react';
// import ItemCard from './ItemCard';
// import SavedItemCard from './SavedItemCard';


// function SavedContainer({ removeLike, setEditHeartState, editHeartState, inCart, setInCart, setWasClicked, change, setChange, handleUndoHeart, handleCartClick, addFavorite, deleteFavorite, items, isFavorite, setIsFavorite, user }) {
//     const [savedItems, setSavedItems] = useState([]);

    // function addFavorite(newFavorite) {
        // const updatedSavedList = items.filter((item) => item.id === newFavorite.id);
        // setSavedItems(updatedSavedList)
    // }

    // const uniqueIds = [];
    // const uniqueSavedItems = savedItems.filter(savedCard => {
    //     const isDuplicate = uniqueIds.includes(savedCard.item_id);

    //     if (!isDuplicate) {
    //         uniqueIds.push(savedCard.item_id);
    //         return true;
    //     }
    //     return false;
    // }
    // );

    // useEffect(() => {
    //     fetch("/api/mysaves")
    //         .then((res) => res.json())
    //         .then((data) => setSavedItems(data.items));
    // }, []);
    // console.log("saved items:", savedItems)


    // function deleteFavorite(item_id) {
        // const updatedSavedList = items.filter((item) => item.id !== item_id)
        // setSavedItems(updatedSavedList);



    // const reRenderHearts = savedItems.map((item) => item.id !== itemToUnsave.id)
    // setSavedItems(reRenderHearts);

    // console.log(uniqueCartItems)
    // return (
    //     <>
    //         <div>{uniqueSavedItems.map((savedCard) => {
    //             return (
    //                 <SavedItemCard
    //                     savedCard={savedCard.item}
    //                     user={user}
    //                     images_url={savedCard.images_url}
    //                     itemname={savedCard.itemname}
    //                     price={savedCard.price}
    //                     description={savedCard.description}
    //                     seller={savedCard.sold_by}
                        // getHeartStatus={savedItems.getHeartStatus}
                        // addFavorite={addFavorite}
                        // item_id={savedCard.item.id}
                        // key={savedCard.id}
                        // handleCartClick={handleCartClick}
                        // id={savedCard.id}
                        // isFavorite={isFavorite}
                        // handleUndoHeart={handleUndoHeart}
                        // setIsFavorite={setIsFavorite}
                        // price={savedCard.price}
                        // savedItems={savedItems}
                        // clickedHeart={savedCard.clickedHeart}
                        // itemname={savedCard.itemname}
                        // description={savedCard.description}
                        // material={savedCard.material}
                        // color={savedCard.color}
                        // size={savedCard.size}
                        // seller={savedCard.sold_by}
                        // user_id={savedCard.user_id}
                        // condition={savedCard.condition}
                        // isForSale={savedCard.isForSale}
                        // images_url={savedCard.images_url}
                        // change={change}
                        // setChange={setChange}
                        // setSavedItems={setSavedItems}
//                     >
//                     </SavedItemCard>
//                 )
//             })}</div>        
//         </>
//     )
// };

// export default SavedContainer;