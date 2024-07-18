import React from 'react'
import './aboutCardsSection.css'

const AboutCardsSection = () => {
  return (
    <div className="aboutCardsSection">
        <div className="why">
            <div className="top-section">
                <div className="left-side">
                    <h1>Why Nesters?</h1>
                    <div className='section-content'>
                        <div className='line'></div>
                        <div className="paragraph">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. </p>
                            <button>Get started</button>
                        </div>
                    </div>
                </div>

                <div className="right-side">

                </div>
            </div>
        </div>

        <div className="card">
            <div>
                <h1>Title 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                Quam vel aliquam sit vulputate. </p>
            </div>
            <div>
                <h1>Title 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                Quam vel aliquam sit vulputate. </p>
            </div>
            <div>
                <h1>Title 3</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                Quam vel aliquam sit vulputate. </p>
            </div>
            <div>
                <h1>Title 4</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                Quam vel aliquam sit vulputate. </p>
            </div>
        </div>

    </div>
  )
}

export default AboutCardsSection