import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './components/imageData.js'
import ImagesInfo from './components/imageInfo.js'
const App = () => {

  const [myImages, setMyImages] = useState(Images);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Mikon jääpuoti</h2>
      </header>
      <body className="App-body">
        <ImagesInfo images={myImages}set={setMyImages} />
      </body>
    </div>
  );
}

export default App;
