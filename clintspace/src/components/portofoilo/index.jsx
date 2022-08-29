import { useState } from "react"
import ContainerHeader from "../common/ContainerHeader"
import { PROTOFOILO_PARAGRAPH, PROTOFOILO_TABS_AND_IMAGES } from "./portofoilo"

function Portofoilo() {

    const [tab, setTab] = useState(PROTOFOILO_TABS_AND_IMAGES[0]);

    return (
        <div id="portfolio" className="pagePadding" >
            <ContainerHeader header="Our portofoilo" para={PROTOFOILO_PARAGRAPH} />

            <span className="tabs" >
                {PROTOFOILO_TABS_AND_IMAGES.map(item => <>

                    <p className={tab.label === item.label && "tabButton"} onClick={() => setTab(item)} style={{
                    fontFamily:"Catamaran",
                    fontWeight: 400,
                    fontSize: 18,
                    fontStyle: "normal"
                    }} > {item.label} </p>

                </>)}
            </span>

            <div className="imageWraper">
                <div className="parent" >

                    <div className="div1"> <img src={tab.images[0]} alt="image1" /> </div>
                    <div className="div2"> <img src={tab.images[1]} alt="image2" /> </div>
                    <div className="div3"> <img src={tab.images[2]} alt="image3" /> </div>
                    <div className="div4"> <img src={tab.images[3]} alt="image4" /> </div>
                    <div className="div5"> <img src={tab.images[4]} alt="image5" /> </div>
                    <div className="div6"> <img src={tab.images[5]} alt="image6" /> </div>


                </div>
            </div>
        </div>
    )
}

export default Portofoilo