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
            <p>As the world continues to move faster, so has the speed of our forgotten history. For better and worse, social media and the internet have allowed us to maintain a trackrecord of the offensive and oppressive things celebrities have said in public arenas. The aim of SEARCHLIGHT is not to vilify but rather to increase accountability for those with the most power in our society.</p>

         </div>
         &nbsp;
          <div className="column">
            <img src={twitter} alt="" className="secondaboutpic"/>
            <h3 className="aboutheaders">
                Twitter
            </h3>
            <p>Twitter is a platform meant for quick output and high amounts of content. While this makes the app exciting, it is also what leads to users having a lower threshold for what they tweet. Celebrities are by no means exempt from this despite their larger audience. Twitter's API is a well maintained trackrecord of all tweets since 2006 and lets users find tweets by a variety of attributes, including verification, keywords, date, and more.  </p>

         </div>
          &nbsp;
          <div className="column">
            <img src={flatiron} alt="" className="thirdaboutpic"/>
            <h3 className="aboutheaders">
                Background
            </h3>
            <p>This website was created for my final project as a part of The Flatiron School. My aim for this website was not only to maintain internet accountability but also to practice different technologies for web development. This website is made with a Ruby on Rails backend, and Javascript, React, and Redux frontend.</p>
          </div>
       </div>
      </div>
    )
}

export default About;
