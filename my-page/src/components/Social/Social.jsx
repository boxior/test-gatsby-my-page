import React from 'react'
import Link from 'gatsby-link';
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";


const Social = () => (
    <div className="social">
            <ul className="social__ul">
                <li className="social__li">
                    <a href="https://github.com/boxior" className="social__link" target="_blank">
                        <img src={Github} alt="Github"/>
                    </a>
                </li>
                <li className="social__li">
                    <a href="https://www.linkedin.com/in/serhii-lyzun-79870b146/" className="social__link" target="_blank">
                        <img src={Linkedin} alt="Linkedin"/>
                    </a>
                </li>
            </ul>
    </div>
)

export default Social;
