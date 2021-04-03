import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';


import Header from './header'
import Sidebar from './sidebar'
import '../layouts/index.css'
import Character from '../components/img/2d_animation-GRoth.png'
import fontMI from '../layouts/fonts/Muli-Italic.eot'
import fontMIFIX from '../layouts/fonts/Muli-Italic.eot?#iefix'
import fontMIWOFF from '../layouts/fonts/Muli-Italic.woff'
import fontMITTF from '../layouts/fonts/Muli-Italic.ttf'
import fontMISVG from '../layouts/fonts/Muli-Italic.svg'
import fontMR from '../layouts/fonts/Muli-Regular.eot'
import fontMRFIX from '../layouts/fonts/Muli-Regular.eot?#iefix'
import fontMRWOFF from '../layouts/fonts/Muli-Regular.woff'
import fontMRTFF from '../layouts/fonts/Muli-Regular.ttf'
import fontMRSVG from '../layouts/fonts/Muli-Regular.svg'


const Layout = ({ children }) => (
  
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    
    <div
    style={{
      background:'#E7CA11',
      height: '100vh',
      left: '0',
      margin: '0',
      position: 'fixed',
      textIndent: '-99999px',
      zIndex: '9998',
      borderColor: '#E5E5E5',
      borderStyle: 'solid none none',
      borderWidth: '1px',
    }}
    > 
    </div>

    <div className="page">
    
      {children}
    </div>
{/*     <div className="character">
      <img src={Character} />
    </div> */}
  </div>

)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
