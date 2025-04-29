import React from 'react'
import './ServicePage.css'
import { FaArrowDown } from 'react-icons/fa'
import { elements } from '../../components/SavoirFaire/SavoirF';
import CardExpertise from '../../components/SavoirFaire/CardExpertise';

function ServicePage() {

    const [isOpenFirst, setIsOpenFirst] = React.useState(false);
    const [isOpenSecond, setIsOpenSecond] = React.useState(false);
    const [isOpenThird, setIsOpenThird] = React.useState(false);

    return (
        <>
            <div className='service-page-HeroContainer'>
                <div className='service-page-Hero-Overlay'></div>
                <div className='service-page-Hero'>
                    <img className='HeroTitle' src="/assets/haidex.svg" alt="haidex-title" />
                    <h1 className="HeroSubTitle">Rénovation/Réhabilitations</h1>
                </div>
            </div>
            <div className='ServicesPageCenter'>

                {/* Hero section of Service Page ( contains an introduction to the ) */}

                <div className='ServicesPageCenter-Section1'>
                    <img className='ServicePageCenter-Section1-IMG' src="/assets/ServicesPageAssets/Electrician.jpg" alt="Picture of an electrician" />
                    <span className='ServicePageCenter-Section1-Title'>Rénovation/Réhabilitations</span>
                    <p className='ServicePageCenter-Section1-text'>Nous intervenons sur des bâtiments existants pour moderniser, sécuriser et adapter les installations électriques aux besoins actuels. Qu'il s'agisse de logements, de bâtiments tertiaires ou d'établissements recevant du public (ERP)</p>
                </div>

                {/* section des cartes avec groupeBtn */}

                <div className='ServicesPageCenter-Section2'>
                    <div className='ServicePageCenter-Section2-card'>
                        <div className='ServicePageCenter-Section2-card-InnerContainer'>
                            <img className='ServicePageCenter-Section2-cardIMG' src="/assets/ServicesPageAssets/tiler.jpg" alt="" />
                            <div>
                                <span className="ServicePageCenter-Section2-CardTitle">Mise en conformité</span>
                                <p>Nous adaptons les installations électriques aux normes en vigueur, notamment la norme <span style={{ fontWeight: 800 }}>NF C 15-100</span> pour le résidentiel.</p>
                                <p>Grâce à notre expertise en courant fort, courant faible et domotique (Pour plus d'info cliquez sur '<span style={{ fontWeight: 800 }}>En savoir plus</span>'). Nous réalisons des travaux soignés, durables, et à l'esthétique impeccable — au point que vous pourriez croire à une construction neuve.
                                    Elle concerne généralement :</p>
                                <ul>
                                    <li>- Le <span className='ServicePageCenter-Section2-Card-highlight'>remplacement</span> ou <span className='ServicePageCenter-Section2-Card-highlight'>l'ajout</span> de dispositifs de protections  (disjoncteurs, différentiels…).</li>
                                    <li>- La <span className='ServicePageCenter-Section2-Card-highlight'>mise à la terre</span> des installations.</li>
                                    <li>- L'<span className='ServicePageCenter-Section2-Card-highlight'>installation</span> ou le <span className='ServicePageCenter-Section2-Card-highlight'>remplacement</span> du tableau électrique.</li>
                                    <li>- L'<span className='ServicePageCenter-Section2-Card-highlight'>ajustement</span> du nombre de circuits selon l'usage (prises, éclairages, électroménager…)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ServicePageCenter-Section2-card-ButtonGroupe">
                            <button type="button">En savoir plus</button>
                            <button type="button">Nous contacter</button>
                        </div>
                    </div>
                    <div className='ServicePageCenter-Section2-card'>
                        <div className='ServicePageCenter-Section2-card-InnerContainer'>
                            <img className='ServicePageCenter-Section2-cardIMG' src="/assets/ServicesPageAssets/drill.jpg" alt="" />
                            <div>
                                <span className="ServicePageCenter-Section2-CardTitle">Mise en sécurité</span>
                                <p>Lors d’une mise en sécurité, notre équipe réalise un audit technique de votre installation, identifie les zones à risque, puis intervient de manière ciblée pour éliminer les dangers immédiats. (Pour plus d'info sur notre savoir faire, cliquez sur'<span style={{ fontWeight: 800 }}>En savoir plus</span>').
                                </p>
                                <p>Elle est souvent mise en œuvre en cas de diagnostic électrique défavorable, ou avant des travaux de rénovation.
                                    Elle comprend notamment :</p>
                                <ul>
                                    <li>- Le <span className='ServicePageCenter-Section2-Card-highlight'>remplacement</span> des équipements vétustes ou dangereux.</li>
                                    <li>- La <span className='ServicePageCenter-Section2-Card-highlight'>protection</span> des circuits les plus sensibles (cuisine, salle de bain, etc.)</li>
                                    <li>- L' <span className='ServicePageCenter-Section2-Card-highlight'>ajout</span> d'un dispositif différentiel 30mA au minimum.</li>
                                    <li>- L'<span className='ServicePageCenter-Section2-Card-highlight'>isolation</span> des conducteurs dénudés ou mal fixés.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ServicePageCenter-Section2-card-ButtonGroupe">
                            <button type="button">En savoir plus</button>
                            <button type="button">Nous contacter</button>
                        </div>
                    </div>
                    <div className='ServicePageCenter-Section2-card'>
                        <div className='ServicePageCenter-Section2-card-InnerContainer'>
                            <img className='ServicePageCenter-Section2-cardIMG' src="/assets/ServicesPageAssets/handyman.jpg" alt="" />
                            <div>
                                <span className="ServicePageCenter-Section2-CardTitle">Remise à neuf des installations</span>
                                <p>Dans le cadre d'une remise à neuf, notre équipe procède à une rénovation complète de l'installation électrique, pour repartir sur des bases saines, modernes et performantes.  (Pour plus d'info sur notre savoir faire, cliquez sur '<span style={{ fontWeight: 800 }}>En savoir plus</span>').</p>
                                <p>Il s'agit d'une rénovation complète de l'installation électrique, souvent dans le cadre d'un réaménagement global d'un logement ou d'un local professionnel.
                                    Elle comprend :</p>
                                <ul>
                                    <li>- La <span className='ServicePageCenter-Section2-Card-highlight'>dépose</span> de l'ancienne installation.</li>
                                    <li>- Le <span className='ServicePageCenter-Section2-Card-highlight'>tirage</span> de nouveaux câbles (courant fort/faible)</li>
                                    <li>- La <span className='ServicePageCenter-Section2-Card-highlight'>pose</span> d'un nouveau tableau électrique.</li>
                                    <li>- L'<span className='ServicePageCenter-Section2-Card-highlight'>intégration</span> éventuelle de systèmes domotiques (volets, éclairage, chauffage connecté, etc.)</li>
                                    <li>- L'<span className='ServicePageCenter-Section2-Card-highlight'>ajout</span> de nouvelles prises, interrupteurs, éclairages ou équipements selon les besoins</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ServicePageCenter-Section2-card-ButtonGroupe">
                            <button type="button">En savoir plus</button>
                            <button type="button">Nous contacter</button>
                        </div>
                    </div>
                </div>


                {/* Section 3  */}

                <div className="ServicePageCenter-Section3">
                    <h1>Exemples de réalisations - Réhabilitation</h1>
                    <span>Vous pourrez peut êtres vous identifiez</span>
                    <div className='ServicePageCenter-Section3-card'>
                        <div className='ServicePageCenter-Section3-card-InnerContainerTop' onClick={() => setIsOpenFirst(!isOpenFirst)} >
                            <span>Logement</span>
                            <FaArrowDown />
                        </div>
                        <div className={`ServicePageCenter-Section3-card-InnerContainerHidden ${isOpenFirst ? 'shown' : ''}`} >
                            <ul>
                                <li>Rénovation complète d'un <span className='Section3-card-hightlight'>appartement</span> avec mise aux normes électrique (courant fort + faible)</li>
                                <li>Mise en sécurité d'un <span className='Section3-card-hightlight'>appartement ancien</span> : reprise des circuits dangereux, ajout de protections, ventilation</li>
                                <li>Remise à neuf complète des installations électriques dans un <span className='Section3-card-hightlight'>pavillon</span> (courant fort + courant faible + début de domotique)</li>
                                <li>Isolation thermique et phonique d'un <span className='Section3-card-hightlight'>immeuble ancien</span></li>
                                <li>Transformation de   en espace habitable avec création de points lumineux et prises etc</li>
                            </ul>
                            <img className='ServicePageCenter-Section3-card-img' src="/assets/ServicesPageAssets/VerticalWhiteBuilding.jpg" alt="" />
                        </div>
                    </div>
                    <div className='ServicePageCenter-Section3-card'>
                        <div className='ServicePageCenter-Section3-card-InnerContainerTop' onClick={() => setIsOpenSecond(!isOpenSecond)} >
                            <span>Tertiaire</span>
                            <FaArrowDown />
                        </div>
                        <div className={`ServicePageCenter-Section3-card-InnerContainerHidden ${isOpenSecond ? 'shown' : ''}`} >
                            <ul>
                                <li>Rénovation électrique complète dans un <span className='Section3-card-hightlight'>cabinet médical</span> : TGBT, courant faible, désenfumage</li>
                                <li>Mise aux normes incendie et ajout d'un système d'alarme intrusion dans une <span className='Section3-card-hightlight'>boutique</span></li>
                                <li>Remise à niveau du réseau informatique et remplacement de la baie de brassage dans des <span className='Section3-card-hightlight'>bureaux</span></li>
                                <li>Modernisation d'un <span className='Section3-card-hightlight'>local commercial</span> : nouvelle distribution électrique, éclairage vitrine, intégration d'alarme et vidéosurveillance</li>
                                <li>Ajout d'un système de <span className='Section3-card-hightlight'>GTB</span> (Gestion Technique du Bâtiment) pour optimiser chauffage, ventilation et éclairage</li>
                            </ul>
                            <img className='ServicePageCenter-Section3-card-img' src="/assets/ServicesPageAssets/bottomViewModernB.jpg" alt="" />
                        </div>
                    </div>
                    <div className='ServicePageCenter-Section3-card'>
                        <div className='ServicePageCenter-Section3-card-InnerContainerTop' onClick={() => setIsOpenThird(!isOpenThird)} >
                            <span>ERP</span>
                            <FaArrowDown />
                        </div>
                        <div className={`ServicePageCenter-Section3-card-InnerContainerHidden ${isOpenThird ? 'shown' : ''}`}>
                            <ul>
                                <li>Mise en conformité des colonnes ENEDIS et tableaux dans une <span className='Section3-card-hightlight'>école primaire</span></li>
                                <li>Réhabilitation électrique d'un centre associatif : courant fort, fibre, alarme.</li>
                                <li>Sécurisation du réseau de ventilation et du désenfumage dans un <span className='Section3-card-hightlight'>gymnase</span></li>
                                <li>Modernisation du système électrique dans un <span className='Section3-card-hightlight'>atelier de production</span> (ventilation, coffrets, éclairage)</li>
                                <li>Mise en accessibilité PMR d'une <span className='Section3-card-hightlight'>mairie</span> : automatisation des portes, éclairage renforcé, signalétique lumineuse.</li>
                                <li>Refonte des installations scéniques (son, lumière, courant fort), sécurisation du public.</li>
                            </ul>
                            <img className='ServicePageCenter-Section3-card-img' src="/assets/ServicesPageAssets/emptyHall.jpg" alt="" />
                        </div>
                    </div>
                </div>

                {/*Section 4  */}
                <div className='ServicePageCenter-Section4'>
                    <h1>Nos autres Services</h1>
                    <div className='SavoirFaire-Elements'>
                        {Object.keys(elements).map((key) => {
                            return (
                                <CardExpertise title={elements[key].title} imgURL={elements[key].imgURL} listePF={elements[key].listePF} key={key} /> // Pass the key as a prop to CardExpertise
                            )
                        }
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}

export default ServicePage