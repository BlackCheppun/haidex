import React from 'react'
import './SavoirFr.css'
import CardExpertise from './CardExpertise'


export const elements = {
    0: {
        title: "Consrtuction neuve",
        imgURL: "/assets/expertise/card-consNeuve.jpg",
        listePF: ["1. Tertiaire", "2. Logement", "3. ERP"],
        page: "/services/ConstructionNeuve"
    }
    ,
    1: {
        title: "Réhabilitation",
        imgURL: "/assets/expertise/card-Renov.jpg",
        listePF: ["1. Tertiaire", "2. Logement", "3. ERP"],
        page: "/services/Renov"
    }
}



function SavoirF() {
    return (
        <div className='SavoirFaire-Container'>
            <h1>Notre Savoir faire</h1>
            <div className='SavoirFaire-Elements'>
                {Object.keys(elements).map((key) => {
                    return (
                        <CardExpertise link={elements[key].page} title={elements[key].title} imgURL={elements[key].imgURL} listePF={elements[key].listePF} key={key} /> // Pass the key as a prop to CardExpertise
                    )
                }
                )}
            </div>

        </div>
    )
}

export default SavoirF