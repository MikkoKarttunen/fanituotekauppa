import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './components/imageData.js'
import ImagesInfo from './components/imageInfo.js'
import ShoppingCart from './components/shoppingCart.js'
import UserInfo from './components/Userinfo.js'

const App = () => {

  const [myImages, setMyImages] = useState(Images);
  const [myUser, setMyUser] = useState({
    name: "",
    email: "",
    address: "",
    postaddress: "",
    post: ""
  });
  const [show, setShow] = useState([true, true, true]);

  const submitHandler = event => {
    event.preventDefault();
    setShow(true);
    console.log("name", myUser.name, "email", myUser.email, "address", myUser.address, "postaddress", myUser.postaddress, "post", myUser.post);
  }

  const changeHandler = (event, fieldName) => {
    const tempUser = {...myUser};
    tempUser[fieldName] = event.target.value;
    setMyUser(tempUser);
  }


  if (!show) {
    return (

      <div className="App">
        <body className="App-body">
          <UserInfo newInfo={myUser} setShow={setShow} submitHandler={submitHandler} changeHandler={changeHandler} />
        </body>
      </div>

    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mikon jääpuoti</h2>
        </header>
        <body className="App-body">
          <ImagesInfo images={myImages} set={setMyImages} />
          <ShoppingCart images={myImages} set={setMyImages} setShow={setShow} />
        </body>
      </div>
    );
  }
}

export default App;
