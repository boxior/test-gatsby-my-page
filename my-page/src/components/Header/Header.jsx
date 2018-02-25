import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
// console.log({data});
// const Header = ({data}) => (
//
//   <header className="header">
//       <div className="header__logo">
//           <Link to="/" className="header__logo-link">
//               {/*<img className="header__logo-img" src="./img/logo.jpg" alt="" />*/}
//               <Img resolutions={data.file.childImageSharp.resolutions} />
//           </Link>
//       </div>
//       <div className="header__nav">
//           <div className="nav">
//               <div className="nav__item">
//                   <Link to="/about-me/about-me/" className="nav__link">About me</Link>
//               </div>
//               <div className="nav__item">
//                   <Link to="/portfolio/portfolio" className="nav__link">Portfolio</Link>
//               </div>
//           </div>
//       </div>
//   </header>
// );

// export default Header;
export default ({data}) => (
    <header className="header">
        <div className="header__logo">
            <Link to="/" className="header__logo-link">
                {/*<img className="header__logo-img" src="./img/logo.jpg" alt="" />*/}
                <Img resolutions={data.file.childImageSharp.resolutions} />
            </Link>
        </div>
        <div className="header__nav">
            <div className="nav">
                <div className="nav__item">
                    <Link to="/about-me/about-me/" className="nav__link">About me</Link>
                </div>
                <div className="nav__item">
                    <Link to="/portfolio/portfolio" className="nav__link">Portfolio</Link>
                </div>
            </div>
        </div>
    </header>
);

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "./img/logo.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
