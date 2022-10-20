// import React, { useEffect, useState } from 'react';
// import ItemCard from './ItemCard';
// import SavedItemCard from './SavedItemCard';


// function SavedContainer({ likedList, setLikedList, inCart, setInCart, setWasClicked, change, setChange, handleUndoHeart, handleCartClick, addFavorite, items, isFavorite, setIsFavorite, user }) {
    // const [savedItems, setSavedItems] = useState([]);
    // const [isHearted, setIsHearted] = useState(false);

    // useEffect(() => {
    //     fetch("/api/mysaves")
    //         .then((res) => res.json())
    //         .then((data) => setSavedItems(data.items));
    // }, []);
    // console.log("saved items:", savedItems)


    // const uniqueIds = [];
    // const uniqueSavedItems = likedList.filter(savedCard => {
    //     const isDuplicate = uniqueIds.includes(savedCard.item_id);

    //     if (!isDuplicate) {
    //         uniqueIds.push(savedCard.item_id);
    //         return true;
    //     }
    //     return false;
    // }
    // );



    // function handleSave(item_id){
    //     fetch(`/api/edit_heart/${item_id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             item_id: item_id,
    //             user_likes_container_id: user.user_likes_container.id,
    //             heartIcon: true,
    //         }),
    //     })
    //     .then(res => res.json())
    //     .then(data => setIsHearted(data.heartIcon));
    // }

    // function deleteFavorite(item_id) {
        // const updatedSavedList = items.filter((item) => item.id !== item_id)
        // setSavedItems(updatedSavedList);
    // }


    // const reRenderHearts = savedItems.map((item) => item.id !== itemToUnsave.id)
    // setSavedItems(reRenderHearts);

    // console.log(uniqueCartItems)
    // return (
    //     <>
    //         <div>{uniqueSavedItems.map((savedItem) => {
    //             return (
    //                 <SavedItemCard
    //                     savedItem={savedItem}
    //                     savedItemId={savedItem.item_id}
    //                     user={user}
    //                     items={items}
    //                     key={savedItem.id}
    //                     id={savedItem.id}
                        // setIsHearted={setIsHearted}
                        // isHearted={isHearted}
                        // sItem_id={savedItem.id}
                        // savedItems={savedItems}
                        // setSavedItems={setSavedItems}
                        // sItem_item_id={savedItem.item_id}
                        // sItem_heartIcon={savedItem.heartIcon}
                        // savedItems={uniqueSavedItems}
                        // setSavedItems={setSavedItems}                  
//                     >
//                     </SavedItemCard>
//                 )
//             })}</div>        
//         </>
//     )
// };

// export default SavedContainer