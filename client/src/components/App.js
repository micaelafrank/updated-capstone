import LogIn from './LogIn';
import WithNav from './WithNav';
import SignUp from './SignUp';
import React, { useRef, useState, useEffect } from 'react';
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
import About from './About';
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddImages from './AddImages';
import PreviewImage from './PreviewImage';
import NewItemImages from './ignore/NewItemImages';
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
  const [cartCount, setCartCount] = useState([]);
  const [itemDetail, setItemDetail] = useState({});
  const [profile, setProfile] = useState({});
  // const [wasClicked, setWasClicked] = useState(false)

  const navigate = useNavigate();
  // const cartTotalNum = cartItems.user_cart_items.length;

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
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2460/000/800/ZH/XX/2460000800_2_1_2.jpg?t=1667569693167&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2221/000/112/ZH/DV/2221000112_1_1_2.jpg?t=1660913895719&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2289/000/712/ZH/XX/2289000712_2_1_2.jpg?t=1667484894192&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2273/000/251/ZH/VV/2273000251_2_1_2.jpg?t=1667484893644&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2228/000/800/BH/BU/2228000800_2_1_2.jpg?t=1667484886860&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/5270/000/982/BH/BU/5270000982_2_1_2.jpg?t=1667490039379&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/2231/022/120/2231022120_7_1_2.jpg?t=1667551576936&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3223/550/120/3223550120_2_7_2.jpg?t=1658216255403&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/3249/022/120/3249022120_2_7_2.jpg?t=1666263788336&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/6204/022/712/6204022712_2_7_2.jpg?t=1667551189152&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/b/2231/000/120/BH/NI/2231000120_1_1_2.jpg?t=1664527045706&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/1221/022/115/1221022115_2_7_2.jpg?t=1667551522985&imwidth=985&imformat=chrome",
    "https://static.zarahome.net/8/photos4/2022/I/4/1/p/7298/401/826/7298401826_2_7_2.jpg?t=1662108367272&imwidth=985&imformat=chrome",
    "https://i.etsystatic.com/21668141/r/il/9b0a1f/4390569481/il_1588xN.4390569481_a8vw.jpg",
  ];

  const details = useRef(null);
  const scrollTo = () => {
    window.scrollTo({
      top: details.current,
      behavior: 'smooth',
    });
  };


  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, [])
  console.log(user);


  function handleSelect(id) {
    fetch(`/api/items/${id}`)
      .then(res => res.json())
      .then(itemDetail => setItemDetail(itemDetail))
      console.log(itemDetail)
    // scrollTo()
    navigate(`/buy/${id}`)
  }
  console.log("item detail: ", itemDetail)


  useEffect(() => {
    fetch(`/api/cart-count/${user.id}`)
      .then((r) => r.json())
      .then(data => setCartCount(data))
  }, [change])
  console.log("Cart count: ", cartCount)


  useEffect(() => {
    fetch(`/api/profile/${user.username}`)
      .then((r) => r.json())
      .then(profile => setProfile(profile))
  }, [])
  console.log(profile)


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
  }, [change])

  let lastItemAdded;
  let lastItemId;

  function addNewItem(newItem) {
    setItems(...items, newItem)
    console.log("new item id: ", newItem.id)
  }

  function onLogin(user) {
    setUser(user)
  }

  // function handleUnlike(myItem) {
  //   const newLikedList = userLikes.filter((item) => item.id !== myItem.id)
  //   setUserLikes(newLikedList)
  // }

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
  const darkestBrown = brown['A700']

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

  // function handleUnlike(myItem) {
  //   const newLikedList = userLikes.filter((item) => item.id !== myItem.id)
  //   setUserLikes(newLikedList)
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
          <Route path="/login" element={<LogIn cartCount={cartCount} onLogin={onLogin} loginImgs={loginImgs} imageNum={imageNum} setImageNum={setImageNum} setUser={setUser} user={user} />} />
          <Route path="/signup" element={<SignUp cartCount={cartCount} user={user} loginImgs={loginImgs} imageNum={imageNum} setImageNum={setImageNum} onSignUp={setUser} />} />
          <Route path="/" element={<Homepage cartCount={cartCount} loginImgs={loginImgs} imageNum={imageNum} setImageNum={setImageNum} setUser={setUser} onLogin={onLogin} onSignUp={setUser} user={user} items={items} />} />
          <Route path="/about" element={<About cartCount={cartCount} user={user} />} />
          <Route element={<WithNav cartCount={cartCount} user={user} setUser={setUser} />}>
            {/* {user.username ? */}
              {/* :
              <Route path="/" element={<Homepage items={items} />} />
            } */}
          <Route path="/profile/:username" element={<Profile profile={profile} setProfile={setProfile} userLikes={userLikes} setUserLikes={setUserLikes} change={change} setChange={setChange} setItems={setItems} setUser={setUser} items={items} user={user} />} />
          <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} items={items} setItems={setItems} user={user} />} />
          <Route path="/new-item" element={<NewItemForm addNewItem={addNewItem} user={user} items={items} setItems={setItems} />} />
          {/* <Route path="/new-item/images" element={<NewItemImages addNewItem={addNewItem} user={user} items={items} setItems={setItems} />} /> */}
          {/* <Route path="/sell/images/preview/:id" element={<PreviewImage addNewItem={addNewItem} items={items} setItems={setItems} user={user} />} />  */}
          <Route path="/buy" element={<ItemsList handleSelect={handleSelect} userLikes={userLikes} setUserLikes={setUserLikes} change={change} setChange={setChange} user={user} />} />
          <Route path="/buy/:id" element={<ItemDetails itemDetail={itemDetail} setItemDetail={setItemDetail} user={user} details={details} />} />
          <Route path="/mycart" element={<ShoppingCart total={items} setChange={setChange} change={change} cartItems={cartItems} setCartItems={setCartItems} user={user} />} />
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