import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../../assets/bread-banner.jpg';
import '../../styles/Home.css'


function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
    <div className='headerContainer' >
        <h1>Paulina Family bakery</h1>
        <p>BAKERY TO FIT ANY ENGLAND TASTE</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
    </div>
    </div>
  )
}

export default Home
