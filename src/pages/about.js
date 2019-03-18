import React, { Component } from 'react';


class About extends Component {
    render(){
        return (
        <div>
            <h1>About Page</h1>
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="http://i.piccy.info/i9/d5f0bfe53ee53987fa8b3c8923981d76/1552892967/522632/1308060/20171212_IMG_0322.jpg" />
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                 <ul>
                   <li><strong>First Name</strong>: Oleh</li>
                   <li><strong>Second Name</strong>: Parfeniuk</li>
                   <li><strong>Contact Information </strong>: + 38 (066) 72-44-256  </li>
                   <li><strong>Summary of Qualifications</strong>: Highly motivated, hard working front-end developer with 1 year of professional experience. I simply love a challenge: to invent something completely new, to emphasize a detail of an ordinary thing, to make old thing look shiny and new, or the new thing more desirable, for whatever quality it brings. </li>
                   <li><strong>Education</strong>: B.Sc. in Software Engineering Dnipropetrovsk national university of railway transport named after academician V.Lazaryan Software Engineering Graduated in 2018 </li>
                   <li><strong>Internships </strong>: Softserve inc. WebUI development, design and architecture of modern software systems (Serie AA №8480/2018) </li>
                 </ul>
              </div>
            </div>
            </div>
          );
    }
}

export default About