import React from 'react';
import './Footer.css'
import amazonLogo from '../../Assets/amazon-logo-1536x1024.png.webp';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='footerCont1'>
            <div className='contentFooterTitle'>Get To Know Us</div>
            <div className='contentFooterTitleDiv'>
                <div className='contentFooterTitleCount'>About US</div>
                <div className='contentFooterTitleCount'>Careers</div>
                <div className='contentFooterTitleCount'>Press Releases</div>
                <div className='contentFooterTitleCount'>Amazon Science</div>
            </div>
        </div>
        <div className='footerCont1'>
            <div className='contentFooterTitle'>Connect with Us</div>
            <div className='contentFooterTitleDiv'>
                <div className='contentFooterTitleCount'>Facebook</div>
                <div className='contentFooterTitleCount'>Twitter</div>
                <div className='contentFooterTitleCount'>Instagram</div>
            </div>
        </div>


        <div className='footerCont1'>
            <div className='contentFooterTitle'>Make Money with Us</div>
            <div className='contentFooterTitleDiv'>
                <div className='contentFooterTitleCount'>Sell on Amazon</div>
                <div className='contentFooterTitleCount'>Sell under Amazon Accelerator</div>
                <div className='contentFooterTitleCount'>Protect and Build Your Brand</div>
                <div className='contentFooterTitleCount'>Amazon Global Selling</div>
                <div className='contentFooterTitleCount'>Supply to Amazon</div>
                <div className='contentFooterTitleCount'>Become an Affiliate</div>
            </div>
        </div>
        <div className='footerCont1'>
            <div className='contentFooterTitle'>Get To Know Us</div>
            <div className='contentFooterTitleDiv'>
                <div className='contentFooterTitleCount'>Your Account</div>
                <div className='contentFooterTitleCount'>Return Centre</div>
                <div className='contentFooterTitleCount'>Recalls and Product Safety Alerts   </div>
                <div className='contentFooterTitleCount'>100% Purchase Protection                </div>
                <div className='contentFooterTitleCount'>Amazon App Download</div>
                <div className='contentFooterTitleCount'>Help</div>
            </div>
        </div>
      </div>
      <div className='amazonImg'>
        <img className='amazonImgFooter' src={amazonLogo}/>
      </div>
    </div>
  )
}

export default Footer
