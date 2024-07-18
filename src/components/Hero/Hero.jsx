import React from 'react'
import './hero.css'
import rightImg from '../../assets/rightImg.png'
import NumberCounter from 'react-countup';

const Hero = () => {
  return (
    <div className='home'>
        <div className="home-page">
            <div className="left">
                <h1 className='left-title'>Empowering Your Financial Future with Innovation</h1>
                <p className='left-paragraph'>Our Fintech company revolutionizes the way you manage your finances by combining cutting-edge technology with personalized service. We offer secure, user-friendly solutions that streamline your financial activities</p>
                <button>Get Started</button>
                <div className="all-cards">
                    <div className="row-cards">
                        <div className="cards">
                         <h1><NumberCounter end={178} start={100} duration={4} suffix="k+"></NumberCounter></h1>
                            <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet,</p>
                        </div>
                        <div className="cards">
                        <h1><NumberCounter end={362} start={200} duration={4}></NumberCounter></h1>
                            <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet,</p>
                        </div>
                    </div>
                    <div className="cards third-card">
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet. Lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={rightImg} alt="" />
            </div>
        </div>  
        <hr /> 
    </div> 
  )
}

export default Hero