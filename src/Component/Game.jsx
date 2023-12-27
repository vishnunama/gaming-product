import React, { useEffect, useState } from 'react'
import "./Game.css"

function Game() {
    const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [seconds]);
  return (
  <div className='center-container'>
      <div className='game-in'>
        <p className='gamesite'>GAME KI DUNIYA KA BADSHAH</p>
        <div className='main-heading'>
          <img className='king-icon' src="/images/30421-6-king-removebg-preview.png" alt="king" />
          <h1 className='gamesite-inner'>RAHI BET</h1>
          <img className='king-icon' src="/images/30421-6-king-removebg-preview.png" alt="king" />
        </div>
        <h2 className='game-world'>KEY FEATURES</h2>
        
        <span className='game-detalis'>🏆 Unlimited Games</span>
        <span className='game-detalis'>🔮 Best Predictions</span>
        <span className='game-detalis'>🌐 Global Gaming Community</span>
        <span className='game-detalis'>💰 High Stakes Betting</span>
        <div>
            <a style={{textDecoration:"none"}} href="https://t.me/+3OcRlBrcgKQ4MDhl" className="lab-btn">
                <span style={{fontWeight:"500",fontSize:"23px",marginLeft:"50px",fontFamily:"revert"}}>JOIN NOW FOR FREE</span>
                </a>
        </div>
        <div >
      {seconds > 0 ? (
        <p style={{color:"#F07D00"}} className='counter-in'>{`FREE JOINING ENDS IN... ${seconds} seconds`}</p>
      ) : (
        <p  style={{color:"#D0273E",marginLeft:"100px"}} className='counter-in-in'> completed!</p>
      )}
    </div>
              
        

      </div>
    </div>
  )
}

export default Game;


