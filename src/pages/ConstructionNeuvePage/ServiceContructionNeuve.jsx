import { FaArrowDown } from 'react-icons/fa';
import CardExpertise from '../../components/SavoirFaire/CardExpertise';
import { elements } from '../../components/SavoirFaire/SavoirF';
import './ConstructionN.css'

import React from 'react'

function ServiceContructionNeuve() {
    const [isOpen, setIsOpen] = React.useState(null);

    const [cardOpen, setCardOpen] = React.useState(null);
    return (
        <>
            <div className='service-page-HeroContainer'>
                <div className='service-page-Hero-Overlay'></div>
                <div className='service-page-Hero'>
                    <img className='HeroTitle' src="/assets/haidex.svg" alt="haidex-title" />
                    <h1 className="ServiceContructionN-Hero-SubTitle">Construction neuves</h1>
                </div>
            </div>

            <div className='serviceConstruction-page-Content'>

                {/* section 1 */}
                <div className='serviceConstruction-Section1-Container'>
                    <img className='serviceCons-sec1-IMG' src="/assets/ServicesPageAssets/CivilEng.jpg" alt="" />
                    <h1>Construction neuves</h1>
                    <p>Nous accompagnons vos projets de construction neuve, du logement résidentiel aux
                        bâtiments tertiaires et autres infrastructures, avec une expertise en courant fort et faible</p>
                </div>

                {/* section 2 */}

                <div className='serviceConstruction-Section2-Container'>
                    <div className='serviceConstruction-Section2-Card-Container'>
                        <div className='serviceConstruction-Section2-Card'>
                            <img src="/assets/ServicesPageAssets/courantFaibleImg.jpg" alt="" />
                            <div className='serviceConstruction-Section2-Card-Text'>
                                <span>Courant fort</span>
                                <p>Le courant fort regroupe l'ensemble des installations permettant l'alimentation électrique des bâtiments, qu'ils soient résidentiels, tertiaires ou industriels</p>
                                <p>Nos équipes assurent la conception, l'installation et la mise en service d'infrastructures électriques fiables, performantes et conformes aux normes en vigueur.</p>
                                <button type="button" onClick={() => window.location.href = "/contact"}>Nous contacter</button>
                            </div>
                        </div>
                        <div className={`serviceConstruction-Section2-Card-Hidden ${isOpen === "card1" ? "shown" : ""}`}>
                            <ul>
                                <li><span>Distribution courant fort:</span> Installation du réseau électrique principal permettant l'acheminement de l'électricité depuis le point de livraison jusqu'aux équipements (prises, éclairages, appareils...).Cela comprend les câbles, les gaines et leur cheminement dans le bâtiment. </li>
                                <li><span>Incorporation béton:</span> Intégration des conduits et équipements électriques directement dans la structure en béton lors de la construction.</li>
                                <li><span>Colonnes SGX:</span> Installation de colonnes montantes électriques en câble SGX, utilisées dans les bâtiments collectifs pour alimenter les logements ou locaux en électricité à partir du réseau principam</li>
                                <li><span>
                                    Colonnes ENEDIS:</span> Mise en place des colonnes montantes gérées par ENEDIS pour la distribution de l'électricité dans les immeubles.
                                </li>
                                <li><span>Colonnes Terre:</span> Installation des colonnes de terre assurant la mise à la terre de toutes les installations électriques.</li>
                                <li><span>CDC (Coffret de coupure):</span> Coffret installé en limite de propriété, permettant de couper l'alimentation électrique d'un logement ou bâtiment.</li>
                                <li><span>Ventilation:</span> Installation des systèmes de ventilation électrique (VMC, extracteurs) conforme aux réglementations thermiques et sanitaires</li>
                                <li><span>Tableau Abonné:</span> Mise en place des disjoncteurs, interrupteurs différentiels, etc.</li>
                                <li><span>TGBT (Tableau Général Basse Tension):</span> Mise en place du tableau central pour la distribution du courant fort dans les bâtiments tertiaires ou collectifs</li>
                            </ul>
                        </div>
                        <button type='button' onClick={() => isOpen === "" ? setIsOpen("card1") : setIsOpen("")}>Plus</button>
                    </div>
                    <div className='serviceConstruction-Section2-Card-Container'>
                        <div className='serviceConstruction-Section2-Card'>
                            <img src="/assets/ServicesPageAssets/CFI.jpg" alt="" />
                            <div className='serviceConstruction-Section2-Card-Text'>
                                <span>Courant faible</span>
                                <p>Le courant faible concerne l'ensemble des réseaux de communication, de sécurité et de transmission de données au sein du bâtiment.</p>
                                <p>Nous réalisons des installations performantes et évolutives pour répondre aux besoins en téléphonie, informatique, alarme, fibre optique, et plus encore.</p>
                                <button type="button" onClick={() => window.location.href = "/contact"}>Nous contacter</button>
                            </div>
                        </div>
                        <div className={`serviceConstruction-Section2-Card-Hidden ${isOpen === "card2" ? "shown" : ""}`}>
                            <ul>
                                <li><span>Contrôle d'accès:</span>  Installation de systèmes permettant de sécuriser l'accès aux bâtiments ou locaux (badges, digicodes, lecteurs biométriques, interphones, etc.). Ils assurent une gestion efficace des entrées et sorties. </li>
                                <li><span>Réseau Informatique:</span> Mise en place de l'infrastructure réseau pour la transmission de données (câblage Ethernet, prises RJ45, switchs, etc.).</li>
                                <li><span>Réseau Téléphonie:</span> Installation des lignes téléphoniques internes ou externes, avec les équipements adaptés (prises téléphoniques, répartiteurs, etc.).</li>
                                <li><span>Baie de brassage:</span> Mise en œuvre d'armoires techniques regroupant l'ensemble des connexions réseau (informatique, téléphonie, vidéosurveillance, etc.).</li>
                                <li><span>Désenfumage:</span> Intégration de systèmes électriques de désenfumage (volets, exutoires, commandes)..</li>
                                <li><span>Alarme Incendie / Intrusion:</span> Installation de dispositifs de détection d'incendie (DAI) ou de systèmes anti-intrusion.</li>
                                <li><span>Fibre Optique:</span> Déploiement de la fibre optique pour un accès Internet très haut débit.</li>

                            </ul>
                        </div>
                        <button type='button' onClick={() => isOpen === "" ? setIsOpen("card2") : setIsOpen("")}>Plus</button>
                    </div>
                    <div className='serviceConstruction-Section2-Card-Container'>
                        <div className='serviceConstruction-Section2-Card'>
                            <img src="/assets/expertise/smart-house.jpg" alt="" />
                            <div className='serviceConstruction-Section2-Card-Text'>
                                <span>Domotique</span>
                                <p>La domotique transforme votre bâtiment en un espace intelligent, confortable et économe en énergie. Grâce à des technologies connectées, vous pouvez piloter à distance l’éclairage, le chauffage, les volets ou encore les prises électriques depuis votre smartphone ou votre tablette.</p>
                                <p>Ces solutions permettent non seulement de gagner en confort au quotidien, mais aussi de mieux gérer votre consommation d’énergie. Que ce soit pour programmer le chauffage, automatiser l’ouverture des volets ou éteindre les lumières à distance, la domotique vous offre un contrôle simple, pratique et efficace de votre environnement.</p>
                                <button type="button" onClick={() => window.location.href = "/contact"}>Nous contacter</button>
                            </div>
                        </div>
                        <div className={`serviceConstruction-Section2-Card-Hidden ${isOpen === "card3" ? "shown" : ""}`}>
                            <ul>
                                <li><span>Éclairage connecté:</span>  Mise en place de systèmes d'éclairage contrôlables via smartphone, interrupteurs sans fil ou assistant vocal. </li>
                                <li><span>Volets connectés:</span> Motorisation et automatisation des volets roulants.</li>
                                <li><span>Chauffage / Thermostat connecté:</span> Installation de thermostats intelligents permettant de gérer la température pièce par pièce, à distance ou selon des scénarios programmés.</li>
                                <li><span>Prises connectées:</span> Installation de prises intelligentes permettant de contrôler les appareils électriques à distance.</li>
                            </ul>
                        </div>
                        <button type='button' onClick={() => isOpen === "" ? setIsOpen("card3") : setIsOpen("")}>Plus</button>
                    </div>

                </div>

                <div className='serviceConstruction-Section3-Container'>
                    <h1>Exemples de réalisations - Construction neuves</h1>
                    <span>Vous pourrez peut-être vous identifiez</span>
                    <div className='ServicePageCenter-Section3-card'>
                        <div className='ServicePageCenter-Section3-card-InnerContainerTop' onClick={() => cardOpen === "card1" ? setCardOpen('') : setCardOpen('card1')} >
                            <span>Logement</span>
                            <FaArrowDown />
                        </div>
                        <div className={`ServicePageCenter-Section3-card-InnerContainerHidden ${cardOpen == "card1" ? 'shown' : ''}`} >
                            <ul>
                                <li>Installation domotique dans une <span className='Section3-card-hightlight'>villa</span> neuve (volets, éclairage, thermostat connectés).</li>
                                <li>Réalisation des colonnes montantes ENEDIS et SGX dans un immeuble de 12 <span className='Section3-card-hightlight'>logements</span></li>
                                <li>Incorporation béton des réseaux électriques dans un programme de 10 <span className='Section3-card-hightlight'>maisons</span> mitoyennes</li>
                                <li>Installation des tableaux abonnés et coffrets de coupure pour un <span className='Section3-card-hightlight'>lotissement résidentiel</span></li>
                            </ul>
                            <img className='ServicePageCenter-Section3-card-img' src="/assets/ServicesPageAssets/VerticalWhiteBuilding.jpg" alt="" />
                        </div>
                    </div>
                    <div className='ServicePageCenter-Section3-card'>
                        <div className='ServicePageCenter-Section3-card-InnerContainerTop' onClick={() => cardOpen === "card2" ? setCardOpen("") : setCardOpen("card2")} >
                            <span>Tertiaire</span>
                            <FaArrowDown />
                        </div>
                        <div className={`ServicePageCenter-Section3-card-InnerContainerHidden ${cardOpen === "card2" ? 'shown' : ''}`} >
                            <ul>
                                <li>Réalisation du TGBT, des tableaux divisionnaires et du réseau informatique dans un <span className='Section3-card-hightlight'>immeuble de bureaux</span></li>
                                <li>Installation complète (courant fort/faible) d'un <span className='Section3-card-hightlight'>commerce</span> en <span className='Section3-card-hightlight'>pied d'immeuble</span></li>
                                <li>Système d'éclairage connecté + contrôle d'accès dans un <span className='Section3-card-hightlight'>centre d'affaires</span></li>
                                <li>Baie de brassage + fibre optique dans un <span className='Section3-card-hightlight'>bâtiment de coworking</span></li>
                            </ul>
                            <img className='ServicePageCenter-Section3-card-img' src="/assets/ServicesPageAssets/Vertical-low-angle.jpg" alt="" />
                        </div>
                    </div>
                    <div className='ServicePageCenter-Section3-card'>
                        <div className='ServicePageCenter-Section3-card-InnerContainerTop' onClick={() => cardOpen === "card3" ? setCardOpen("") : setCardOpen("card3")} >
                            <span>ERP</span>
                            <FaArrowDown />
                        </div>
                        <div className={`ServicePageCenter-Section3-card-InnerContainerHidden ${cardOpen === "card3" ? 'shown' : ''}`}>
                            <ul>
                                <li>Installation électrique d'un <span className='Section3-card-hightlight'>gymnase</span> neuf (TGBT, éclairage sportif, ventilation)</li>
                                <li>Réseau courant faible complet dans une <span className='Section3-card-hightlight'>école maternelle</span></li>
                                <li>Colonnes de terre + coffrets de coupure dans un <span className='Section3-card-hightlight'>entrepôt</span> logistique</li>
                                <li>Mise en place du contrôle d'accès et de la vidéosurveillance dans une <span className='Section3-card-hightlight'>médiathèque</span></li>
                            </ul>
                            <img className='ServicePageCenter-Section3-card-img' src="/assets/ServicesPageAssets/emptyHall.jpg" alt="" />
                        </div>
                    </div>
                </div>

                {/*Section 4  */}
                <div className='ServiceConstruction-Section4'>
                    <h1>Nos autres Services</h1>
                    <div className='SavoirFaire-Elements'>
                        {Object.keys(elements).map((key) => {
                            return (
                                <CardExpertise link={elements[key].page} title={elements[key].title} imgURL={elements[key].imgURL} listePF={elements[key].listePF} key={key} /> // Pass the key as a prop to CardExpertise
                            )
                        }
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}

export default ServiceContructionNeuve