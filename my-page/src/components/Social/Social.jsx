import React from 'react'
import Link from 'gatsby-link'
// import "./Social.scss"


const Social = () => (
    <div className="social">
            <ul className="social__ul">
                <li className="social__li">
                    <a href="https://github.com/boxior" className="social__link">
                        <img src="./img/github.png" alt=""/>
                    </a>
                </li>
                <li className="social__li">
                    <a href="https://www.linkedin.com/in/serhii-lyzun-79870b146/" className="social__link">
                        <img src="./img/linkedin.png" alt=""/>
                    </a>
                </li>
            </ul>
    </div>
)

export default Social;
