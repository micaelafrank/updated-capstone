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
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const [favorites, setFavorites] = useState([]);


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


  useEffect(() => {
    fetch("/api/mysaves")
      .then((r) => r.json())
      .then(data => { setFavorites(data.saved_items) })
  }, [change])
  console.log("my favorites: ", favorites)


//   const uniqueSaves = [];

//   const uniqueSavedItems = favorites.filter((favorite) => {
//     const isDuplicate = uniqueSaves.includes(favorite.item_id);

//       if (!isDuplicate) {
//         uniqueSaves.push(favorite.id);
//       return true;
//   }
//   return false;
// })


  function addCartItem(item){
    console.log("return item")
  }

  function deleteFavorite(id) {
    const updatedList = favorites.filter((item) => item.id !== id);
    setFavorites(updatedList);
  }

  // function clearAllFavorites(){
  //   setFavorites([]);
  // }


  function addNewFavorite(newItem) {
    setFavorites([...favorites, newItem]);
  }



  function addNewItem(newItem) {
    setItems(...items, newItem)
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
          <Route path="/buy" element={<ItemsList addCartItem={addCartItem} deleteFavorite={deleteFavorite} favorites={favorites} setFavorites={setFavorites} addNewFavorite={addNewFavorite} change={change} items={items} setItems={setItems} setChange={setChange} user={user} />} />
          <Route path="/mycart" element={<ShoppingCart total={items} setChange={setChange} change={change} user={user} items={items} />} />
          {/* <Route path="/mysaves" element={<SavedContainer setChange={setChange} change={change} user={user} />} /> */}
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