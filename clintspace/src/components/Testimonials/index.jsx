import React, { useRef } from 'react'
import ContainerHeader from '../common/ContainerHeader'
import { LEFT_ICON, RIGHT_ICON } from '../Team/TeamUtils'
import { TESTIMONIALS_LIST, TESTIMONIALS_PARA } from './testimonialsUtils'

function Testmonials() {

    const card = useRef();
    const scroll = (scrollOffset) => {
        card.current.scrollLeft += scrollOffset;

    };

    const makeTestCard = () => TESTIMONIALS_LIST.map((item, i) => <>
        <div className={i === 1 ? "testCard lg:-translate-y-32 " : "testCard"}>
            <div className="testImageWraper">
                <div className="overlay"></div>
                <img src={item.image} alt="" />
            </div>

            <h4 style={{
                    fontFamily:"Catamaran",
                    fontWeight: 600,
                    fontSize: 22,
                    fontStyle: "normal"
                    }}> {item.name} </h4>
            <p style={{
                    fontFamily:"Lato",
                    fontWeight: 400,
                    fontSize: 18,
                    fontStyle: "normal"
                    }} > {item.company} </p>
            <hr />
            <p style={{
                    fontFamily:"Lato",
                    fontWeight: 400,
                    fontSize: 18,
                    fontStyle: "normal"
                    }}> {item.testimonial} </p>

        </div>

    </>)



    return (
        <div className='pagePadding bg-primary_white '>
            <ContainerHeader para={TESTIMONIALS_PARA} header="Testimonials" />

            <div className="testCardWarper " ref={card}>
                {makeTestCard()}
            </div>

            {
                <div className="buttonRow bottomButtonRow">
                    <button onClick={() => scroll(-300)}> {LEFT_ICON}  </button>
                    <button onClick={() => scroll(300)} > {RIGHT_ICON} </button>
                </div>

            }

        </div>
    )
}

export default Testmonials