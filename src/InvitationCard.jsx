import React, { useEffect, useState } from 'react'
// import "./Game.css"

function InvitationCard() {
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
  <div  className='center-container'>
    
      <div className='game-in'>
        <p className='gamesite'>ॐ श्री गणेशाय नमः <br /> <br /></p>
        <div className='main-heading'>
          <img style={{width:"130px"}} className='king-icon' src="/images/WhatsApp_Image_2024-02-10_at_09.45.51_7031cb74-removebg-preview.png" alt="king" />
          <h1 className='gamesite-inner'></h1>
          {/* <img className='king-icon' src="/images/30421-6-king-removebg-preview.png" alt="king" /> */}
        </div>
        <img src="WhatsApp Image 2024-02-10 at 10.01.26_024c3aee.jpg" alt="" />

        <h2 className='game-world'>Birthday Party invitation for all guys</h2>
        {/* <h2 className='game-world'> To attend this </h2> */}
        <div style={{display:"flex",gap:"20px"}}>
        <div>
        <span  className='game-detalis'>11 Feb 2024</span>
        <span className='game-detalis'>Timing 5 P.M</span>
        <span className='game-detalis'>Ankit chhipa</span>
        <span className='game-detalis'>Thank You</span>
        </div>
        <div>
        <img style={{width:"190px"}} src="images/image1.jpg" alt="" />
        </div>
        </div>
        {/* <div>
            <a style={{textDecoration:"none"}} href="https://t.me/+3OcRlBrcgKQ4MDhl" className="lab-btn">
                <span style={{fontWeight:"500",fontSize:"23px",marginLeft:"50px",fontFamily:"revert"}}>JOIN NOW FOR FREE</span>
                </a>
        </div> */}
       
              
        

      </div>
    </div>
  )
}

export default InvitationCard;


