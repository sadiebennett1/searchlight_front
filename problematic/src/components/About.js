import React, {Component} from 'react'
import accountable from '../assets/accountable.png';
import twitter from '../assets/twittee.png'
import flatiron from '../assets/flatiron.png'

const About = () => {
    return(
      <div>
      <h2 className="sign">About</h2>
      <div className="aboutrow">
          <div className="column">
            <img src={accountable} alt="" className="firstaboutpic"/>
            <h3 className="aboutheaders">
                Mission
            </h3>
            <p>As news continues to move faster, so has the speed of our forgotten history. For better and worse, social media and the internet have allowed us to maintain a trackrecord of the offensive and oppressive things celebrities have said in public arenas. The aim of SEARCHLIGHT is not to vilify but rather to increase accountability for those with the most power in our society.</p>

         </div>
         &nbsp;
          <div className="column">
            <img src={twitter} alt="" className="secondaboutpic"/>
            <h3 className="aboutheaders">
                Twitter
            </h3>
            <p>Why I'm using Twitters news continues to move faster, so has the speed of our forgotten history. For better and worse, social media and the internet have allowed us to maintain a trackrecord of the offensive and oppressive things celebrities have said in </p>
    
         </div>
          &nbsp;
          <div className="column">
            <img src={flatiron} alt="" className="thirdaboutpic"/>
            <h3 className="aboutheaders">
                Background
            </h3>
            <p>me, what im doings news continues to move faster, so has the speed of our forgotten history. For better and worse, social media and the internet have allowed us to maintain a trackrecord of the offensive and oppressive things celebrities have said in </p>
          </div>
       </div>
      </div>
    )
}

export default About;
