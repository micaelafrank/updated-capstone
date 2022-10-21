import LogIn from './LogIn';
import WithNav from './WithNav';
import SignUp from './SignUp';
import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Homepage from './Homepage';
import ItemsList from './ItemsList';
import AddItemForm from './AddItemForm';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import SavedContainer from './SavedContainer';
// import NavBar from './NavBar';
import StripeContainer from './StripeContainer';
// import PurchaseLandingPage from './PurchaseLandingPage';

function App() {
  const storedDarkMode = JSON.parse(localStorage.getItem("DARK_MODE"));

  // setEditHeartState, editHeartState
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);
  const [darkMode, setDarkMode] = useState(storedDarkMode)
  const [savedList, setSavedList] = useState([]);


  useEffect(() => {
    fetch("/api/favorites")
      .then((res) => res.json())
      .then((data) => setSavedList(data));
  }, []);
  console.log("saved items:", savedList)

  
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



  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  console.log(user);

  useEffect(() => {
    fetch("/api/items")
      .then((r) => r.json())
      .then(data => { setItems(data) })
  }, [])
  console.log(items)


  function addNewItem(newItem) {
    setItems(...items, newItem)
  }

  function addNewSave(savedItem) {
    const updatedList = items.map((item) => item.id === savedItem.id ? savedItem : item);
    setSavedList(updatedList);
  }
  // function addNewSave(newSave){
  //   setSavedItems(...savedItems, newSave)
  // }

  function deleteLike(savedItem){
    const updatedList = items.filter((item) => item.id !== savedItem.id)
    setSavedList(updatedList)
  }

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);


  return (
    <div className={darkMode ? "App dark" : "App"}>
      <div className="h-auto dark:bg-slate-900" >

    {/* <div> */}
      <Routes>
        <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
          <Route element={<WithNav user={user} setUser={setUser} darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route path="/" element={<Homepage user={user} setUser={setUser} />} /> 
          <Route path="/profile" element={<Profile items={items} user={user} setUser={setUser} />} />
          <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} user={user} />} />
          <Route path="/buy" element={<ItemsList deleteLike={deleteLike} addNewSave={addNewSave} savedList={savedList} setSavedList={setSavedList} items={items} setItems={setItems} change={change} setChange={setChange} user={user} />} />
          <Route path="/mycart" element={<ShoppingCart total={items} setChange={setChange} change={change} user={user} items={items} />} />
          {/* <Route path="/mylikes" element={<SavedContainer likedList={likedList} setLikedList={setLikedList} setChange={setChange} change={change} user={user} />} /> */}
          <Route path="/checkout" element={<StripeContainer total={1000} />} />
          {/* <Route path="/orderconfirmation" element={<PurchaseLandingPage items={items} user={user} />} />*/}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
    </div>
  )
}

export default App;