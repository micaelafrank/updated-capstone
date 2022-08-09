// import './App.css';
import LogIn from './LogIn';
import WithNav from './WithNav';
import SignUp from './SignUp';
import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Homepage from './Homepage';
import ItemsList from './ItemsList';
// import AddItemForm from './AddItemForm';
import { Route, Routes } from 'react-router-dom';
// import ShoppingCart from './ShoppingCart';
// import StripeContainer from './StripeContainer';
// import PurchaseLandingPage from './PurchaseLandingPage';


function App() {
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [change, setChange] = useState(false);

  function addNewItem(newItem) {
    setItems(...items, newItem)
  }

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(data => setItems(data))
  }, [])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  // console.log(user);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
        {/* <Route element={<WithNav user={user} setUser={setUser} />}> */}
          <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          {/* <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} user={user} />} /> */}
          <Route path="/buy" element={<ItemsList change={change} setChange={setChange} user={user} />} />
          {/* <Route path="/checkout" element={<StripeContainer total={1000} />} />
          <Route path="/orderconfirmation" element={<PurchaseLandingPage items={items} user={user} />} />
          <Route path="/mycart" element={<ShoppingCart total={items} setChange={setChange} change={change} user={user} items={items} />} /> */}
        {/* </Route> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App;