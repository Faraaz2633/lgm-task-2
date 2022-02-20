import React, { useState } from 'react';
import './App.css';

import NavComponent from './components/nav/nav.component';
import UserCard from './components/user-card/user-card.component';
import LoaderComponent from './components/loader/loader.component';

function App() {

  const [isBtnClick, setIsBtnClick] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const handleClick = () => {
    console.log('clicked')
    setIsBtnClick(true);

    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res)=>{
        setItems(res.data);
          setInterval(()=>{
            setIsLoaded(true);
          }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <NavComponent />
      <button onClick={handleClick}>Get Data</button>
      {
        isBtnClick ? (
          isLoaded ? (
            <UserCard userData={items}/>
          ) : (
            <LoaderComponent/>
          )
        ):console.log('click on get users')
      }
    </div>
  );
}


export default App;
