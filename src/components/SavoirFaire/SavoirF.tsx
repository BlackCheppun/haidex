import React from 'react'
import './SavoirFr.css'
import CardExpertise from './CardExpertise'


export const elements = {
    0: {
        title: "Consrtuction neuve",
        imgURL: "/assets/expertise/electrician.jpg",
        listePF: ["1. Tertiaire", "2. Logement", "3. Autre"]
    }
    ,
    1: {
        title: "Réhabilitation",
        imgURL: "/assets/expertise/drill.jpg",
        listePF: ["1. Tertiaire", "2. Logement", "3. Autre"]
    }
}



function SavoirF() {
    return (
        <div className='SavoirFaire-Container'>
            <h1>Notre Savoir faire</h1>
            <div className='SavoirFaire-Elements'>
                {Object.keys(elements).map((key) => {
                    return (
                        <CardExpertise title={elements[key].title} imgURL={elements[key].imgURL} listePF={elements[key].listePF} key={key} /> // Pass the key as a prop to CardExpertise
                    )
                }
                )}
            </div>

        </div>
    )
}

export default SavoirF