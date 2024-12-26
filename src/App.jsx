import { useState } from 'react'
import './App.css'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from  './assets/rocket.svg'
function App() {
  return (
    <>
     <div className='App'>
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" /><span className="brand">ChatGpt</span>
          </div>
          <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />newChat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="" />what is programming?</button>
            <button className="query"><img src={msgIcon} alt="" />what is programming?</button>
          </div>
        </div>
        <div className="lowerSide">
    <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
    <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
    <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade to pro</div>
        </div>
      </div>

      <div className="main"></div>
     </div>
    </>
  )
}

export default App
