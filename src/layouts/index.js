import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Header from '../components/header'
import Sidebar from '../components/sidebar'
import './index.css'
import Character from '../components/img/2d_animation-GRoth.png'
import fontMI from './fonts/Muli-Italic.eot'
import fontMIFIX from './fonts/Muli-Italic.eot?#iefix'
import fontMIWOFF from './fonts/Muli-Italic.woff'
import fontMITTF from './fonts/Muli-Italic.ttf'
import fontMISVG from './fonts/Muli-Italic.svg'
import fontMR from './fonts/Muli-Regular.eot'
import fontMRFIX from './fonts/Muli-Regular.eot?#iefix'
import fontMRWOFF from './fonts/Muli-Regular.woff'
import fontMRTFF from './fonts/Muli-Regular.ttf'
import fontMRSVG from './fonts/Muli-Regular.svg'


const Layout = ({ children, data }) => (
  
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
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

    <Sidebar siteTitle={data.site.siteMetadata.title} />
    <div className="page">
    
    
      {children()}
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
