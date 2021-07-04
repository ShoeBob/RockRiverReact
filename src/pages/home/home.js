import React from 'react';
import '../../App.css';
import background from "../../images/rockriver2.jpg"


export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <h1 className='home'>HOME</h1>
      <p>This is the main page for RR Tech Services.  We will be adding our services soon.</p>
        <div>
          How we can help
        </div>
        <div>
          What we offer
        </div>
        <div>
          We think we can help
        </div>
    </div>
  );
}