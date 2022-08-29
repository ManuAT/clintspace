import React from 'react'

function ContainerHeader({ para, header }) {
    return (
        <div className="commonHeader">
            <span className='flex flex-col' >
                <h2 className='text-hero' style={{
                    fontFamily:"Catamaran",
                    fontWeight: 600,
                    fontSize: 44,
                    fontStyle: "normal"
                    }}>{header} </h2>
                <p className='   text-subPara' style={{fontFamily:'Lato',fontStyle: "normal",fontWeight: 400,fontSize: 18,lineHeight: '140%' }} > {para} </p>
            </span >
        </div>
    )
}

export default ContainerHeader