import React, { useEffect, useRef, useState } from 'react';
import './teams.css';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.jpg';
import team4 from '../../assets/team4.png';
import team5 from '../../assets/team5.png';
import coffee from '../../assets/coffee.png';
import NumberCounter from 'react-countup';

const Teams = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (counterRef1.current && counterRef2.current && counterRef3.current) {
      observer.observe(counterRef1.current);
      observer.observe(counterRef2.current);
      observer.observe(counterRef3.current);
    }

    return () => {
      if (counterRef1.current && counterRef2.current && counterRef3.current) {
        observer.unobserve(counterRef1.current);
        observer.unobserve(counterRef2.current);
        observer.unobserve(counterRef3.current);
      }
    };
  }, []);

  return (
    <div className="team">
      <h1 className="title">Our Amazing team</h1>

      <div className="team-status">
        <div>
          <img src={coffee} alt="" />
          <h1 ref={counterRef1}>
            {isVisible && <NumberCounter end={190} start={100} duration={4} suffix="+"></NumberCounter>}
          </h1>
          <p>Companies</p>
        </div>
        <div>
          <img src={coffee} alt="" />
          <h1 ref={counterRef2}>
            {isVisible && <NumberCounter end={123} start={100} duration={4} suffix="K+"></NumberCounter>}
          </h1>
          <p>Employees</p>
        </div>
        <div>
          <img src={coffee} alt="" />
          <h1 ref={counterRef3}>
            {isVisible && <NumberCounter end={58} start={20} duration={4}></NumberCounter>}
          </h1>
          <p>Partners</p>
        </div>
      </div>

      <div className="team-pic">
        <div data-aos="fade-up">
          <img src={team1} alt="" />
          <p>Et integer facilisi eget</p>
        </div>
        <div data-aos="fade-up">
          <img src={team2} alt="" />
          <p>Et integer facilisi eget</p>
        </div>
        <div data-aos="fade-up">
          <img src={team3} alt="" />
          <p>Et integer facilisi eget</p>
        </div>
        <div data-aos="fade-up">
          <img src={team4} alt="" />
          <p>Et integer facilisi eget</p>
        </div>
        <div data-aos="fade-up">
          <img src={team5} alt="" />
          <p>Et integer facilisi eget</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Teams;
