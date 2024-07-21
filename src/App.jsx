import React from 'react';
import LeftSide from './left';
import RightSide from './right';
import SearchBar from './searchbar';
import './index.css';
import ProfileDropDown from './onpressprofile';
import SigninPop from './signinpopup';

function App() {
  
  return (
    <div className='App'>
      <LeftSide />
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <RightSide />
    </div>
  );
}

export default App;