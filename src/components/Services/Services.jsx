import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';
import servicesImg1 from '../../assets/servicesImg1.png';
import servicesImg2 from '../../assets/servicesImg2.png';
import cloud from '../../assets/cloud.png';

const Services = () => {
  return (
    <div className="services">
      <div className="main-services">
        <div className="left-service">
          <h1 data-aos="fade-right">Our Services</h1>
          <p data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            in libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.
          </p>
          <Link to="/about"> {/* Use Link instead of button */}
            <button data-aos="fade-right">Explore</button>
          </Link>
        </div>
        <div className="right-service">
          <img data-aos="fade-right" src={servicesImg1} alt="" />
          <img data-aos="fade-left" src={servicesImg2} alt="" />
        </div>
      </div>
      <div data-aos="fade-up" className="services-bottom">
        <div>
          <img src={cloud} alt="" />
          <h1>Mobile Banking</h1>
          <p>
            Seamlessly manage your accounts, transfer funds, and pay bills from
            anywhere
          </p>
        </div>
        <div>
          <img src={cloud} alt="" />
          <h1>Investment Management</h1>
          <p>
            Access expert investment advice and tools to grow your wealth.
          </p>
        </div>
        <div>
          <img src={cloud} alt="" />
          <h1>Payment Processing</h1>
          <p>
            Simplify your business transactions with our efficient and secure
            payment processing solutions.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Services;
