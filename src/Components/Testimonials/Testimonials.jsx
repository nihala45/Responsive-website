import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; // Changed `x` to `tx` to match the variable used in slide functions

  const slideForward = () => {
    if (tx > -75) { // Adjusted condition: limit for 4 slides is -75%
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) { // Adjusted condition: prevent `tx` from going above 0
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, and commitment to academic 
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, and commitment to academic 
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, and commitment to academic 
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, and commitment to academic 
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
