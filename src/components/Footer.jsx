import React from 'react'
import "./compoStyle/Footer.css"
import { FooterCol1, FooterCol2, FooterCol3b, FooterRow2, FooterRow3 } from '../constants/index';
import { BsYoutube } from "react-icons/bs"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { ImInstagram } from "react-icons/im"
import { AiOutlineTwitter } from "react-icons/ai"
import withoutbgoriginal from "../Images/withoutbgoriginal.png"
import AppStoreButton from "../Images/btns/AppStoreButton.png"
import GooglePlayBtn from "../Images/btns/google.png"
import fourteen from "../Images/fourteen.png"

// FaFacebookSquare
function Footer() {
    const iconComponents = {
        facebook: BiLogoFacebookSquare,
        twitter: ImInstagram,
        youtube: BsYoutube,
        instagram: AiOutlineTwitter,
    };
    return (
        <div className='footer-parent'>
            <div className="container">
                <div className="row1">
                    <div className="row1a">
                        <div className="col1">
                            {
                                FooterCol1.map(item => (
                                    <div key={item.title} className="footer-col1">
                                        <h2>{item.title}</h2>
                                        <ul className="col1-ul">
                                            {item.links.map(link => (
                                                <li key={link.id}>{link.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>

                        <div className="col6">
                            {
                                FooterRow2.map(item => (
                                    <div key={item.title} className="footer-col1">
                                        <h2>{item.title}</h2>
                                        <ul className="col1-ul">
                                            {item.links.map(link => (
                                                <li key={link.id}>{link.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="row1b">
                        <div className="col2">
                            {
                                FooterCol2.map(item => (
                                    <div key={item.title} className="footer-col1">
                                        <h2>{item.title}</h2>
                                        <ul className="col1-ul">
                                            {item.links.map(link => (
                                                <li key={link.id}>{link.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>

                        <div className="col3">

                            <div className='FooterCol3a'>
                                <h2>EXPERIENCE MYNTRA APP ON MOBILE</h2>
                                <div className='FooterCol3a-div'>
                                    <img src={GooglePlayBtn} alt="google-btn" className="f-img1" id="footer-col3a-img" />
                                    <img src={AppStoreButton} alt="appstore-btn" className="f-img2" id="footer-col3a-img" />
                                </div>
                            </div>

                            {
                                FooterCol3b.map(item => (
                                    <div key={item.title} className="footer-col1">
                                        <h2 className='keep-in-touch'>{item.title}</h2>
                                        <ul className="col3b-ul">
                                            {item.links.map(link => {
                                                const IconComponent = iconComponents[link.id]; // Get the appropriate icon component
                                                return (
                                                    <li key={link.id}>
                                                        <IconComponent style={{ fontSize: "26px", gap: "1rem" }} /> {/* Render the icon component */}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}
                        </div>

                        <div className="col4">
                            <div className="col4-r1">
                                <img src={withoutbgoriginal} alt="original-stamp" />
                                <p><span>100% ORIGINAL</span> guarantee for <br /> all products at myntra.com</p>
                            </div>

                            <div className="col4-r1">
                                <img src={fourteen} alt="original-stamp" style={{ background: "#fff" }} />
                                <p><span>Return within 14days</span> of <br />receiving your order</p>
                            </div>
                        </div>
                        {/* fourteen */}
                        <div className="col5"></div>
                    </div>
                </div>

                <div className="row2">
                    <div className="col7">
                        {
                            FooterRow3.map(item => (
                                <div key={item.title} className="footer-col1">
                                    <h2>{item.title}</h2>
                                    <ul className="foot-row2-ul">
                                        {item.links.map((link,index) => (
                                            <span key={index}>{link} | </span>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="row3">
                    <p>In case of any concern, <span>Contact Us</span></p>
                    <p>© 2023 www.myntra.com. All rights reserved.</p>
                </div>
            </div>
        </div>








    )
}

export default Footer