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
import { brown, blueGrey } from '@mui/material/colors';
import SavedContainer from './SavedContainer';
import NewItemForm from './NewItemForm';
import StripeContainer from './StripeContainer';
import AddItemImages from './ignore/AddItemImages';
import EditCard from './EditCard';
import MakePurchase from './MakePurchase';
// import PurchaseLandingPage from './PurchaseLandingPage';

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [imageNum, setImageNum] = useState(0);
  const [userLikes, setUserLikes] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const loginImgs = [
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2130/005/500/2130005500_2_7_2.jpg?t=1665749355836&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/8306/008/715/8306008715_2_7_2.jpg?t=1667549977231&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/9118/004/400/9118004400_7_1_2.jpg?t=1668172045449&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/8357/004/114/8357004114_2_7_2.jpg?t=1667549987191&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3256/022/052/3256022052_2_7_2.jpg?t=1667568785579&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2228/000/800/BH/BU/2228000800_7_1_2.jpg?t=1667484886860&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/528/BH/BU/2460000528_7_1_2.jpg?t=1667484892118&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2289/000/712/ZH/XX/2289000712_7_1_2.jpg?t=1667484894192&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2023/V/4/1/b/2226/000/914/ZH/XX/2226000914_7_1_2.jpg?t=1668520687688&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/800/ZH/XX/2460000800_7_1_2.jpg?t=1667569693167&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2215/409/500/2215409500_2_7_5.jpg?t=1656000246221&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/800/ZH/XX/2460000800_2_1_2.jpg?t=1667569693167&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2221/000/112/ZH/DV/2221000112_1_1_2.jpg?t=1660913895719&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2289/000/712/ZH/XX/2289000712_2_1_2.jpg?t=1667484894192&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2273/000/251/ZH/VV/2273000251_2_1_2.jpg?t=1667484893644&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2228/000/800/BH/BU/2228000800_2_1_2.jpg?t=1667484886860&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/5270/000/982/BH/BU/5270000982_2_1_2.jpg?t=1667490039379&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2231/022/120/2231022120_7_1_2.jpg?t=1667551576936&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/7222/022/802/7222022802_7_1_2.jpg?t=1667551393025&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3223/550/120/3223550120_2_7_2.jpg?t=1658216255403&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3249/022/120/3249022120_2_7_2.jpg?t=1666263788336&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/6204/022/712/6204022712_2_7_2.jpg?t=1667551189152&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2231/000/120/BH/NI/2231000120_1_1_2.jpg?t=1664527045706&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/1221/022/115/1221022115_2_7_2.jpg?t=1667551522985&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/7298/401/826/7298401826_2_7_2.jpg?t=1662108367272&imwidth=985&imformat=chrome",
    "https://i.etsystatic.com/21668141/r/il/9b0a1f/4390569481/il_1588xN.4390569481_a8vw.jpg",
  ];

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
    }})
  }, [])
  console.log(user);

  function addNewItem(newItem) {
    setItems(...items, newItem)
  }

  function onLogin(user) {
    setUser(user)
  }

  useEffect(() => {
    fetch("/api/items")
      .then((r) => r.json())
      .then(data => setItems(data))
  }, [])
  console.log(items)

  useEffect(() => {
    fetch("/api/mycart")
      .then((r) => r.json())
      .then(data => setCartItems(data))
    // setItemCount(itemCount)})
  }, [])
  console.log("my cart items: ", cartItems)


  // useEffect(() => {
  //   fetch(`/api/user-likes-container/${user.id}`)
  //     .then((r) => r.json())
  //     .then(data => setUserLikes(data))
  //   // setItemCount(itemCount)})
  // }, [])
  // console.log("my likes: ", userLikes)

  
  // function handleSignIn() {
  //   setShowSignUp(showSignUp => !showSignUp);
  // }

  // function handleLogin() {
  //   setShowLogin(showLogin => !showLogin);
  // }

  const darkBrown = brown[300];
  const mainBrown = brown[200];
  const lightBrown = brown['A100'];


  // let yellowLight = "#f4f0ad";
  // let yellowDark = "#c1be7d";
  // let yellowMain = "#f4f0ad";
  // let greenLight = "#eefffd";
  // let greenDark = "#8ab399";
  // let greenMain = "#bbe5ca";
  let newGreen = '#cfe0c3';
  const purple = '#bca5bb';
  
  // let taupeLight = "#ffffff";
  // let taupeDark = "#bcb3a9";
  // let taupeMain = "#efe5db";

  
  // function deleteItemFromList(id) {
  //   const updatedItemsList = items.filter((item) => item.id !== id);
  //   setItems(updatedItemsList);
  // }


  // function addCartItem(item){
  //   console.log("return item")
  // }


  // function deleteCartIcon(id) {
  //   setEditCartState(!editCartState);
  //   fetch(`/api/edit_cart/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       inCartIcon: false,
  //       id: item.id,
  //     }),
  //   })
  //     .then((resp) => resp.json())
  //     .then(data => setInitialCartValue(data.inCartIcon));
  //   setIsAddedCart(isAddedCart => (!isAddedCart))
  // }

  if (!user) return <Homepage />;

  return (
    <div>
      <div className="h-auto dark:bg-slate-900" >
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/login" element={<LogIn onLogin={onLogin} loginImgs={loginImgs} imageNum={imageNum} setImageNum={setImageNum} setUser={setUser} user={user} />} />
          <Route path="/signup" element={<SignUp user={user} onSignUp={setUser} />} />
          <Route path="/" element={<Homepage setUser={setUser} onLogin={onLogin} onSignUp={setUser} user={user} items={items} />} />
          <Route element={<WithNav user={user} setUser={setUser} />}>
            {/* {user.username ? */}
              {/* :
              <Route path="/" element={<Homepage items={items} />} />
            } */}
          <Route path="/profile/:username" element={<Profile userLikes={userLikes} setUserLikes={setUserLikes} change={change} setChange={setChange} setItems={setItems} setUser={setUser} items={items} user={user} />} />
          <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} user={user} />} />
          <Route path="/new-item" element={<NewItemForm addNewItem={addNewItem} user={user} />} />
          <Route path="/buy" element={<ItemsList userLikes={userLikes} setUserLikes={setUserLikes} change={change} setChange={setChange} user={user} />} />
          <Route path="/mycart" element={<ShoppingCart total={items} setChange={setChange} change={change} user={user} />} />
          {/* <Route path="/mysaves" element={<SavedContainer setChange={setChange} change={change} user={user} />} /> */}
          <Route path="/checkout" element={<StripeContainer total={1000} />} />
          <Route path="/payment" element={<MakePurchase />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
    </div>
  )
}

export default App;