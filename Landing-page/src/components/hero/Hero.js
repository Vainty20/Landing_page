import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import BgImage from '../../assets/bg1.webp'

function Hero() {
    return (
        <div className='hero'>
            <img className='bg-img' src={BgImage}></img>
            <div className="overlay"></div>
            <div className="content">
                <h1>Get the <span>Right Job</span></h1>
                <h2>you deserve</h2>
                <p>230,954 jobs listed here! Your dream job is waiting</p>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div>
                        <button className='home-btn' id='home-btn'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
