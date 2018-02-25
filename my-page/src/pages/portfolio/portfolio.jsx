import React from 'react';
import Link from 'gatsby-link';

const Portfolio = () => (
    <div className="portfolio container">
        <h1>Hi from the Portfolio</h1>
        <div className="portfolio__list">
            <div className="portfolio__item">
                <a href="">
                    <img className="portfolio__img"/>
                </a>
            </div>
            <div className="portfolio__item">
                <a href="">
                    <img className="portfolio__img"/>
                </a>
            </div>
        </div>
    </div>
)

export default Portfolio;
