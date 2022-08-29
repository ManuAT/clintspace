import React from 'react'
import ContainerHeader from '../common/ContainerHeader'
import { SERVICES_ITEMS, SERVICES_PARAGRAPH } from './servicesUtils'
// import { code } from "../../../public/code.png"


function Services() {


    const getServiceItems = () => SERVICES_ITEMS.map(item => <div className='servicesItems' >
        <img src={item.image} alt="" />
        <h5 style={{
                    fontFamily:"Catamaran",
                    fontWeight: 600,
                    fontSize: 28,
                    fontStyle: "normal"
                    }}> {item.heading} </h5>
        <p style={{fontFamily:'Lato',fontStyle: "normal",fontWeight: 400,fontSize: 18,lineHeight: '140%' }}> {item.about} </p>

    </div>)

    return (
        <div className='bg-primary_white services  pagePadding ' id='services'>

            <ContainerHeader para={SERVICES_PARAGRAPH} header="Our Services"  />

            <div className=" servicesListWraper ">

                {
                    getServiceItems()
                }

            </div>


        </div>
    )
}

export default Services 