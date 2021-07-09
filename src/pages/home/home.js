import React from 'react';
import '../../App.css';
import question from '../../images/question.jpg';
import offer from '../../images/offer.png';
import yes from '../../images/yes.jpg';



export default function Home() {
  return (
    <div>
      <h1 className='home'>Welcome to Rock River Tech Services</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
          <div className="image">
            <img src={question} alt="question" width="50" />
            <span><h3>How we can help</h3></span>
            <p>We are the number one retail service center in Missoula County.  All issues can be looked at and 
              diagnosed by our specialized team.</p>
            </div>
          <div className="image">
            <img src={offer} alt="offer" width="85"/>
            <span><h3>What we offer</h3></span>
            <p>Our services start from initial diagnostics to full computer(PC/MacOS/Linux) builds.</p>
          </div>
          <div className="image">
            <img src={yes} alt="offer" width="100" />
            <span><h3>We think we can help</h3></span>
            <p>Give us a call to setup an appointment and start the process.</p>
          </div>
        </div>
    </div>
  );
}