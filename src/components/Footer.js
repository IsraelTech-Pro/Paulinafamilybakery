import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/><TwitterIcon/><FacebookIcon/><LinkedIn/>
        </div>
        <p>&copy; 2023 paulinafamilybackery.com</p>
      
    </div>
  )
}

export default Footer
