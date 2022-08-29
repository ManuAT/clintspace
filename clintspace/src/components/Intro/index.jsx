import React from 'react'
import { RiChat1Line } from 'react-icons/ri';
import { INTRO_PARAGRAPH } from '../../constants/introParagraph';


function IntroComponent() {
    return (
        <div className="intro" id='Home'>
            <div className="introText">
                <h2 style={{
                    fontFamily:"Catamaran",
                    fontWeight: 600,
                    fontSize: 56,
                    fontStyle: "normal"
                    }}>
                    <span>   We are </span> <span>  Creative Agency</span>
                </h2>
                {INTRO_PARAGRAPH}
                <div className="inputGroup">
                    <input type="text" placeholder='Email or Phone' />
                    <button>  <RiChat1Line /> Get A Quote </button>
                </div>
            </div>
            <div className="introImage">
                <img src="./egg.png" alt="" />
            </div>
        </div>
    )
}

export default IntroComponent