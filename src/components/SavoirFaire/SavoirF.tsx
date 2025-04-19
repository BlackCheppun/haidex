import React from 'react'
import './SavoirFr.css'
import CardExpertise from './CardExpertise'


const elements = {
    0: {
        title: "Courant fort",
        imgURL: "../../../public/assets/expertise/eletricity-tower.jpg",
        listePF: ["Installation électrique", "Maintenance électrique", "Mise en conformité", "Rénovation électrique"]
    }
    ,
    1: {
        title: "Courant faible",
        imgURL: "../../../public/assets/expertise/electrician.jpg",
        listePF: ["Installation électrique", "Maintenance électrique", "Mise en conformité", "Rénovation électrique"]
    }
    ,
    2: {
        title: "Domotique",
        imgURL: "../../../public/assets/expertise/smart-house.jpg",
        listePF: ["Installation électrique", "Maintenance électrique", "Mise en conformité", "Rénovation électrique"]
    },
    3: {
        title: "Construction spécialisés",
        imgURL: "../../../public/assets/expertise/tiler.jpg",
        listePF: ["Installation électrique", "Maintenance électrique", "Mise en conformité", "Rénovation électrique"]
    },
    4: {
        title: "Plomberie",
        imgURL: "../../../public/assets/expertise/plumber.jpg",
        listePF: ["Installation électrique", "Maintenance électrique", "Mise en conformité", "Rénovation électrique"]
    },
    5: {
        title: "Ventilation",
        imgURL: "../../../public/assets/expertise/drill.jpg",
        listePF: ["Installation électrique", "Maintenance électrique", "Mise en conformité", "Rénovation électrique"]
    },
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

            <a className="SavoireFaire-btn" onClick={() => console.log("click")}>Découvrir Plus</a>

        </div>
    )
}

export default SavoirF