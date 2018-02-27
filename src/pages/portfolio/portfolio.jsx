import React from 'react';
import Link from 'gatsby-link';
import CelendarImg from "../../images/test-celendar.jpg";
import DonationImg from "../../images/test-donation.jpg";

const Portfolio = () => (
    <div className="portfolio container">
        <h1 className="portfolio__title title">Hi from my Portfolio</h1>
        <div className="portfolio__list">
            <div className="portfolio__item">
                <a href="https://github.com/boxior/test-ssd-celendar" className="portfolio__item-link" target="_blank">
                    <span className="portfolio__tech">
                        <span className="tech">
                            <span className="tech__item">React.js</span><span className="tech__item">Scss</span><span
                            className="tech__item">Webpack</span><span className="tech__item">Pug</span><span
                            className="tech__item">Html5</span>
                        </span>
                    </span>
                    <img className="portfolio__img" src={CelendarImg} alt="CelendarImg"/>
                </a>
            </div>
            <div className="portfolio__item">
                <a href="https://github.com/boxior/test-eldorado" className="portfolio__item-link" target="_blank">
                    <span className="tech">
                        <span className="tech__item">React.js</span><span className="tech__item">CSS Modules</span><span
                        className="tech__item">Npm</span><span className="tech__item">Emmet</span><span
                        className="tech__item">Router</span>
                    </span>
                    <img className="portfolio__img" src={DonationImg} alt="DiversidoImg"/>
                </a>
            </div>
        </div>
        <div className="portfolio__footer">
            <a href="https://github.com/boxior" className="portfolio__all" target="_blank">
                Another projects on Github
            </a>
        </div>
    </div>
);

export default Portfolio;
